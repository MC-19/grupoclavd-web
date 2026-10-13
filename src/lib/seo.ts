export function canonicalPath(pathname: string) {
  return pathname === "/" || /\.[^/]+$/.test(pathname)
    ? pathname
    : `${pathname.replace(/\/+$/, "")}/`;
}

export function breadcrumbSchema(items: { name: string; href: string }[], site: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name,
      item: new URL(item.href, site).toString(),
    })),
  };
}

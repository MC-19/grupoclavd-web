export const paths = {
  home: "/",
  services: "/servicios/",
  signage: "/servicios/rotulacion/",
  digitalPrinting: "/servicios/impresion-digital/",
  installation: "/servicios/instalacion-montaje/",
  dimensionalLetters: "/servicios/rotulacion/letras-corporeas/",
  illuminatedSigns: "/servicios/rotulacion/rotulos-luminosos-fachadas/",
  vehicles: "/servicios/rotulacion/vehiculos/",
  wayfinding: "/servicios/rotulacion/senaletica/",
  projects: "/proyectos/",
  blog: "/blog/",
  contact: "/contacto/",
  quote: "/presupuesto/",
  about: "/nosotros/",
  franchises: "/soluciones/franquicias-cadenas/",
  corporateIdentity: "/soluciones/implantacion-imagen-corporativa/",
  legal: "/aviso-legal/",
  privacy: "/privacidad/",
  cookies: "/cookies/",
} as const;

export const serviceNavigation = [
  { name: "Rotulación", href: paths.signage },
  { name: "Impresión digital", href: paths.digitalPrinting },
  { name: "Instalación y montaje", href: paths.installation },
  { name: "Letras corpóreas", href: paths.dimensionalLetters },
  { name: "Rótulos luminosos y fachadas", href: paths.illuminatedSigns },
  { name: "Rotulación de vehículos", href: paths.vehicles },
  { name: "Señalética", href: paths.wayfinding },
] as const;

interface NavigationItem {
  name: string;
  href: string;
  children?: typeof serviceNavigation;
}

export const mainNavigation: readonly NavigationItem[] = [
  { name: "Inicio", href: paths.home },
  { name: "Servicios", href: paths.services, children: serviceNavigation },
  { name: "Proyectos", href: paths.projects },
  { name: "Blog", href: paths.blog },
  { name: "Contacto", href: paths.contact },
  { name: "Presupuesto", href: paths.quote },
];

export const footerNavigation = {
  services: [
    { name: "Rotulación", href: paths.signage },
    { name: "Impresión digital", href: paths.digitalPrinting },
    { name: "Instalación y montaje", href: paths.installation },
    { name: "Señalética", href: paths.wayfinding },
  ],
  solutions: [
    { name: "Franquicias y cadenas", href: paths.franchises },
    {
      name: "Implantación de imagen corporativa",
      href: paths.corporateIdentity,
    },
  ],
  company: [
    { name: "Proyectos", href: paths.projects },
    { name: "Nosotros", href: paths.about },
    { name: "Blog", href: paths.blog },
    { name: "Contacto", href: paths.contact },
  ],
} as const;

export function isCurrentPath(pathname: string, href: string) {
  if (href === paths.home) return pathname === paths.home;

  const normalizedPathname = pathname.endsWith("/")
    ? pathname
    : `${pathname}/`;

  return normalizedPathname.startsWith(href);
}

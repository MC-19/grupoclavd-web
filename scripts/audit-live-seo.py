"""Comprueba producción sin modificarla: sitemap, canonical y redirects."""
import concurrent.futures
import json
import re
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

DOMAIN = "https://www.grupoclavd.com"
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args):
        return None

def inspect(url):
    result = {"url": url}
    try:
        response = urllib.request.build_opener(NoRedirect).open(url, timeout=20)
        html = response.read().decode()
        result["status"] = response.status
        canonical = re.search(r'<link\s+[^>]*rel="canonical"[^>]*href="([^"]+)"', html)
        result["canonical"] = canonical.group(1) if canonical else None
        result["noindex"] = bool(re.search(r'<meta[^>]+(?:name="robots"[^>]+content="[^"]*noindex|content="[^"]*noindex[^>]+name="robots")', html))
    except urllib.error.HTTPError as error:
        result.update(status=error.code, location=error.headers.get("Location"))
    except Exception as error:
        result["error"] = str(error)
    return result

def main():
    xml = urllib.request.urlopen(DOMAIN + "/sitemap-0.xml", timeout=20).read()
    urls = [node.text for node in ET.fromstring(xml).findall("s:url/s:loc", NS)]
    config = json.loads(Path("vercel.json").read_text())
    checks = urls + [url.rstrip("/") for url in urls if url != DOMAIN + "/"]
    for redirect in config["redirects"]:
        path = redirect["source"].replace("(/)?", "")
        checks.extend([DOMAIN + path, DOMAIN + path + "/"])
    checks.extend(["http://www.grupoclavd.com/servicios/", "https://grupoclavd.com/servicios/"])
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        results = list(pool.map(inspect, checks))
    report = {"sitemapURLs": urls, "checks": results}
    Path("docs/seo/live-audit-2026-10-13.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"sitemapURLs": len(urls), "checks": len(results), "non200": [r for r in results if r.get("status") != 200], "slashVariants200": sum(r.get("status") == 200 for r in results[len(urls):len(urls)*2-1])}, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()

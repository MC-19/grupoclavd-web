# Procedencia de recursos visuales

Este registro documenta los recursos incorporados o renombrados durante la mejora visual. No se ha añadido ninguna fotografía externa ni procedente de competidores.

| Recurso publicado | Procedencia | Uso |
| --- | --- | --- |
| `/images/work/produccion-rotulo-taller.jpg` | `Fotos Nuevas/WhatsApp Image 2026-08-04 at 23.06.33 (3).jpeg` | Página Nosotros |
| `/images/work/fachada-comercial-pikolinos.jpg` | `Fotos Que si/1715268246700_NoticiaAmpliada.jpg` | Franquicias y cadenas |
| `/images/work/implantacion-grafica-tag-heuer.jpg` | `Imagenes Junio-2025/Imagen de WhatsApp 2025-06-05 a las 12.32.36_b5c41d32.jpg` | Implantación de imagen corporativa |
| `/images/work/soporte-rigido-tag-heuer.jpg` | `Imagenes Junio-2025/Imagen de WhatsApp 2025-06-05 a las 12.32.36_551c2ae8.jpg` | Soportes rígidos |
| `/images/work/instalacion-grafica-goldwell.jpg` | `Blog2/1a02e50e-76d4-4ae9-b502-f02129ab1ac6.jpeg` | Producción e instalación de impresión digital |
| `/images/work/valla-publicitaria-exterior.jpg` | `Fotos Nuevas/WhatsApp Image 2026-08-04 at 23.06.30 (3).jpeg` | Catálogo general de servicios |
| `/images/banderola-comercial-fachada.jpg` | Imagen generada específicamente para GrupoClavD | Ilustración de producto; se identifica como tal en la interfaz |

Las fotografías proceden del archivo visual del proyecto y sus derechos de uso han sido confirmados por GrupoClavD. Las variantes `-640.webp` y `-1280.webp` son derivados optimizados de esos originales.

Las imágenes que no utiliza el código ni la salida estática se conservan en
`asset-archive/public/ImagenesWebClav/`. Esa carpeta no forma parte del contenido
publicado. Antes de mover recursos, `scripts/archive-unused-public-images.mjs`
comprueba referencias en componentes, estilos, scripts, datos y el HTML generado.

`src/data/imageVariants.json` registra las dimensiones reales de cada original y
de cada variante publicada. Se regenera con `npm run optimize:images`; los
descriptores de `srcset` proceden de esas medidas y no del nombre del archivo.

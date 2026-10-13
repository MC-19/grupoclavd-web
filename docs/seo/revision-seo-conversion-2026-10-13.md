# Revisión SEO y conversión — GrupoClavD

Fecha: 13 de octubre de 2026. Cambios preparados en el repositorio, pendientes de publicación. Se conserva la arquitectura, el diseño y las 46 URLs del sitemap.

## Datos y prioridades

Search Console consultado mediante Windsor.ai para `https://www.grupoclavd.com/`, del **12 de septiembre al 9 de octubre de 2026**, 28 días. Se excluyen los días más recientes para evitar depender de datos todavía incompletos. La ventana de las cifras aportadas inicialmente por el usuario no estaba indicada; las diferencias de impresiones no implican una contradicción.

La serie diaria devuelve **745 impresiones, 4 clics y CTR 0,54 %**, frente a 602 impresiones y 5 clics del 15 de agosto al 11 de septiembre: impresiones +23,8 %. Del 3 al 9 de octubre hay 366 impresiones frente a 142 del 26 de septiembre al 2 de octubre (+157,7 %). La posición media global ponderada por impresiones es 21,88 frente a 17,59 en el periodo anterior: aumentan las impresiones, pero eso no demuestra por sí solo una mejora de rankings comparables. Hay que seguir las mismas consultas y páginas.

| Consulta exacta | Impresiones | Posición | Página atribuida por GSC |
| --- | ---: | ---: | --- |
| vallas publicitarias | 40 | 11,63 | `/` |
| displays publicitarios | 8 | 11,25 | Antigua `/servicios/expositores-y-displays` |
| rotulacion de vehiculos | 3 | 11,00 | Blog de vehículos |
| rotulacion de vehiculos de empresa | 4 | 14,75 | Blog de vehículos |
| rotulos letras corporeas | 3 | 12,67 | Blog de letras frente a luminosos |
| impresion soporte rigido | 5 | 7,00 | Blog de lona, soporte rígido o vinilo |
| vinilo adhesivo | 12 | 3,25 | `/` |
| vinilo | 9 | 3,44 | `/` |

Las ocho consultas tienen cero clics en esta ventana. Es una muestra pequeña: no permite cuantificar un aumento de CTR esperado ni justificar páginas nuevas únicamente por esas posiciones.

**La posición de una consulta no es la posición media de su servicio.** El servicio de vehículos tiene 48 impresiones y posición media 59,56; fachadas, 39 y 49,41. En ambos casos sus guías posicionan mejor y son una vía de acceso comercial que conviene conservar.

| Página con oportunidad | Impresiones | Posición media | Clics |
| --- | ---: | ---: | ---: |
| Blog de vehículos | 33 | 12,70 | 0 |
| Blog de fachada | 17 | 10,12 | 0 |
| Blog de interiores y recepciones | 11 | 8,73 | 0 |
| Blog de lona, soporte rígido o vinilo | 12 | 6,50 | 0 |
| Blog de información para presupuesto | 6 | 9,67 | 0 |
| Servicio de letras corpóreas | 7 | 11,00 | 0 |
| Servicio de lonas | 5 | 6,80 | 0 |
| Implantación de imagen corporativa | 7 | 14,43 | 1 |

La página de implantación ya responde a una intención comercial y tiene enlaces a trabajos y presupuesto. Se mantiene su contenido: un clic no justifica rehacerla.

Los datos agrupados por página suman 768 impresiones y los pares consulta/página, 461 impresiones y cero clics. No se usan esas sumas como total del sitio ni se intenta repartir los cuatro clics entre consultas ocultas. Las dimensiones de GSC cambian el alcance de la agregación y la información de consultas puede estar limitada por privacidad.

Evidencia reproducible: [serie diaria y GA4](performance-baseline-2026-10-13.json), [consultas/páginas](gsc-query-pages-2026-09-12_2026-10-09.json), [páginas](gsc-pages-2026-09-12_2026-10-09.json).

## Vallas y displays: decisión de arquitectura

**Vallas:** reforzar `/servicios/impresion-digital/lonas-publicitarias/`. El repositorio documenta gráfica exterior de Cepsa, producción de lonas, colocación cuando se incluye y un catálogo con lona lisa, microperforada y refuerzo con ojales. La página responde ahora a la producción de gráfica para una valla, con title/H1, un apartado específico, información de presupuesto y FAQs.

No hay documentación suficiente para plantear un servicio distinto de alquiler de espacios, fabricación de estructuras o gestión integral de emplazamientos. Una segunda landing competiría con la de lonas sobre prácticamente la misma información. Si se confirma un alcance diferenciado de vallas, con procesos, trabajos y condiciones propios, se podrá reconsiderar una landing. La posición 11,63 actual corresponde a la portada, no demuestra que una landing nueva vaya a heredar esa posición.

**Displays:** reforzar `/servicios/impresion-digital/soportes-rigidos/`, destino actual del redirect de Wix. La página mencionaba displays, pero su presentación estaba centrada en el soporte. Ahora title/H1, introducción y una sección específica explican su aplicación en el punto de venta, con la referencia existente de Biomecanics y el caso de paneles TAG Heuer. Se solicitan función, medidas, cantidad y diseño sin atribuir materiales no confirmados.

La antigua URL registra 8 impresiones de la consulta exacta y 22 impresiones totales; actualmente responde con redirect permanente. Se mantiene su destino. Crear otra página sin un catálogo diferenciado aumentaría el solapamiento y obligaría a reconsiderar un redirect que funciona.

## Contenido, snippets y enlaces preparados

- Vehículos: title más explícito sobre flotas y description centrada en pedir presupuesto con modelo, fotos y unidades. El CTA concreta la información necesaria; las FAQs distinguen precio del vinilo y trabajo completo.
- Letras: title/H1 sobre fachadas e interiores, descripción de fabricación e instalación con o sin iluminación, y preparación del encargo para recepción o fachada. Se conservan las aplicaciones y fotografías existentes.
- Fachadas: title/H1 más claros sobre rotulación, description comercial y FAQs sobre elección e instalación, sin asegurar permisos ni condiciones de montaje.
- Lonas y soportes rígidos: mejoras descritas arriba, conservando el resto del contenido que ya explica producción e instalación.
- Vinilos: se conservan title, H1 y copy principal. Las consultas fuertes posicionan en la portada y no justifican una reescritura. Se añaden respuestas prácticas y acceso a presupuesto, aclarando que la estimación no es el importe final.
- Guías entre posiciones 5–15: snippets más concretos para vehículos, fachada, interiores, comparación de soportes y presupuesto. Se conserva su intención informativa. El título del blog de vehículos deja de duplicar el título del servicio.
- Portada: enlaces naturales a lonas/gráfica para vallas, displays/soportes rígidos y vinilos desde su bloque de servicios, aprovechando las consultas que Google atribuye a la home.
- Blog: enlaces al servicio dentro del apartado que trata esa elección, además de los enlaces relacionados ya presentes. Las guías de comparación enlazan tanto a soportes rígidos como a lonas.
- Servicios: se conservan los enlaces a proyectos concretos y presupuesto. El bloque de preparación/FAQs añade enlaces de vuelta a las guías y contacto directo.
- Proyectos: se mantiene el alcance confirmado y se añade un CTA de presupuesto antes de la galería, breadcrumbs y otros trabajos relacionados. Se priorizan servicios compartidos; cuando faltan, se muestran aplicaciones de la misma categoría, con un encabezado amplio que no afirma que sean el mismo tipo de trabajo.
- TAG Heuer enlaza ahora a soportes rígidos/paneles gráficos; Alcampo enlaza al servicio específico de letras corpóreas en lugar del hub genérico.

Cadena principal: **guía → servicio → ficha real → presupuesto/contacto**. También se refuerza **ficha → servicio**. No se atribuye una lona a EITB ni un vinilo a Mila: se conserva la presentación de esos casos como gráfica exterior o interior, según la evidencia disponible.

## Proyectos y ubicación

Se mantienen las ubicaciones ya documentadas: aeropuerto de Alicante e IFA en las fichas correspondientes. El schema de cada proyecto toma `contentLocation` exclusivamente del campo visible `Lugar`.

No se deducen ciudades por nombres de clientes, nombres de archivos, sede de una marca o ubicación de GrupoClavD. Los trabajos sin ubicación confirmada mantienen su descripción comercial y los enlaces a servicios, sin añadir SEO local artificial.

## Indexación y redirects

Se comprobaron **107 solicitudes HTTP de producción**: las 46 URLs del sitemap, sus 45 variantes sin barra, los siete redirects de Wix con y sin barra y dos variantes de protocolo/dominio. [Resultados HTTP](live-audit-2026-10-13.json).

- Las 46 URLs del sitemap responden 200 y tienen canonical a la misma URL con barra.
- Los siete redirects de Wix responden **308 permanente**, tanto con barra como sin ella. Sus destinos responden 200. Son 308, no 301; Vercel usa 308 con `permanent: true`. No se cambian para obtener otro código permanente. [Documentación de redirects de Vercel](https://vercel.com/docs/project-configuration/vercel-json#redirects).
- HTTP y dominio sin `www` redirigen a HTTPS con `www` en las rutas comprobadas.
- Las 45 variantes actuales sin barra devuelven 200, con canonical hacia la variante con barra. Hay consolidación por canonical, pero sigue existiendo un duplicado accesible; GSC muestra, además, datos en `/servicios` y `/servicios/`.
- Se prepara `trailingSlash: true` en Vercel y `trailingSlash: "always"` en Astro para consolidar las variantes mediante 308. Se conserva la URL con barra que ya utiliza el sitemap y el enlazado. Los ficheros con extensión quedan fuera de esa regla. [Comportamiento de Vercel](https://vercel.com/docs/project-configuration/vercel-json#trailingslash).
- El canonical se normaliza de forma defensiva en el layout y en los identificadores del blog y los proyectos. Los siete mappings de Wix permanecen idénticos al baseline.
- El sitemap continúa con 46 URLs únicas y sin rutas antiguas. No se vuelve a enviar ni se cambia una configuración de Search Console que funciona.

Los redirects correctos hoy no prueban que Google ya haya retirado todas las URLs históricas del índice. La inspección de URL de GSC no estuvo disponible: GSC Wizard devuelve `payment_required`, y Windsor no ofrece ese campo en el conector consultado. Se verificó el comportamiento HTTP actual, sin afirmar una retirada del índice que no podemos observar.

La regla de barras necesita comprobarse después del despliegue: el build estático valida URLs y destinos, pero no ejecuta el enrutado de Vercel. Verificar que una URL actual sin barra acaba en su versión con barra, que los redirects antiguos siguen siendo permanentes, que no hay bucles y que los destinos finales mantienen 200/canonical correctos.

## Datos estructurados

- Se conserva `Organization`; no se añade `LocalBusiness`, dado que el sitio declara que no hay atención presencial abierta al público.
- Se añade `Service` a las seis páginas revisadas, describiendo el mismo servicio que el contenido visible, sin precios, reseñas ni garantías inventados. No se promete un resultado enriquecido específico para servicios.
- Se añaden breadcrumbs visibles y `BreadcrumbList` a esos servicios y a las doce fichas de proyectos.
- Las fichas incluyen `CreativeWork`, descripción, imagen y servicios relacionados; la ubicación procede únicamente de datos visibles confirmados. No se presenta a la marca mostrada como autor del trabajo ni se deduce un contrato por una foto.
- Se conserva `BlogPosting` y los breadcrumbs que ya tenían los artículos; no se fabrican fechas de publicación ni modificación.
- Las nuevas FAQs se ofrecen como contenido útil en HTML con `details`, sin JavaScript adicional. No se añade `FAQPage` como vía para ganar CTR: Google retiró los resultados enriquecidos FAQ en mayo de 2026. [Actualización oficial de Google](https://developers.google.com/search/updates#may-2026).

El JSON-LD se parsea en la validación local y se comprueban destinos y consistencia de las breadcrumbs. Esto no sustituye la evaluación de Google en su prueba de resultados enriquecidos después de publicar.

## Conversión: evidencia y límites

GA4 `466683261`, mismo periodo, vía Windsor:

- Un `begin_quote`, un `click_email`, un `click_phone` y un `click_whatsapp`, todos atribuidos a tráfico directo en este informe.
- Dos `ads_conversion_Contactar_1`: uno directo y uno `google / organic`.
- No se devuelve `generate_lead`. No equivale a demostrar que el negocio no haya recibido consultas por otros medios.

La [revisión del 11 de octubre](../revision-web-2026-10-11.md) ya documentó que `ads_conversion_Contactar_1` se crea a partir de visitas a Contacto. Por tanto, no se usa como solicitud enviada ni como prueba de conversión orgánica. No hay datos suficientes para calcular una tasa fiable de leads por servicio.

Se mantiene la medición existente, y se comprueba que las mejoras no rompen contacto ni presupuesto. Queda pendiente en GA4 revisar la conversión antigua y confirmar `generate_lead` como evento clave, de acuerdo con la revisión anterior. No se cambia la cuenta de Analytics desde esta tarea ni se envían consultas ficticias al negocio.

## Rendimiento y Core Web Vitals

- Astro genera HTML estático. Las nuevas secciones, FAQs y breadcrumbs no añaden runtime ni dependencias al navegador.
- Imágenes principales con `loading="eager"` y `fetchpriority="high"`; las secundarias y tarjetas usan lazy loading.
- Las imágenes del contenido tienen dimensiones del manifiesto y versiones WebP con `srcset`. En móvil, las imágenes prioritarias de las páginas verificadas usan variantes de 640 px.
- CSS generado de unos 43,7 KB sin comprimir; el JS del calculador es de unos 7,8 KB sin comprimir. Las páginas de servicio no necesitan ese calculador. El JS de consentimiento y navegación sigue existiendo; no se afirma que toda la web envíe cero JavaScript.
- No se descargan fuentes externas desde el código revisado; hay una pila de fuentes del sistema.
- El vídeo de Bistrea usa `preload="none"`, poster, controles y dimensiones. El mapa se carga con lazy loading.
- Los logos de clientes carecen de atributos width/height, pero sus celdas tienen tamaño fijo por CSS (192 × 96). No se alteran sin evidencia de desplazamiento; las comprobaciones locales no detectan CLS.
- Se ajusta `sizes` de la imagen opcional del blog al ancho real de la columna. Los artículos actuales no tienen imágenes configuradas, así que no se atribuye a este ajuste una mejora medida en ellos.

**20 vistas comprobadas en Chromium**, 10 rutas a 390 y 1440 px: sin errores JavaScript, sin desbordamiento, imágenes prioritarias cargadas y FAQs operativas. LCP local observado entre 32 y 60 ms; CLS observado 0 en la carga inicial. [Medición local](browser-audit-2026-10-13.json).

Son cargas locales sin limitación de CPU/red, con recursos externos interceptados y sin consentimiento analítico. **No son Lighthouse, CrUX ni percentiles de usuarios reales**. No permiten certificar LCP/INP/CLS de producción ni medir el impacto de Analytics tras consentimiento. INP de campo requiere interacciones reales y datos de usuarios; no se inventa a partir de la inspección del código.

## Validación y seguimiento

- `npm run validate`: análisis estático sin errores ni warnings y build de 47 páginas, incluidas las 46 del sitemap y la 404.
- `node scripts/verify-seo.mjs`: sitemap único, canonicals, un H1 por página, 2.597 enlaces internos y anclas, imágenes existentes y JSON-LD parseable. Todos los redirects coinciden con el baseline.
- `node scripts/verify-seo-browser.mjs`: 20 vistas locales y funcionamiento de FAQs.
- `npm run test:conversions`: 17 escenarios correctos; proveedores y Analytics interceptados, sin envíos reales.
- `git diff --check`: sin problemas de whitespace.

Tras publicar, repetir `python3 scripts/audit-live-seo.py` y comprobar especialmente las variantes sin barra y los redirects Wix. El fichero HTTP incluido en esta revisión describe producción **antes** de los cambios; no es una validación del despliegue nuevo.

Registrar la fecha de publicación y revisar a las 2 y 4 semanas las consultas/páginas de las tablas, separando dispositivo cuando haya volumen. Medir clics, impresiones y CTR dentro de bandas de posición comparables. Seguir también el traslado de impresiones de las rutas Wix a sus destinos y de los servicios respecto a las guías.

Para vallas y displays, evaluar primero si sus destinos actuales reciben impresiones de esas consultas después de la consolidación. Reconsiderar una landing solo si aparece una intención distinta y existe documentación real que permita resolverla mejor. Para conversión, utilizar envíos confirmados (`generate_lead`) y mantener clics de contacto/inicios de presupuesto como señales separadas.

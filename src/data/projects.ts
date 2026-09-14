import { paths } from "@/data/navigation";

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug?: string;
  title: string;
  category: string;
  summary: string;
  cover: string;
  coverAlt: string;
  gallery?: ProjectImage[];
  services?: { label: string; href: string }[];
}

const photos = "/ImagenesWebClav/Fotos%20Que%20si/";
const newPhotos = "/ImagenesWebClav/Fotos%20Nuevas/";
const june = "/ImagenesWebClav/Imagenes%20Junio-2025/";
const blog1 = "/ImagenesWebClav/Blog1/";
const blog2 = "/ImagenesWebClav/Blog2/";

// Las descripciones se limitan a lo que muestran las imágenes. Cliente,
// ubicación, fecha y alcance del encargo quedan pendientes de confirmación.
export const featuredProjects: Project[] = [
  {
    slug: "rotulo-somium",
    title: "Rótulo de Somium en fachada",
    category: "Rotulación exterior · Instalación",
    summary: "Una secuencia fotográfica del rótulo de Somium, desde su colocación hasta las vistas del resultado en la fachada.",
    cover: `${june}Imagen%20de%20WhatsApp%202025-06-18%20a%20las%2017.42.21_1dd350d1.jpg`,
    coverAlt: "Rótulo de Somium visible en una fachada de lamas oscuras",
    gallery: [
      { src: `${june}Imagen%20de%20WhatsApp%202025-06-18%20a%20las%2017.42.22_1f30258a.jpg`, alt: "Zona de fachada preparada para colocar el rótulo", caption: "Preparación de la fachada" },
      { src: `${june}Imagen%20de%20WhatsApp%202025-06-18%20a%20las%2017.42.22_3de8be92.jpg`, alt: "Persona trabajando en la colocación del rótulo", caption: "Colocación del elemento gráfico" },
      { src: `${june}instalacion-rotulo-somium-vall-residences.jpg`, alt: "Primer plano de la colocación del rótulo Somium", caption: "Detalle de la instalación" },
      { src: `${june}Imagen%20de%20WhatsApp%202025-06-18%20a%20las%2017.42.21_230c62d9.jpg`, alt: "Fachada con el rótulo Somium instalado", caption: "Vista del resultado" },
    ],
    services: [
      { label: "Rótulos y fachadas", href: paths.illuminatedSigns },
      { label: "Instalación y montaje", href: paths.installation },
    ],
  },
  {
    slug: "grafica-goldwell-mia",
    title: "Gráfica GOLDWELL en un espacio de estilismo",
    category: "Gráfica interior · Instalación",
    summary: "Vistas del local rotulado como Mia Estilistas y de una gráfica GOLDWELL durante su colocación y una vez integrada en el interior.",
    cover: `${blog2}465c05a5-c468-49fa-9eaf-c5192e419c2d.jpeg`,
    coverAlt: "Gráfica GOLDWELL instalada sobre una pared interior",
    gallery: [
      { src: `${blog2}0187bb78-ab30-4d42-ad17-293526eea32d.jpeg`, alt: "Fachada del local Mia Estilistas con gráfica GOLDWELL visible en el interior", caption: "El espacio visto desde el exterior" },
      { src: `${blog2}1a02e50e-76d4-4ae9-b502-f02129ab1ac6.jpeg`, alt: "Trabajador colocando la gráfica GOLDWELL sobre la pared", caption: "Gráfica en colocación" },
      { src: `${blog2}7939c0a6-d27a-455e-8c16-cd48bb887305.jpeg`, alt: "Vista lateral del trabajo de colocación de la gráfica", caption: "Otra vista de la instalación" },
      { src: `${blog2}938001dc-28bc-4da1-860a-f9638f4bfd52.jpeg`, alt: "Detalle de la gráfica GOLDWELL terminada en el interior", caption: "Detalle del resultado" },
    ],
    services: [
      { label: "Impresión digital", href: paths.digitalPrinting },
      { label: "Instalación y montaje", href: paths.installation },
    ],
  },
  {
    slug: "fachada-labus-bar",
    title: "Imagen de fachada de Labus Bar",
    category: "Rotulación de fachada",
    summary: "Una serie de imágenes muestra la intervención en la fachada de Labus Bar y el aspecto final de su gráfica exterior.",
    cover: `${blog1}6.jpeg`,
    coverAlt: "Fachada de Labus Bar con su nueva gráfica exterior",
    gallery: [
      { src: `${blog1}1.jpeg`, alt: "Trabajo en curso en la fachada de Labus Bar", caption: "Inicio de la intervención" },
      { src: `${blog1}2.jpeg`, alt: "Persona trabajando sobre la zona superior de la fachada", caption: "Trabajo sobre la fachada" },
      { src: `${blog1}4.jpeg`, alt: "Persona sobre una escalera junto a la fachada de Labus Bar", caption: "Colocación de la gráfica" },
      { src: `${blog1}5.jpeg`, alt: "Gráfica de Labus Bar con logotipo y textos terminados", caption: "Detalle del resultado" },
    ],
    services: [
      { label: "Rotulación", href: paths.signage },
      { label: "Instalación y montaje", href: paths.installation },
    ],
  },
  {
    slug: "espacio-tag-heuer",
    title: "Gráfica TAG Heuer en un espacio comercial",
    category: "Gráfica para interiores",
    summary: "Diferentes vistas de un espacio comercial con gráfica de TAG Heuer integrada en paredes y zonas de exposición.",
    cover: `${june}Imagen%20de%20WhatsApp%202025-06-05%20a%20las%2012.32.36_28ac576e.jpg`,
    coverAlt: "Espacio comercial con gráfica de TAG Heuer en paredes y expositores",
    gallery: [
      { src: `${june}Imagen%20de%20WhatsApp%202025-06-05%20a%20las%2012.32.36_551c2ae8.jpg`, alt: "Panel gráfico con un reloj TAG Heuer", caption: "Gráfica de producto" },
      { src: `${june}Imagen%20de%20WhatsApp%202025-06-05%20a%20las%2012.32.36_904f722c.jpg`, alt: "Vista de los paneles gráficos en el espacio comercial", caption: "Vista del conjunto" },
      { src: `${june}Imagen%20de%20WhatsApp%202025-06-05%20a%20las%2012.32.36_bf576be1.jpg`, alt: "Zona de exposición con gráfica TAG Heuer", caption: "Otra zona del espacio" },
    ],
    services: [
      { label: "Impresión digital", href: paths.digitalPrinting },
    ],
  },
];

export const otherProjects: Project[] = [
  {
    title: "Letras de MIMMA Gallery",
    category: "Letras corpóreas · Fachada",
    summary: "Letras de MIMMA Gallery visibles sobre una fachada comercial.",
    cover: `${newPhotos}letras-corporeas-mimma-gallery-fachada.jpeg`,
    coverAlt: "Letras de MIMMA Gallery instaladas en una fachada",
  },
  {
    title: "Letras de Alcampo en fachada",
    category: "Rotulación exterior · Instalación",
    summary: "Una vista del montaje de las letras en una fachada comercial.",
    cover: `${newPhotos}instalacion-letras-alcampo-fachada.jpeg`,
    coverAlt: "Colocación de letras de Alcampo en una fachada",
  },
  {
    title: "Gráfica de MySoft en interior",
    category: "Gráfica interior",
    summary: "Vista de una pieza gráfica de MySoft en un espacio interior.",
    cover: `${photos}20240529_113559.jpg`,
    coverAlt: "Gráfica de MySoft en un espacio interior",
  },
  {
    title: "Rotulación de una furgoneta",
    category: "Vehículos",
    summary: "Furgoneta con gráfica de marca aplicada en los laterales.",
    cover: `${newPhotos}rotulacion-furgoneta-ribera-valldigna.jpeg`,
    coverAlt: "Furgoneta con gráfica de colores aplicada en el lateral",
  },
];

export const allProjects = [...featuredProjects, ...otherProjects];

export function projectHref(project: Project) {
  return project.slug ? `${paths.projects}${project.slug}/` : undefined;
}

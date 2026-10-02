import { paths } from "@/data/navigation";

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export type ProjectFilter = "rotulacion" | "impresion-digital" | "instalacion-montaje";

export interface Project {
  slug?: string;
  title: string;
  category: string;
  filters: ProjectFilter[];
  summary: string;
  cover: string;
  coverAlt: string;
  gallery?: ProjectImage[];
  preserveFullImage?: boolean;
  details?: { label: string; value: string }[];
  description?: string[];
  video?: { src: string; poster: string; caption: string };
  services?: { label: string; href: string }[];
}

const photos = "/ImagenesWebClav/Fotos%20Que%20si/";
const newPhotos = "/ImagenesWebClav/Fotos%20Nuevas/";
const june = "/ImagenesWebClav/Imagenes%20Junio-2025/";
const blog1 = "/ImagenesWebClav/Blog1/";
const blog2 = "/ImagenesWebClav/Blog2/";

// Mila, Bistrea y EITB: alcance confirmado por GrupoClavD.
// Los proyectos anteriores conservan sus descripciones basadas en las imágenes.
export const featuredProjects: Project[] = [
  {
    slug: "stand-mila-ifa",
    title: "Gráfica del stand de Mila en IFA",
    category: "Stands · Impresión digital · Instalación",
    filters: ["impresion-digital", "instalacion-montaje"],
    summary: "Impresión, instalación y montaje de la gráfica del stand de Mila para la feria de gastronomía en IFA, a partir del diseño proporcionado por el cliente.",
    preserveFullImage: true,
    cover: "/images/projects/mila-stand-en-uso-1200.webp",
    coverAlt: "Stand de Mila en uso, con gráfica de ondas y rótulo superior",
    details: [
      { label: "Lugar", value: "IFA" },
      { label: "Montaje", value: "1 de octubre de 2026" },
      { label: "Feria de gastronomía", value: "Del 2 al 5 de octubre de 2026" },
      { label: "Diseño", value: "Proporcionado por Mila" },
    ],
    description: ["Mila aportó el diseño de la gráfica. GrupoClavD se encargó de la impresión, la instalación y el montaje para su presencia en la feria de gastronomía de IFA.", "El servicio incluye la retirada de los elementos gráficos. La galería reúne vistas del montaje y del stand en uso."],
    gallery: [
      { src: "/images/projects/mila-colocacion-grafica-1600.webp", alt: "Persona colocando la gráfica de ondas en una pared del stand de Mila", caption: "Colocación de la gráfica" },
      { src: "/images/projects/mila-montaje-1600.webp", alt: "Trabajo de montaje de la gráfica del stand de Mila", caption: "Montaje en IFA" },
      { src: "/images/projects/mila-vista-montaje-1600.webp", alt: "Vista general del stand de Mila durante el montaje", caption: "El espacio durante el montaje" },
      { src: "/images/projects/mila-stand-terminado-1200.webp", alt: "Stand de Mila con su gráfica y mostrador en uso", caption: "El stand en uso" },
    ],
    services: [{ label: "Impresión digital", href: paths.digitalPrinting }, { label: "Instalación y montaje", href: paths.installation }],
  },
  {
    slug: "grafica-fachada-eitb",
    title: "Gráfica de campaña en la fachada de EITB",
    category: "Gráfica exterior · Impresión digital · Instalación",
    filters: ["impresion-digital", "instalacion-montaje"],
    summary: "Impresión, instalación y montaje de gráfica exterior para una campaña de EITB, con diseño y elementos gráficos proporcionados por el cliente.",
    preserveFullImage: true,
    cover: "/images/projects/eitb-fachada-1600.webp",
    coverAlt: "Vista de la fachada de EITB con gráfica de campaña instalada",
    details: [{ label: "Diseño y elementos gráficos", value: "Proporcionados por EITB" }, { label: "Encargo", value: "Una campaña" }],
    description: ["EITB proporcionó el diseño y los elementos gráficos de la campaña. GrupoClavD realizó la impresión, la instalación y el montaje de la gráfica en fachada, con la retirada incluida en el alcance del encargo.", "Las fotografías muestran distintas creatividades de una misma campaña y trabajos de colocación en altura."],
    gallery: [
      { src: "/images/projects/eitb-trabajo-en-altura-1600.webp", alt: "Plataforma elevadora junto a la gráfica en la fachada de EITB", caption: "Trabajo en altura" },
      { src: "/images/projects/eitb-montaje-grafica-1600.webp", alt: "Montaje de gráfica de campaña en la fachada de EITB con plataforma elevadora", caption: "Colocación de la gráfica exterior" },
      { src: "/images/projects/eitb-campana-etb-on-1600.webp", alt: "Gráfica de etb on en la fachada de EITB", caption: "Otra creatividad de la misma campaña" },
    ],
    services: [{ label: "Impresión digital", href: paths.digitalPrinting }, { label: "Instalación y montaje", href: paths.installation }],
  },
  {
    slug: "stand-bistrea-ifa",
    title: "Diseño y gráfica del stand de Bistrea en IFA",
    category: "Stands · Diseño · Impresión digital",
    filters: ["impresion-digital", "instalacion-montaje"],
    summary: "Diseño de la gráfica, impresión, instalación y montaje para Bistrea en la feria de gastronomía de IFA, a partir de los logotipos proporcionados por el cliente.",
    preserveFullImage: true,
    cover: "/images/projects/bistrea-montaje-stand-1600.webp",
    coverAlt: "Vista del stand de Bistrea durante el montaje de su gráfica",
    details: [
      { label: "Lugar", value: "IFA" },
      { label: "Montaje", value: "1 de octubre de 2026" },
      { label: "Feria de gastronomía", value: "Del 2 al 5 de octubre de 2026" },
      { label: "Diseño gráfico", value: "GrupoClavD, con logotipos aportados por el cliente" },
    ],
    description: ["GrupoClavD desarrolló el diseño gráfico a partir de los logotipos proporcionados por el cliente y realizó la impresión, la instalación y el montaje para la feria de gastronomía de IFA.", "Las zonas de Bistrea y Gourmet Café forman parte del mismo encargo. El servicio incluye la retirada de los elementos gráficos. Las fotos documentan el montaje y el vídeo muestra el espacio en uso."],
    gallery: [
      { src: "/images/projects/bistrea-colocacion-grafica-1600.webp", alt: "Personas trabajando en la colocación de gráfica en el stand de Bistrea", caption: "Colocación de la gráfica" },
      { src: "/images/projects/bistrea-pared-naranja-1600.webp", alt: "Pared con gráfica naranja del stand durante el montaje", caption: "Detalle de la gráfica durante el montaje" },
      { src: "/images/projects/bistrea-montaje-pared-1600.webp", alt: "Persona trabajando junto a una pared gráfica del stand", caption: "Montaje de otra zona del espacio" },
      { src: "/images/projects/bistrea-pared-verde-1600.webp", alt: "Zona del stand con gráfica verde, mobiliario y materiales de montaje", caption: "Vista del espacio durante el montaje" },
    ],
    video: { src: "/images/projects/bistrea-stand-ifa.mp4", poster: "/images/projects/bistrea-video-portada.webp", caption: "Recorrido por las zonas de Bistrea y Gourmet Café en el espacio en uso." },
    services: [{ label: "Impresión digital", href: paths.digitalPrinting }, { label: "Instalación y montaje", href: paths.installation }],
  },

  {
    slug: "rotulo-somium",
    title: "Rótulo de Somium en fachada",
    category: "Rotulación exterior · Instalación",
    filters: ["rotulacion", "instalacion-montaje"],
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
    filters: ["impresion-digital", "instalacion-montaje"],
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
    filters: ["rotulacion", "instalacion-montaje"],
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
    filters: ["impresion-digital"],
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
    filters: ["rotulacion"],
    summary: "Letras de MIMMA Gallery visibles sobre una fachada comercial.",
    cover: `${newPhotos}letras-corporeas-mimma-gallery-fachada.jpeg`,
    coverAlt: "Letras de MIMMA Gallery instaladas en una fachada",
  },
  {
    title: "Letras de Alcampo en fachada",
    category: "Rotulación exterior · Instalación",
    filters: ["rotulacion", "instalacion-montaje"],
    summary: "Una vista del montaje de las letras en una fachada comercial.",
    cover: `${newPhotos}instalacion-letras-alcampo-fachada.jpeg`,
    coverAlt: "Colocación de letras de Alcampo en una fachada",
  },
  {
    title: "Gráfica de MySoft en interior",
    category: "Gráfica interior",
    filters: ["impresion-digital", "instalacion-montaje"],
    summary: "Vista de una pieza gráfica de MySoft en un espacio interior.",
    cover: `${photos}20240529_113559.jpg`,
    coverAlt: "Gráfica de MySoft en un espacio interior",
  },
  {
    title: "Rotulación de una furgoneta",
    category: "Vehículos",
    filters: ["rotulacion"],
    summary: "Furgoneta con gráfica de marca aplicada en los laterales.",
    cover: `${newPhotos}rotulacion-furgoneta-ribera-valldigna.jpeg`,
    coverAlt: "Furgoneta con gráfica de colores aplicada en el lateral",
  },
];

export const allProjects = [...featuredProjects, ...otherProjects];

export function projectHref(project: Project) {
  return project.slug ? `${paths.projects}${project.slug}/` : undefined;
}

import { paths } from "@/data/navigation";
import { allProjects, type Project } from "@/data/projects";

// Relaciones editoriales por aplicación; no atribuyen materiales no confirmados.
const connections: Record<string, { slugs: string[]; heading?: string; intro?: string }> = {
  [paths.services]: { slugs: ["senaletica-aeropuerto-alicante", "stand-bistrea-ifa", "rotulacion-furgoneta"] },
  [paths.signage]: { slugs: ["rotulo-somium", "letras-mimma-gallery", "fachada-labus-bar"] },
  [paths.digitalPrinting]: { slugs: ["stand-mila-ifa", "stand-bistrea-ifa", "grafica-fachada-eitb"] },
  [paths.installation]: { slugs: ["senaletica-aeropuerto-alicante", "letras-alcampo-fachada", "grafica-goldwell-mia"] },
  [paths.dimensionalLetters]: { slugs: ["letras-mimma-gallery", "letras-alcampo-fachada"] },
  [paths.illuminatedSigns]: { slugs: ["rotulo-somium", "fachada-labus-bar", "senaletica-aeropuerto-alicante"] },
  [paths.vehicles]: { slugs: ["rotulacion-furgoneta"] },
  [paths.wayfinding]: { slugs: ["senaletica-aeropuerto-alicante"] },
  [paths.vinyls]: {
    slugs: ["grafica-goldwell-mia", "stand-mila-ifa"],
    heading: "Aplicaciones de gráfica interior",
    intro: "Conoce trabajos de gráfica sobre paredes y espacios expositivos. Las fichas reúnen las imágenes de colocación y la aplicación de la identidad de marca en cada espacio.",
  },
  [paths.shopWindows]: {
    slugs: ["grafica-goldwell-mia", "fachada-labus-bar"],
    heading: "Imagen de marca en espacios comerciales",
    intro: "Explora estas referencias de gráfica interior y fachada para ver cómo la imagen de marca se relaciona con un establecimiento. Son aplicaciones complementarias a la rotulación de escaparates.",
  },
  [paths.digitalPrintingBanners]: {
    slugs: ["grafica-fachada-eitb"],
    heading: "Una referencia de gráfica exterior",
    intro: "La campaña de EITB muestra una aplicación de impresión de gráfica exterior y su montaje en altura. Explora el trabajo de colocación y las creatividades instaladas en la fachada.",
  },
  [paths.digitalPrintingRigidSupports]: {
    slugs: ["espacio-tag-heuer", "senaletica-aeropuerto-alicante"],
    heading: "Paneles gráficos y señalización en su entorno",
    intro: "Estos proyectos muestran paneles en espacios comerciales y señalética en una terminal. Explora la relación de cada elemento con la exposición de producto o con los accesos que identifica.",
  },
  [paths.digitalPrintingTextiles]: {
    slugs: ["stand-mila-ifa", "stand-bistrea-ifa"],
    heading: "Otros trabajos de gráfica para eventos",
    intro: "Mila y Bistrea son referencias de impresión y montaje para espacios feriales. Conoce cómo se traslada la identidad de cada marca a las paredes del stand y cómo se organiza la colocación de su gráfica.",
  },
  [paths.corporateIdentity]: { slugs: ["rotulo-somium", "grafica-goldwell-mia", "espacio-tag-heuer"] },
  [paths.franchises]: {
    slugs: ["stand-mila-ifa", "stand-bistrea-ifa", "grafica-fachada-eitb"],
    heading: "Referencias de producción e instalación",
    intro: "Del diseño aportado por el cliente al desarrollo de gráfica a partir de sus logotipos: estos encargos muestran diferentes formas de coordinar la imagen de marca, la impresión y el montaje.",
  },
  [paths.about]: { slugs: ["stand-mila-ifa", "stand-bistrea-ifa", "senaletica-aeropuerto-alicante"] },
};

export function relatedProjectsFor(pathname: string) {
  const path = `${pathname.replace(/\/$/, "")}/`;
  const connection = connections[path];
  if (!connection) return undefined;
  return {
    heading: connection.heading ?? "Proyectos relacionados",
    intro: connection.intro ?? "Conoce trabajos reales y consulta cada ficha para ver la aplicación, las imágenes y el alcance del proyecto.",
    projects: connection.slugs.map((slug) => allProjects.find((project) => project.slug === slug)).filter((project): project is Project => Boolean(project)),
  };
}

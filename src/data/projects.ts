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
  sections?: { heading: string; paragraphs: string[] }[];
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
    slug: "senaletica-aeropuerto-alicante",
    sections: [
      {
        "heading": "Orientación e identificación dentro de la terminal",
        "paragraphs": [
          "En una terminal aeroportuaria, la señalética forma parte del recorrido del viajero. Los paneles de este proyecto identifican el control de seguridad y el acceso exclusivo, situando la información sobre las zonas de paso. Los textos y pictogramas permiten distinguir cada acceso dentro de un entorno con diferentes flujos de pasajeros.",
          "El conjunto incorpora también la gráfica de Aena y Alicante. La identificación del espacio y los mensajes de orientación conviven en una misma intervención, con elementos que pueden verse tanto en las fotografías de detalle como en las vistas generales de la terminal."
        ]
      },
      {
        "heading": "Montaje de paneles y elementos retroiluminados",
        "paragraphs": [
          "La secuencia de trabajo muestra la colocación de paneles con plataforma elevadora y escalera. Estas imágenes permiten apreciar la posición de los elementos sobre los accesos y la relación entre el tamaño del rótulo, la altura de montaje y el espacio disponible.",
          "Uno de los detalles recoge el interior de un rótulo con iluminación LED visible y el panel gráfico que se coloca delante. La galería completa el recorrido con el acceso exclusivo instalado, sus textos en tres idiomas y una vista del conjunto dentro de la terminal."
        ]
      }
    ],
    title: "Señalética en el aeropuerto de Alicante",
    category: "Señalética · Rotulación · Instalación",
    filters: ["rotulacion", "instalacion-montaje"],
    summary: "Instalación de paneles de señalética en la terminal del aeropuerto de Alicante: control de seguridad, acceso exclusivo y gráfica de Aena.",
    preserveFullImage: true,
    cover: "/images/projects/aeropuerto-alicante-aena-montaje-1600.webp",
    coverAlt: "Instalación de un panel de Aena y Alicante con plataforma elevadora en la terminal del aeropuerto",
    details: [{ label: "Lugar", value: "Aeropuerto de Alicante" }, { label: "Intervención", value: "Señalética interior" }],
    description: [
      "El proyecto reúne trabajos de instalación de señalética en la terminal, con paneles que identifican el control de seguridad y los accesos exclusivos, junto a elementos gráficos de Aena y Alicante.",
      "Las fotografías documentan la colocación de los paneles mediante plataforma elevadora, el interior de un rótulo retroiluminado y distintas vistas de la señalética instalada.",
    ],
    gallery: [
      { src: "/images/projects/aeropuerto-alicante-control-seguridad-1600.webp", alt: "Instalación de señalética de control de seguridad junto al acceso Fast Track", caption: "Señalética del control de seguridad" },
      { src: "/images/projects/aeropuerto-alicante-acceso-exclusivo-vista-general-1600.webp", alt: "Vista general del montaje del panel de acceso exclusivo en la terminal", caption: "Montaje del acceso exclusivo" },
      { src: "/images/projects/aeropuerto-alicante-acceso-exclusivo-instalado-1600.webp", alt: "Panel iluminado de acceso exclusivo con pictogramas y textos en tres idiomas", caption: "Panel de acceso exclusivo instalado" },
      { src: "/images/projects/aeropuerto-alicante-panel-retroiluminado-1600.webp", alt: "Panel gráfico de acceso exclusivo frente al interior del rótulo con iluminación LED visible", caption: "Interior del rótulo retroiluminado" },
      { src: "/images/projects/aeropuerto-alicante-colocacion-panel-1600.webp", alt: "Colocación del panel de acceso exclusivo desde una plataforma elevadora y una escalera", caption: "Colocación del panel gráfico" },
      { src: "/images/projects/aeropuerto-alicante-vista-terminal-1600.webp", alt: "Vista de la terminal con paneles de Aena y Alicante sobre los accesos", caption: "Vista del conjunto en la terminal" },
    ],
    services: [{ label: "Señalética", href: paths.wayfinding }, { label: "Rótulos luminosos", href: paths.illuminatedSigns }, { label: "Instalación y montaje", href: paths.installation }],
  },
  {
    slug: "stand-mila-ifa",
    sections: [
      {
        "heading": "Del diseño de Mila a la gráfica del stand",
        "paragraphs": [
          "Mila proporcionó el diseño para su participación en la feria de gastronomía de IFA, celebrada del 2 al 5 de octubre de 2026. El trabajo de GrupoClavD se centró en la impresión de la gráfica y en su instalación y montaje dentro del espacio expositivo.",
          "El motivo de ondas aparece como un recurso visual continuo sobre las paredes. Junto al rótulo superior y el mostrador, compone la imagen del stand y sitúa la marca en el entorno de la feria. Las vistas generales permiten observar cómo se relaciona la gráfica con las zonas de atención."
        ]
      },
      {
        "heading": "Colocación, uso del espacio y retirada",
        "paragraphs": [
          "El montaje tuvo lugar el 1 de octubre de 2026. Las fotografías muestran la colocación de la gráfica sobre las paredes y diferentes momentos del trabajo, antes de que el espacio pasara a utilizarse durante el evento.",
          "La galería incluye también el stand en uso, de modo que se puede recorrer el proyecto desde la instalación hasta su presentación ante los visitantes. La retirada de los elementos gráficos está incluida en el servicio, completando el alcance previsto para esta intervención temporal."
        ]
      }
    ],
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
    sections: [
      {
        "heading": "Una campaña trasladada a la fachada",
        "paragraphs": [
          "EITB aportó el diseño y los elementos gráficos de la campaña. GrupoClavD se encargó de la impresión, la instalación y el montaje de la gráfica exterior, trasladando esas creatividades a una superficie visible del edificio.",
          "Las imágenes reúnen distintas piezas de una misma campaña, incluida una creatividad de etb on. La fachada actúa como soporte de comunicación: permite ver el mensaje junto a la arquitectura y apreciar la escala que adquiere la gráfica fuera de una pantalla o de un formato de pequeño tamaño."
        ]
      },
      {
        "heading": "Instalación exterior y alcance del servicio",
        "paragraphs": [
          "La documentación del proyecto muestra trabajos de colocación en altura con plataforma elevadora. Las vistas del montaje ayudan a entender la ubicación de la gráfica y su relación con los distintos planos de la fachada.",
          "El encargo incluye la retirada de los elementos gráficos. Este alcance resulta especialmente relevante en una campaña temporal, cuyo soporte exterior acompaña una comunicación concreta. La galería combina el proceso de colocación con imágenes de las creatividades instaladas."
        ]
      }
    ],
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
    sections: [
      {
        "heading": "Diseño gráfico para Bistrea y Gourmet Café",
        "paragraphs": [
          "El encargo reunió las zonas de Bistrea y Gourmet Café en un mismo espacio para la feria de gastronomía de IFA, celebrada del 2 al 5 de octubre de 2026. El cliente aportó los logotipos y GrupoClavD desarrolló el diseño gráfico, además de realizar la impresión, la instalación y el montaje.",
          "Las superficies naranjas y verdes que aparecen en las fotografías permiten distinguir diferentes zonas del stand. La gráfica da presencia a las marcas sobre las paredes y acompaña al mobiliario y a los puntos de encuentro del espacio expositivo."
        ]
      },
      {
        "heading": "Del montaje al espacio en funcionamiento",
        "paragraphs": [
          "El montaje se realizó el 1 de octubre de 2026. La galería recoge la colocación de los elementos gráficos y distintas vistas del espacio durante los trabajos, mostrando tanto los detalles de las paredes como su relación con el conjunto del stand.",
          "El vídeo ofrece un recorrido por las zonas de Bistrea y Gourmet Café ya en uso. Complementa las fotografías del montaje y permite ver la gráfica dentro de la actividad de la feria. El servicio incluye también la retirada de los elementos gráficos."
        ]
      }
    ],
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
    sections: [
      {
        "heading": "Identidad de marca sobre una fachada de lamas",
        "paragraphs": [
          "El rótulo de Somium se integra en una fachada de lamas oscuras. El nombre de la marca destaca sobre ese fondo y se convierte en un punto de identificación dentro del conjunto exterior. Las vistas de detalle y de conjunto muestran dos aspectos del mismo trabajo: la colocación de las letras y su presencia sobre la arquitectura.",
          "La lectura de un rótulo de fachada depende también de lo que lo rodea. En este caso, el ritmo de las lamas sirve de fondo al elemento gráfico y permite apreciar su posición y proporción respecto a la superficie disponible."
        ]
      },
      {
        "heading": "Una secuencia de instalación y resultado",
        "paragraphs": [
          "La galería comienza con la zona de fachada antes de la colocación y continúa con imágenes del trabajo en curso. El primer plano de la instalación permite observar el elemento gráfico de cerca, mientras que la vista final muestra el rótulo dentro de su entorno.",
          "Este recorrido ayuda a explicar la intervención más allá de una única fotografía de portada. El resultado visible es una identificación exterior de Somium incorporada a la fachada, con imágenes que documentan tanto el montaje como la composición terminada."
        ]
      }
    ],
    title: "Rótulo de Somium en fachada",
    category: "Rotulación exterior · Instalación",
    filters: ["rotulacion", "instalacion-montaje"],
    summary: "Rótulo de Somium sobre una fachada de lamas oscuras, con imágenes de la instalación y del conjunto terminado en su entorno exterior.",
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
    sections: [
      {
        "heading": "Gráfica de marca en el interior de Mia Estilistas",
        "paragraphs": [
          "La intervención documentada se sitúa en el local identificado como Mia Estilistas e incorpora una gráfica GOLDWELL sobre una pared interior. La imagen de marca ocupa una superficie del espacio y acompaña a la actividad del salón, dando presencia al contenido visual en el entorno de atención al cliente.",
          "La vista desde el exterior permite situar esa gráfica dentro del establecimiento. Las imágenes interiores acercan el trabajo a la pared donde se aplica, mostrando cómo una misma pieza se percibe desde diferentes posiciones."
        ]
      },
      {
        "heading": "Colocación sobre la pared y acabado visible",
        "paragraphs": [
          "Las fotografías recogen a un trabajador colocando la gráfica y ofrecen una segunda perspectiva lateral de la instalación. La secuencia permite seguir la aplicación sobre la superficie y compararla con los detalles de la pieza terminada.",
          "El proyecto ilustra el uso de gráfica interior en un negocio de estilismo: una superficie del local se convierte en soporte de comunicación de marca. La galería reúne el contexto del establecimiento, el trabajo de colocación y el resultado integrado en el interior."
        ]
      }
    ],
    title: "Gráfica GOLDWELL en un espacio de estilismo",
    category: "Gráfica interior · Instalación",
    filters: ["impresion-digital", "instalacion-montaje"],
    summary: "Gráfica GOLDWELL sobre una pared de Mia Estilistas, con vistas del establecimiento, del proceso de colocación y de la pieza integrada en el interior.",
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
    sections: [
      {
        "heading": "La fachada como presentación del establecimiento",
        "paragraphs": [
          "La imagen exterior de Labus Bar reúne el logotipo y los textos del establecimiento sobre la fachada. Estos elementos presentan el negocio desde la calle y forman una composición que puede apreciarse tanto en la vista general como en la fotografía de detalle.",
          "La gráfica exterior utiliza la superficie del local como soporte de identificación. El interés del proyecto está en esa relación entre el mensaje y el edificio: el nombre del bar pasa a formar parte de su presencia visual en el entorno."
        ]
      },
      {
        "heading": "Trabajo sobre la zona superior de la fachada",
        "paragraphs": [
          "Las primeras imágenes muestran la intervención en curso y el trabajo sobre la parte superior de la fachada. La secuencia continúa con la colocación de la gráfica desde una escalera y termina con el logotipo y los textos ya visibles en su posición final.",
          "La galería permite recorrer distintos momentos de la intervención sin limitarse al resultado de portada. Las fotografías de proceso aportan contexto al montaje, mientras que el detalle terminado permite leer la composición gráfica del establecimiento."
        ]
      }
    ],
    title: "Imagen de fachada de Labus Bar",
    category: "Rotulación de fachada",
    filters: ["rotulacion", "instalacion-montaje"],
    summary: "Rotulación de la fachada de Labus Bar con el logotipo y los textos del establecimiento. Un recorrido por el montaje y la composición exterior terminada.",
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
    sections: [
      {
        "heading": "Imagen de producto dentro del espacio comercial",
        "paragraphs": [
          "El espacio comercial incorpora gráfica de TAG Heuer en paredes y zonas de exposición. Las imágenes de producto, entre ellas un panel con un reloj, acompañan a los expositores y vinculan la presentación del espacio con la identidad visual de la marca.",
          "Las diferentes vistas permiten observar la gráfica como parte del conjunto comercial. Su presencia se reparte entre varias superficies, de modo que el producto puede aparecer tanto en la exposición física como en las imágenes que la rodean."
        ]
      },
      {
        "heading": "Paneles gráficos y relación con los expositores",
        "paragraphs": [
          "La galería combina una fotografía de detalle del panel de producto con vistas más amplias de las zonas de exposición. Este cambio de escala ayuda a apreciar el contenido de la gráfica y su posición respecto al mobiliario.",
          "El caso muestra una aplicación de comunicación visual para interiores comerciales. Las paredes y los paneles ofrecen espacio para presentar la marca y el producto junto a la exposición, manteniendo un vínculo visual entre las distintas zonas que aparecen en las fotografías."
        ]
      }
    ],
    title: "Gráfica TAG Heuer en un espacio comercial",
    category: "Gráfica para interiores",
    filters: ["impresion-digital"],
    summary: "Gráfica de TAG Heuer en paredes, paneles y zonas de exposición de un espacio comercial, con imágenes de producto integradas junto a los expositores.",
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
    slug: "letras-mimma-gallery",
    sections: [
      {
        "heading": "Letras corpóreas para identificar la galería",
        "paragraphs": [
          "La fachada de MIMMA Gallery incorpora el nombre del establecimiento mediante letras corpóreas. El volumen de cada carácter aporta una presencia diferente a la de una gráfica plana y convierte el nombre en un elemento integrado en el exterior comercial.",
          "La fotografía del proyecto permite observar la posición del conjunto sobre la fachada y la relación de las letras con el espacio que las rodea. La composición reúne el nombre de la galería en una identificación exterior que acompaña a la arquitectura del local."
        ]
      },
      {
        "heading": "Una aplicación de rotulación de fachada",
        "paragraphs": [
          "En este caso, la pieza principal es el propio nombre del establecimiento. Las letras funcionan como un punto de referencia para reconocer MIMMA Gallery y muestran una de las aplicaciones de la rotulación corpórea en espacios comerciales.",
          "La imagen ofrece una vista del conjunto instalado. Permite valorar su escala y distribución sobre la superficie de fachada, dos aspectos que ayudan a entender cómo la identidad de una marca se traslada a un soporte físico."
        ]
      }
    ],
    title: "Letras de MIMMA Gallery",
    category: "Letras corpóreas · Fachada",
    filters: ["rotulacion"],
    summary: "Letras corpóreas de MIMMA Gallery integradas en una fachada comercial. Una aplicación de identidad de marca que da volumen al nombre del establecimiento.",
    cover: `${newPhotos}letras-corporeas-mimma-gallery-fachada.jpeg`,
    coverAlt: "Letras de MIMMA Gallery instaladas en una fachada",
    services: [{ label: "Letras corpóreas", href: paths.dimensionalLetters }],
  },
  {
    slug: "letras-alcampo-fachada",
    sections: [
      {
        "heading": "Identificación exterior de una fachada comercial",
        "paragraphs": [
          "El proyecto recoge el montaje de letras de Alcampo sobre una fachada comercial. El nombre de la marca se presenta como un conjunto de elementos individuales que, una vez colocados, componen la identificación del establecimiento.",
          "La fotografía sitúa el trabajo dentro de la superficie exterior y permite entender la escala de las letras respecto al edificio. La rotulación forma parte de la presentación comercial de la fachada y utiliza el nombre de la marca como elemento principal."
        ]
      },
      {
        "heading": "El montaje como parte del proyecto de rotulación",
        "paragraphs": [
          "La imagen documenta un momento de la colocación de las letras. Mostrar esta fase aporta contexto al trabajo: permite observar la instalación sobre el edificio, además de la forma de los elementos gráficos.",
          "Esta aplicación conecta la identidad de marca con el montaje en su ubicación final. La fachada es el soporte sobre el que se organiza el conjunto, y la fotografía permite apreciar esa relación entre rotulación, superficie exterior y espacio comercial."
        ]
      }
    ],
    title: "Letras de Alcampo en fachada",
    category: "Rotulación exterior · Instalación",
    filters: ["rotulacion", "instalacion-montaje"],
    summary: "Montaje de letras de Alcampo sobre una fachada comercial. La imagen documenta la colocación del nombre de la marca en su ubicación exterior.",
    cover: `${newPhotos}instalacion-letras-alcampo-fachada.jpeg`,
    coverAlt: "Colocación de letras de Alcampo en una fachada",
    services: [{ label: "Rotulación", href: paths.signage }, { label: "Instalación y montaje", href: paths.installation }],
  },
  {
    slug: "grafica-mysoft-interior",
    sections: [
      {
        "heading": "Presencia de MySoft en un espacio interior",
        "paragraphs": [
          "La pieza gráfica de MySoft que recoge este proyecto incorpora la marca a un espacio interior. La imagen permite observar una aplicación de comunicación visual situada dentro del entorno, donde la gráfica comparte protagonismo con los elementos del lugar.",
          "La presencia de una marca en interiores puede apoyarse en una pieza concreta, además de en una intervención sobre todo el espacio. Este caso permite ver cómo un elemento gráfico aporta identificación y contenido visual en su ubicación."
        ]
      },
      {
        "heading": "La gráfica dentro de su contexto",
        "paragraphs": [
          "La fotografía muestra la pieza de MySoft en el espacio, permitiendo apreciar su posición y la relación con el entorno inmediato. Ese contexto ayuda a entender la aplicación y la escala de la gráfica.",
          "El proyecto se incluye entre los ejemplos de gráfica interior del portfolio. La pieza documentada sirve como referencia visual de una aplicación de marca en interiores y complementa otros trabajos de impresión digital y comunicación para espacios comerciales."
        ]
      }
    ],
    title: "Gráfica de MySoft en interior",
    category: "Gráfica interior",
    filters: ["impresion-digital", "instalacion-montaje"],
    summary: "Pieza gráfica de MySoft situada en un espacio interior, como ejemplo de comunicación visual de marca y de su relación con el entorno.",
    cover: `${photos}20240529_113559.jpg`,
    coverAlt: "Gráfica de MySoft en un espacio interior",
    services: [{ label: "Impresión digital", href: paths.digitalPrinting }],
  },
  {
    slug: "rotulacion-furgoneta",
    sections: [
      {
        "heading": "Gráfica de marca sobre el lateral de una furgoneta",
        "paragraphs": [
          "La furgoneta incorpora una gráfica de colores aplicada en el lateral. La superficie de la carrocería se convierte en un soporte de identidad visual y lleva la comunicación de marca al propio vehículo.",
          "La imagen muestra cómo se distribuye la composición sobre el lateral, dentro de las proporciones y formas de la furgoneta. Esta relación con la carrocería distingue la rotulación de vehículos de otras aplicaciones gráficas sobre paredes o paneles."
        ]
      },
      {
        "heading": "Una aplicación de identidad visual en movimiento",
        "paragraphs": [
          "La rotulación acompaña al vehículo en sus desplazamientos y cuando permanece estacionado. El lateral ofrece una superficie para presentar la gráfica de marca en contextos distintos a los de un establecimiento fijo.",
          "Este ejemplo del portfolio permite apreciar el conjunto aplicado sobre la furgoneta. La fotografía aporta una referencia de composición, color y ocupación de la superficie lateral para entender el uso de la rotulación en vehículos de empresa."
        ]
      }
    ],
    title: "Rotulación de una furgoneta",
    category: "Vehículos",
    filters: ["rotulacion"],
    summary: "Rotulación lateral de una furgoneta con gráfica de colores. La identidad de marca se aplica sobre la carrocería y acompaña al vehículo en su actividad.",
    cover: `${newPhotos}rotulacion-furgoneta-ribera-valldigna.jpeg`,
    coverAlt: "Furgoneta con gráfica de colores aplicada en el lateral",
    services: [{ label: "Rotulación de vehículos", href: paths.vehicles }],
  },
];

export const allProjects = [...featuredProjects, ...otherProjects];

export function projectHref(project: Project) {
  return project.slug ? `${paths.projects}${project.slug}/` : undefined;
}

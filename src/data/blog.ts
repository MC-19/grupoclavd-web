import { paths } from "./navigation";

export interface BlogArticle {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  publishedAt?: string;
  image?: string;
  imageAlt?: string;
  featured: boolean;
  introduction: string;
  sections: {
    heading: string;
    paragraphs: string[];
    points?: string[];
  }[];
  relatedServices: { label: string; href: string }[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "letras-corporeas-o-rotulos-luminosos",
    title: "Letras corpóreas o rótulos luminosos: cómo enfocar la elección",
    seoTitle: "Letras corpóreas o rótulos luminosos: qué valorar | GrupoClavD",
    description: "Una guía para definir el efecto visual, el espacio y el uso de un rótulo antes de elegir entre letras corpóreas y una solución luminosa.",
    category: "Rotulación",
    featured: true,
    introduction: "Antes de elegir un rótulo, conviene separar dos decisiones: qué forma tendrá la identidad de marca en el espacio y qué papel debe desempeñar la luz. Las letras corpóreas y la iluminación no son necesariamente opciones excluyentes.",
    sections: [
      {
        heading: "Empieza por el lugar y la lectura",
        paragraphs: ["Una fachada, una recepción y un espacio comercial plantean necesidades visuales diferentes. Observa desde dónde se verá el nombre, qué elementos hay alrededor y cuánto protagonismo debe tener. La solución debe integrarse en ese contexto sin perder legibilidad."],
        points: ["¿Se leerá principalmente desde la calle o desde el interior?", "¿Debe destacar entre otros elementos gráficos o formar parte de un conjunto?", "¿Existe una identidad de marca que marque proporciones, colores y composición?"],
      },
      {
        heading: "La luz es una decisión visual adicional",
        paragraphs: ["Una solución corpórea aporta volumen y presencia. La iluminación puede cambiar cómo se percibe en determinados momentos y entornos, pero no sustituye una composición clara. Si la visibilidad nocturna importa, conviene plantearlo desde el inicio; si no, una propuesta sin iluminación puede responder mejor al objetivo visual."],
      },
      {
        heading: "Qué preparar antes de pedir presupuesto",
        paragraphs: ["Reúne el logotipo, imágenes del lugar y una idea de dónde irá el rótulo. Indicar desde qué distancia se quiere reconocer y cuándo se utilizará el espacio ayuda a comparar propuestas con el mismo criterio. La solución concreta se define después de valorar el emplazamiento y las necesidades reales."],
      },
    ],
    relatedServices: [
      { label: "Letras corpóreas", href: paths.dimensionalLetters },
      { label: "Rótulos luminosos y fachadas", href: paths.illuminatedSigns },
    ],
  },
  {
    slug: "lona-soporte-rigido-o-vinilo",
    title: "Lona, soporte rígido o vinilo: qué formato encaja con tu gráfica",
    seoTitle: "Lona, soporte rígido o vinilo: diferencias de uso | GrupoClavD",
    description: "Cómo orientar la elección entre lona, soporte rígido y vinilo según el lugar, la presentación de la gráfica y el objetivo de comunicación.",
    category: "Impresión digital",
    featured: true,
    introduction: "Una misma creatividad puede presentarse de formas muy distintas. Para elegir entre lona, soporte rígido y vinilo, lo primero no es comparar especificaciones: es definir dónde irá la gráfica y cómo debe convivir con el espacio.",
    sections: [
      {
        heading: "Tres formas de presentar una gráfica",
        paragraphs: ["La lona es un formato habitual para piezas gráficas de gran presencia. Un soporte rígido presenta la gráfica como un elemento con entidad propia. El vinilo permite incorporar la comunicación visual a superficies como cristales, escaparates o interiores. Ninguno es mejor en abstracto: cambia su sentido según la aplicación."],
      },
      {
        heading: "Preguntas que aclaran la elección",
        paragraphs: ["Antes de decidir, sitúa la gráfica en un plano o una fotografía y revisa su función. ¿Es una pieza independiente, una intervención sobre una superficie existente o un mensaje que ocupa un área amplia? También importa cómo se verá desde los recorridos habituales del público."],
        points: ["¿Dónde se colocará y qué espacio real tiene disponible?", "¿La gráfica debe integrarse en un cristal o pared, o presentarse como pieza separada?", "¿Se trata de una campaña puntual o de una comunicación que permanecerá más tiempo?"],
      },
      {
        heading: "No cierres el formato sin revisar el contexto",
        paragraphs: ["Las dimensiones, el lugar y el modo de instalación condicionan la propuesta. Compartir fotografías, medidas disponibles y la creatividad ayuda a valorar el formato adecuado sin asumir por adelantado un material o un sistema de montaje concreto."],
      },
    ],
    relatedServices: [
      { label: "Lonas publicitarias", href: paths.digitalPrintingBanners },
      { label: "Soportes rígidos", href: paths.digitalPrintingRigidSupports },
      { label: "Vinilos", href: paths.vinyls },
    ],
  },
  {
    slug: "senaletica-espacios-comerciales",
    title: "Señalética en espacios comerciales: ordenar la información",
    seoTitle: "Señalética para espacios comerciales: por dónde empezar | GrupoClavD",
    description: "Una guía para organizar mensajes y ubicaciones de señalética en un espacio comercial sin perder claridad ni coherencia visual.",
    category: "Señalética",
    featured: false,
    introduction: "La señalética resulta más útil cuando responde a preguntas concretas de quien recorre un espacio. Antes de diseñar piezas aisladas, conviene pensar en el recorrido, los puntos de decisión y la información que necesita cada persona.",
    sections: [
      {
        heading: "Dibuja el recorrido antes que las piezas",
        paragraphs: ["Empieza por la entrada y sigue los trayectos más comunes. Identifica dónde alguien necesita orientarse, reconocer una zona o confirmar que ha llegado al lugar correcto. Esa secuencia ayuda a decidir qué mensajes son necesarios y dónde pueden aportar valor."],
      },
      {
        heading: "Una función clara para cada mensaje",
        paragraphs: ["No todas las piezas deben decirlo todo. Unas ayudan a encontrar una dirección; otras identifican un área o comunican información en un punto concreto. Cuando varios mensajes compiten en el mismo lugar, la lectura se vuelve más difícil."],
        points: ["Dirección: hacia dónde continuar en un punto de decisión.", "Identificación: qué zona o espacio se ha encontrado.", "Información: qué necesita saber la persona en ese lugar."],
      },
      {
        heading: "Coherencia con la marca y el espacio",
        paragraphs: ["Los nombres, el tono y el lenguaje visual deben mantenerse consistentes entre piezas. Fotografías y planos del espacio, junto con una lista de mensajes, permiten revisar el conjunto antes de producirlo e instalarlo. Las dimensiones, materiales y soluciones concretas se valoran según el lugar real."],
      },
    ],
    relatedServices: [
      { label: "Señalética", href: paths.wayfinding },
      { label: "Instalación y montaje", href: paths.installation },
    ],
  },
  {
    slug: "planificar-rotulacion-fachada",
    title: "Cómo preparar un proyecto de rotulación de fachada",
    seoTitle: "Rotulación de fachada: qué definir antes del proyecto | GrupoClavD",
    description: "Qué información reunir para plantear la rotulación de una fachada y valorar la visibilidad, la identidad de marca y la integración en el edificio.",
    category: "Rotulación",
    featured: false,
    introduction: "Una fachada es el primer contacto visual con muchos negocios. Preparar bien la información del lugar facilita hablar de propuestas concretas sin elegir precipitadamente un tipo de rótulo o dar por supuestas condiciones de instalación.",
    sections: [
      {
        heading: "Define qué debe comunicar",
        paragraphs: ["Identifica el nombre, logotipo y mensajes realmente necesarios. Una fachada puede necesitar reconocimiento a distancia, identificación en la entrada o ambas cosas. Antes de sumar elementos, comprueba qué verá una persona al acercarse y desde qué puntos."],
      },
      {
        heading: "Documenta el espacio real",
        paragraphs: ["Fotografías generales y de detalle, una referencia de las medidas disponibles y los archivos de marca ayudan a entender la composición posible. También es útil señalar accesos, elementos existentes y otros mensajes que ya ocupan la fachada."],
        points: ["Vista frontal y vistas desde los recorridos de aproximación.", "Zona prevista para la identidad visual y elementos cercanos.", "Logotipo y pautas de marca disponibles."],
      },
      {
        heading: "Separa la idea visual de su viabilidad",
        paragraphs: ["La propuesta visual es solo una parte del proyecto. Las condiciones del edificio y los requisitos aplicables deben comprobarse para cada caso con las personas responsables. No conviene asumir de antemano permisos, fijaciones o medios de instalación: esa información requiere una revisión específica."],
      },
    ],
    relatedServices: [
      { label: "Rótulos luminosos y fachadas", href: paths.illuminatedSigns },
      { label: "Instalación y montaje", href: paths.installation },
    ],
  },
];

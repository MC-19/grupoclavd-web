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
  relatedArticleSlugs?: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "letras-corporeas-o-rotulos-luminosos",
    title: "Letras corpóreas o rótulos luminosos: cómo enfocar la elección",
    seoTitle: "Letras corpóreas o rótulos luminosos | GrupoClavD",
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
    relatedArticleSlugs: ["letras-corporeas-interiores-recepciones", "planificar-rotulacion-fachada"],
  },
  {
    slug: "lona-soporte-rigido-o-vinilo",
    title: "Lona, soporte rígido o vinilo: qué formato encaja con tu gráfica",
    seoTitle: "Lona, soporte rígido o vinilo: usos | GrupoClavD",
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
    relatedArticleSlugs: ["preparar-archivos-impresion-gran-formato", "rotulacion-escaparates-campanas"],
  },
  {
    slug: "senaletica-espacios-comerciales",
    title: "Señalética en espacios comerciales: ordenar la información",
    seoTitle: "Señalética para espacios comerciales | GrupoClavD",
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
    relatedArticleSlugs: ["imagen-corporativa-franquicias-cadenas", "letras-corporeas-interiores-recepciones"],
  },
  {
    slug: "planificar-rotulacion-fachada",
    title: "Cómo preparar un proyecto de rotulación de fachada",
    seoTitle: "Cómo planificar la rotulación de una fachada | GrupoClavD",
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
    relatedArticleSlugs: ["presupuesto-rotulacion-informacion-necesaria", "letras-corporeas-o-rotulos-luminosos"],
  },
  {
    slug: "rotulacion-vehiculos-empresa",
    title: "Rotulación de vehículos de empresa: cómo planificar la gráfica",
    seoTitle: "Rotulación de vehículos para empresas | GrupoClavD",
    description: "Qué definir antes de rotular vehículos de empresa para conseguir una gráfica clara, reconocible y coherente entre distintas unidades.",
    category: "Rotulación",
    featured: false,
    introduction: "La rotulación de vehículos de empresa convierte cada desplazamiento en una oportunidad para reconocer la marca. Para que la gráfica funcione, conviene decidir primero qué debe comunicar y cómo se adaptará a la forma real de cada vehículo.",
    sections: [
      {
        heading: "Prioriza la información que debe verse",
        paragraphs: ["El nombre de la empresa, su actividad y una vía de contacto pueden competir por el mismo espacio. Ordenarlos por importancia ayuda a que la composición se entienda con rapidez, especialmente cuando el vehículo está en movimiento o se observa desde cierta distancia.", "No es necesario ocupar cada zona disponible. Una gráfica con una jerarquía clara puede resultar más reconocible que una acumulación de mensajes pequeños."],
        points: ["Qué elemento debe reconocerse primero.", "Qué información es imprescindible para contactar.", "Qué mensajes pueden omitirse o trasladarse a otros canales."],
      },
      {
        heading: "Diseña sobre el vehículo concreto",
        paragraphs: ["Puertas, lunas, manillas y cambios de volumen condicionan la distribución de la gráfica. Una composición preparada sobre una superficie plana debe revisarse sobre fotografías o plantillas del modelo correspondiente.", "Si se trabaja con varios modelos, conviene mantener los elementos principales en posiciones visualmente equivalentes aunque la composición exacta cambie."],
      },
      {
        heading: "Mantén coherencia cuando hay una flota",
        paragraphs: ["Una flota no necesita que todos los vehículos sean idénticos, pero sí que compartan criterios reconocibles: proporción del logotipo, colores, mensajes y orden de lectura. Definir esas reglas antes de producir facilita futuras incorporaciones."],
      },
      {
        heading: "Información útil para solicitar presupuesto",
        paragraphs: ["Indica la cantidad de vehículos, marca y modelo, zonas que se quieren rotular y archivos de identidad disponibles. Fotografías actuales ayudan a detectar elementos que deben considerarse antes de preparar la propuesta."],
      },
    ],
    relatedServices: [
      { label: "Rotulación de vehículos", href: paths.vehicles },
      { label: "Solicitar presupuesto", href: paths.quote },
    ],
    relatedArticleSlugs: ["presupuesto-rotulacion-informacion-necesaria", "planificar-rotulacion-fachada"],
  },
  {
    slug: "rotulacion-escaparates-campanas",
    title: "Rotulación de escaparates: cómo organizar una campaña visual",
    seoTitle: "Rotulación de escaparates para campañas | GrupoClavD",
    description: "Cómo planificar la rotulación de un escaparate según el mensaje, la visibilidad del interior y la duración prevista de la campaña.",
    category: "Rotulación",
    featured: false,
    introduction: "La rotulación de escaparates debe atraer la atención sin perder de vista el espacio que existe detrás del cristal. Antes de preparar la gráfica, es útil decidir qué debe comunicar la campaña y cuánto protagonismo tendrá frente al producto o al interior del establecimiento.",
    sections: [
      {
        heading: "Define un objetivo para el escaparate",
        paragraphs: ["Una apertura, una promoción y una campaña de marca no necesitan la misma composición. Concretar el objetivo permite jerarquizar el mensaje principal, la información secundaria y los elementos puramente visuales.", "También conviene decidir si el escaparate debe permitir ver el interior o si la gráfica tendrá una presencia más amplia durante la campaña."],
      },
      {
        heading: "Trabaja con las medidas y divisiones reales",
        paragraphs: ["Los escaparates suelen estar formados por varios paños, marcos, puertas y elementos situados a distintas alturas. Fotografías frontales y medidas de cada zona ayudan a evitar que textos o elementos importantes queden interrumpidos.", "La lectura desde la acera no es igual que la lectura junto a la entrada. Revisar ambos puntos de vista permite distribuir mejor la información."],
        points: ["Ancho y alto de cada paño de cristal.", "Posición de puertas, marcos y elementos permanentes.", "Fotografías del escaparate completo y de sus laterales."],
      },
      {
        heading: "Piensa en la campaña como un conjunto",
        paragraphs: ["Si la gráfica continúa en el interior, en cartelería o en otros establecimientos, conviene fijar una jerarquía común. Así la campaña mantiene su identidad aunque tenga que adaptarse a espacios diferentes."],
      },
      {
        heading: "Prepara el cambio de campaña",
        paragraphs: ["Indicar cuándo debe estar visible la nueva comunicación y qué elementos existentes hay en el escaparate permite coordinar mejor la intervención. La solución concreta se valora según el espacio, el diseño y las condiciones reales de colocación."],
      },
    ],
    relatedServices: [
      { label: "Rotulación de escaparates", href: paths.shopWindows },
      { label: "Vinilos", href: paths.vinyls },
    ],
    relatedArticleSlugs: ["lona-soporte-rigido-o-vinilo", "preparar-archivos-impresion-gran-formato"],
  },
  {
    slug: "preparar-archivos-impresion-gran-formato",
    title: "Cómo preparar el contenido para una impresión de gran formato",
    seoTitle: "Archivos para impresión de gran formato | GrupoClavD",
    description: "Una guía para reunir medidas, textos, logotipos e imágenes antes de enviar una creatividad destinada a impresión de gran formato.",
    category: "Impresión digital",
    featured: false,
    introduction: "Preparar una gráfica de gran formato no consiste únicamente en ampliar un diseño. El contenido debe responder a las medidas reales, la distancia de lectura y el soporte donde se presentará. Un archivo bien organizado facilita su revisión antes de producir.",
    sections: [
      {
        heading: "Confirma primero el tamaño y el destino",
        paragraphs: ["Antes de cerrar la creatividad, indica las dimensiones disponibles y dónde se colocará. Una pieza vista desde lejos necesita una jerarquía distinta de otra que se leerá a pocos pasos.", "Una fotografía general del espacio ayuda a entender qué elementos rodearán la gráfica y qué zonas no deberían contener información esencial."],
      },
      {
        heading: "Entrega textos y logotipos definitivos",
        paragraphs: ["Revisa nombres, teléfonos, direcciones y llamadas a la acción antes de enviar el material. Los cambios de texto de última hora pueden alterar la composición y obligar a realizar una nueva revisión.", "Cuando existan archivos originales del logotipo o del sistema de marca, es preferible incluirlos junto con las indicaciones de uso disponibles. Así se evita trabajar a partir de capturas o imágenes descargadas con calidad limitada."],
        points: ["Textos aprobados y ordenados por importancia.", "Logotipos y recursos originales disponibles.", "Colores y pautas de identidad, si existen.", "Fotografías en su archivo de mayor calidad disponible."],
      },
      {
        heading: "Separa el contenido de la adaptación final",
        paragraphs: ["El diseño puede necesitar ajustes cuando se comprueban las medidas, divisiones o elementos del espacio. Mantener textos, imágenes y recursos organizados facilita adaptar la composición sin perder información."],
      },
      {
        heading: "Solicita una revisión antes de producir",
        paragraphs: ["La preparación final depende del producto y de sus condiciones concretas. Antes de considerar un archivo listo, conviene confirmar con el proveedor qué formato de entrega y qué comprobaciones necesita para ese trabajo."],
      },
    ],
    relatedServices: [
      { label: "Impresión digital", href: paths.digitalPrinting },
      { label: "Lonas publicitarias", href: paths.digitalPrintingBanners },
      { label: "Soportes rígidos", href: paths.digitalPrintingRigidSupports },
    ],
    relatedArticleSlugs: ["lona-soporte-rigido-o-vinilo", "presupuesto-rotulacion-informacion-necesaria"],
  },
  {
    slug: "imagen-corporativa-franquicias-cadenas",
    title: "Imagen corporativa en franquicias y cadenas: cómo mantener la coherencia",
    seoTitle: "Imagen corporativa para franquicias y cadenas | GrupoClavD",
    description: "Cómo organizar recursos, ubicaciones y revisiones para mantener una imagen corporativa coherente en franquicias y cadenas.",
    category: "Imagen corporativa",
    featured: false,
    introduction: "Implantar una imagen corporativa en varios establecimientos exige combinar consistencia y adaptación. La marca debe reconocerse en todos ellos, aunque las fachadas, interiores y necesidades de comunicación no sean exactamente iguales.",
    sections: [
      {
        heading: "Convierte la identidad en criterios aplicables",
        paragraphs: ["Un manual de marca ayuda, pero la implantación necesita información práctica sobre qué elementos se repiten y cuáles pueden ajustarse. Logotipos, mensajes, proporciones y prioridades visuales deben estar claros antes de adaptar cada espacio."],
      },
      {
        heading: "Reúne la información de cada ubicación",
        paragraphs: ["Trabajar con una ficha común para todos los establecimientos facilita comparar necesidades y detectar diferencias. Fotografías, medidas disponibles y elementos existentes permiten valorar cada local sin perder la visión del conjunto."],
        points: ["Identificación y fotografías de la ubicación.", "Elementos de marca que necesita el espacio.", "Medidas y condicionantes visibles.", "Estado de revisión y aprobación de cada propuesta."],
      },
      {
        heading: "Ordena las revisiones y aprobaciones",
        paragraphs: ["Cuando participan varias personas, conviene establecer quién valida el contenido y quién confirma la adaptación de cada ubicación. Nombrar archivos y versiones de manera consistente reduce confusiones entre locales y campañas."],
      },
      {
        heading: "Mantén un registro para futuras aperturas",
        paragraphs: ["Guardar las decisiones aprobadas, las adaptaciones realizadas y el material de cada establecimiento crea una base útil para próximas implantaciones. Las soluciones específicas deben seguir revisándose según las condiciones reales de cada espacio."],
      },
    ],
    relatedServices: [
      { label: "Franquicias y cadenas", href: paths.franchises },
      { label: "Implantación de imagen corporativa", href: paths.corporateIdentity },
      { label: "Instalación y montaje", href: paths.installation },
    ],
    relatedArticleSlugs: ["senaletica-espacios-comerciales", "rotulacion-escaparates-campanas"],
  },
  {
    slug: "letras-corporeas-interiores-recepciones",
    title: "Letras corpóreas para interiores y recepciones: qué valorar",
    seoTitle: "Letras corpóreas para interiores y recepciones | GrupoClavD",
    description: "Qué tener en cuenta al integrar letras corpóreas en recepciones, oficinas, comercios y otros espacios interiores de empresa.",
    category: "Rotulación",
    featured: false,
    introduction: "Las letras corpóreas para interiores pueden convertir una pared de recepción o un punto de atención en un elemento claro de identidad. Su resultado depende tanto de la composición de la marca como de la relación con el espacio que la rodea.",
    sections: [
      {
        heading: "Define la función dentro del espacio",
        paragraphs: ["En una recepción, las letras pueden identificar la empresa y acompañar la primera impresión del visitante. En un comercio o una oficina también pueden señalar una zona, reforzar una marca o formar parte de una composición gráfica más amplia."],
      },
      {
        heading: "Valora la pared y el entorno visual",
        paragraphs: ["El ancho disponible, el mobiliario, las puertas y otros elementos condicionan la escala y la posición. Una fotografía frontal y otra tomada desde el recorrido de entrada permiten entender cómo se verá el conjunto.", "También conviene observar el contraste entre la identidad y el fondo, así como la presencia de otros mensajes cercanos. La elección concreta del acabado debe realizarse cuando se conozcan el espacio y las necesidades del proyecto."],
        points: ["Vista desde la entrada y desde el punto de atención.", "Medidas disponibles en la zona prevista.", "Logotipo y pautas de identidad.", "Elementos fijos que forman parte de la composición."],
      },
      {
        heading: "Decide el protagonismo de la iluminación",
        paragraphs: ["La iluminación puede formar parte del resultado visual, pero no siempre es necesaria. Su conveniencia depende del ambiente, del protagonismo buscado y de cómo se utiliza el espacio. Es mejor plantearla como una decisión del proyecto, no como un requisito automático."],
      },
      {
        heading: "Coordina composición e instalación",
        paragraphs: ["Antes de producir, es útil revisar una propuesta situada sobre el espacio real. Esto permite confirmar alineaciones, relación con el mobiliario y lectura desde los puntos habituales, dejando la solución de instalación para una valoración específica del lugar."],
      },
    ],
    relatedServices: [
      { label: "Letras corpóreas", href: paths.dimensionalLetters },
      { label: "Instalación y montaje", href: paths.installation },
    ],
    relatedArticleSlugs: ["letras-corporeas-o-rotulos-luminosos", "senaletica-espacios-comerciales"],
  },
  {
    slug: "presupuesto-rotulacion-informacion-necesaria",
    title: "Qué información incluir al pedir un presupuesto de rotulación",
    seoTitle: "Cómo pedir un presupuesto de rotulación | GrupoClavD",
    description: "Qué datos, fotografías y medidas ayudan a preparar un presupuesto de rotulación más preciso para una empresa o espacio comercial.",
    category: "Consejos",
    featured: true,
    introduction: "Un presupuesto de rotulación resulta más útil cuando parte de una necesidad bien explicada. No hace falta conocer de antemano el material o la solución exacta: basta con reunir información clara sobre el espacio, el objetivo y los elementos que se quieren incorporar.",
    sections: [
      {
        heading: "Explica qué necesitas conseguir",
        paragraphs: ["Indica si el proyecto debe identificar una fachada, comunicar una campaña, orientar dentro de un espacio o aplicar la imagen de la empresa. El objetivo ayuda a valorar alternativas sin obligarte a elegir un producto antes de tiempo."],
      },
      {
        heading: "Aporta fotografías y medidas disponibles",
        paragraphs: ["Una vista general sitúa el proyecto en su contexto y las imágenes de detalle permiten observar puertas, cristales, divisiones u otros elementos. Si existen medidas aproximadas o planos, también ayudan a preparar una primera valoración.", "Cuando todavía no sea posible medir con precisión, conviene indicarlo en lugar de presentar una cifra como definitiva."],
        points: ["Fotografía frontal y vistas laterales del espacio.", "Medidas disponibles o plano, si existe.", "Ubicación prevista de cada elemento.", "Cantidad de piezas, vehículos o establecimientos."],
      },
      {
        heading: "Incluye los recursos de marca",
        paragraphs: ["El logotipo, los textos definitivos y cualquier pauta de identidad permiten entender la composición necesaria. Si el diseño aún no está cerrado, indícalo para que esa circunstancia se tenga en cuenta al revisar la solicitud."],
      },
      {
        heading: "Distingue estimación y presupuesto final",
        paragraphs: ["Una calculadora puede ofrecer una referencia para conceptos con tarifa definida, pero otros trabajos dependen de las características y condiciones reales del proyecto. El importe final debe confirmarse después de revisar toda la información necesaria."],
      },
    ],
    relatedServices: [
      { label: "Calcular una estimación", href: paths.quote },
      { label: "Contar el proyecto", href: paths.contact },
      { label: "Ver servicios", href: paths.services },
    ],
    relatedArticleSlugs: ["planificar-rotulacion-fachada", "rotulacion-vehiculos-empresa", "preparar-archivos-impresion-gran-formato"],
  },
];

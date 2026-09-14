import { paths } from "@/data/navigation";

type Item = { title: string; description: string; href?: string };

export type DigitalPrintingPage = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageFirst?: boolean;
  solutions: { eyebrow: string; title: string; intro: string; items: Item[] };
  customization: { eyebrow: string; title: string; intro: string; image?: string; imageAlt?: string; points: Item[] };
  applications: { eyebrow: string; title: string; intro: string; items: Item[] };
  installation: { eyebrow: string; title: string; intro: string; points: Item[] };
  cta: { title: string; text: string };
  parent?: boolean;
};

export const digitalPrintingPages = {
  main: {
    title: "Impresión digital para empresas | GrupoClavD",
    description: "Impresión digital para empresas, campañas y espacios comerciales. Producimos soluciones gráficas en gran formato y distintos soportes, adaptadas a cada proyecto.",
    eyebrow: "Impresión digital",
    h1: "Impresión digital para empresas",
    intro: "Producimos gráfica impresa para campañas, espacios comerciales, eventos y proyectos corporativos. Cada pieza se plantea según el mensaje, el lugar donde se utilizará y el resultado que necesita tu marca.",
    image: "/ImagenesWebClav/Fotos%20Que%20si/grafica-decorativa-oficina-interior.jpg",
    imageAlt: "Gráfica de marca aplicada a una pared de oficina",
    solutions: {
      eyebrow: "Qué podemos producir",
      title: "Soluciones de impresión digital",
      intro: "Del formato de gran visibilidad a la gráfica que acompaña la experiencia dentro de un local. Elige la solución que mejor responde a tu proyecto.",
      items: [
        { title: "Lonas publicitarias", description: "Gráfica de gran formato para campañas, fachadas y espacios donde el mensaje necesita presencia.", href: paths.digitalPrintingBanners },
        { title: "Soportes rígidos", description: "Cartelería, señalización y elementos gráficos para puntos de venta y espacios corporativos.", href: paths.digitalPrintingRigidSupports },
        { title: "Textiles y banderas", description: "Gráfica textil y banderas para comunicación visual en eventos, promociones y espacios comerciales.", href: paths.digitalPrintingTextiles },
        { title: "Vinilos", description: "Gráfica aplicada a cristales, escaparates e interiores. Consulta la página específica de vinilos en Rotulación.", href: paths.vinyls },
      ],
    },
    customization: {
      eyebrow: "Cada proyecto es distinto",
      title: "Producción adaptada a cada proyecto",
      intro: "Una misma gráfica no funciona igual en un escaparate que en una fachada. Definimos la solución a partir de cómo se verá y dónde se usará.",
      image: "/ImagenesWebClav/Fotos%20Que%20si/valla-publicitaria-cepsa-exterior.jpg",
      imageAlt: "Gráfica publicitaria de gran formato en un soporte exterior",
      points: [
        { title: "Dimensiones", description: "Ajustamos la composición al espacio y a la distancia desde la que se leerá." },
        { title: "Soporte", description: "Elegimos el tipo de solución gráfica en función de su uso previsto." },
        { title: "Ubicación", description: "Consideramos si la pieza se verá en interior, exterior o en un entorno comercial." },
        { title: "Uso final", description: "Una campaña temporal y una gráfica de espacio cumplen funciones diferentes." },
      ],
    },
    applications: {
      eyebrow: "Dónde se utiliza",
      title: "Gráfica que se integra en cada espacio",
      intro: "La impresión digital da forma a mensajes de marca, orientación y promoción en distintos momentos de contacto con el público.",
      items: [
        { title: "Campañas y promociones", description: "Piezas pensadas para dar visibilidad a un mensaje durante una acción comercial." },
        { title: "Puntos de venta", description: "Gráfica que acompaña productos, recorridos y zonas de atención." },
        { title: "Eventos y espacios corporativos", description: "Elementos visuales para comunicar la identidad de una empresa en contextos temporales o permanentes." },
      ],
    },
    installation: {
      eyebrow: "Del archivo al espacio",
      title: "Producción e instalación coordinadas",
      intro: "Podemos acompañar la gráfica desde su preparación hasta su colocación cuando el proyecto lo requiere, cuidando la coherencia del conjunto.",
      points: [
        { title: "Preparación", description: "Revisamos qué debe comunicar cada pieza y el espacio al que va destinada." },
        { title: "Producción gráfica", description: "Organizamos las piezas impresas para que respondan al formato y uso definidos." },
        { title: "Colocación", description: "Coordinamos su integración en el espacio cuando forma parte del encargo." },
      ],
    },
    cta: { title: "¿Necesitas producir gráfica para tu empresa?", text: "Cuéntanos qué quieres comunicar, dónde se utilizará y qué piezas necesitas. Te ayudamos a definir una solución adecuada." },
    parent: true,
  },
  banners: {
    title: "Lonas publicitarias para empresas | GrupoClavD",
    description: "Producción e instalación de lonas publicitarias para empresas, fachadas, campañas y espacios comerciales. Soluciones adaptadas a cada proyecto.",
    eyebrow: "Impresión digital · Lonas",
    h1: "Lonas publicitarias para empresas",
    intro: "Creamos lonas publicitarias que llevan la imagen de tu empresa a espacios de gran visibilidad. Adaptamos la gráfica al formato, el entorno y el objetivo de cada campaña.",
    image: "/ImagenesWebClav/Fotos%20Que%20si/valla-publicitaria-cepsa-exterior.jpg",
    imageAlt: "Lona publicitaria de Cepsa situada en un soporte exterior",
    solutions: {
      eyebrow: "Soluciones de gran formato",
      title: "Lonas para comunicar a otra escala",
      intro: "No se trata solo de ampliar una imagen: cada ubicación pide una composición y un mensaje legibles.",
      items: [
        { title: "Campañas exteriores", description: "Mensajes que necesitan reconocerse desde el espacio público y a mayor distancia." },
        { title: "Fachadas comerciales", description: "Gráfica que aprovecha superficies visibles para identificar o promocionar un negocio." },
        { title: "Acciones temporales", description: "Piezas para promociones y comunicaciones con una duración definida." },
      ],
    },
    customization: {
      eyebrow: "Diseño y producción",
      title: "Una lona pensada para su ubicación",
      intro: "El tamaño, la distancia de lectura y el entorno determinan cómo debe organizarse la información visual.",
      points: [
        { title: "Formato", description: "La composición se ajusta al área disponible sin perder claridad." },
        { title: "Mensaje", description: "Priorizamos lo esencial para que la campaña pueda entenderse de un vistazo." },
        { title: "Identidad", description: "Adaptamos el diseño a los recursos gráficos de la marca." },
        { title: "Contexto", description: "Tenemos en cuenta la fachada o el espacio donde se mostrará." },
      ],
    },
    applications: {
      eyebrow: "Aplicaciones",
      title: "Visibilidad para campañas y espacios comerciales",
      intro: "Las lonas tienen sentido cuando una marca necesita ocupar una superficie amplia con un mensaje directo.",
      items: [
        { title: "Publicidad exterior", description: "Para reforzar una campaña en zonas de paso." },
        { title: "Fachadas", description: "Para comunicar identidad, aperturas o acciones puntuales." },
        { title: "Promociones", description: "Para dar protagonismo visual a una oferta o lanzamiento." },
      ],
    },
    installation: {
      eyebrow: "Instalación",
      title: "La gráfica debe funcionar también una vez colocada",
      intro: "Cuando la lona requiere instalación, coordinamos su posición con el espacio previsto para que el mensaje quede visible y bien integrado.",
      points: [
        { title: "Ubicación", description: "Revisamos dónde se verá y desde qué puntos se leerá." },
        { title: "Composición", description: "Preparamos la gráfica para el formato final antes de producirla." },
        { title: "Colocación", description: "Organizamos la instalación cuando forma parte del proyecto." },
      ],
    },
    cta: { title: "¿Tu campaña necesita una lona publicitaria?", text: "Cuéntanos el espacio, las medidas aproximadas y el mensaje que quieres mostrar. Estudiaremos contigo la solución." },
  },
  rigid: {
    title: "Impresión en soportes rígidos | GrupoClavD",
    description: "Producción gráfica en soportes rígidos para empresas: cartelería, señalización, displays y expositores adaptados a espacios comerciales.",
    eyebrow: "Impresión digital · Soportes rígidos",
    h1: "Impresión en soportes rígidos",
    intro: "Desarrollamos piezas gráficas rígidas para comunicar, orientar y destacar productos en espacios comerciales y corporativos. Cada propuesta responde a su función dentro del espacio.",
    image: "/ImagenesWebClav/Fotos%20Que%20si/expositor-biomecanics-punto-venta.jpg",
    imageAlt: "Expositor gráfico de Biomecanics en un punto de venta",
    imageFirst: true,
    solutions: {
      eyebrow: "Piezas para cada función",
      title: "Soluciones gráficas en soportes rígidos",
      intro: "Una pieza puede informar, señalar o convertirse en el foco de una zona de venta. Su función determina la propuesta.",
      items: [
        { title: "Cartelería", description: "Mensajes visuales para identificar espacios, productos o promociones." },
        { title: "Señalización gráfica", description: "Piezas que ayudan a reconocer áreas y facilitar la lectura del entorno." },
        { title: "Displays y expositores", description: "Elementos gráficos que dan presencia a productos o campañas en el punto de venta." },
      ],
    },
    customization: {
      eyebrow: "Producción a medida",
      title: "Diseñados para ocupar un lugar concreto",
      intro: "Trabajamos la proporción, el contenido y la presentación de cada pieza en relación con el entorno donde irá situada.",
      points: [
        { title: "Escala", description: "El formato se ajusta a la distancia de lectura y al espacio disponible." },
        { title: "Contenido", description: "Organizamos mensajes e imágenes según la función de la pieza." },
        { title: "Identidad de marca", description: "Mantenemos coherencia con el resto de la comunicación visual." },
        { title: "Integración", description: "Valoramos cómo convivirá con producto, mobiliario y señalización existente." },
      ],
    },
    applications: {
      eyebrow: "Aplicaciones",
      title: "De la cartelería al punto de venta",
      intro: "Los soportes rígidos pueden formar parte de una campaña concreta o de la gráfica habitual de un espacio.",
      items: [
        { title: "Comercios", description: "Comunicación de categorías, promociones y zonas de producto." },
        { title: "Espacios corporativos", description: "Gráfica informativa o de identidad integrada en el entorno." },
        { title: "Eventos", description: "Piezas de apoyo visual para zonas de exposición o atención." },
      ],
    },
    installation: {
      eyebrow: "Colocación",
      title: "Cada pieza, en el lugar donde aporta valor",
      intro: "La posición de un cartel o expositor condiciona su lectura. Si el proyecto incluye montaje, coordinamos la ubicación de las piezas con el espacio disponible.",
      points: [
        { title: "Lectura", description: "Definimos qué información debe destacar y desde dónde se verá." },
        { title: "Ubicación", description: "Situamos cada elemento en relación con su uso y recorrido visual." },
        { title: "Montaje", description: "Coordinamos la colocación cuando se incluye en el encargo." },
      ],
    },
    cta: { title: "¿Necesitas cartelería, displays o expositores?", text: "Cuéntanos qué piezas necesitas y en qué espacio van a utilizarse. Prepararemos una propuesta ajustada a su función." },
  },
  textiles: {
    title: "Textiles y banderas para empresas | GrupoClavD",
    description: "Gráfica textil y banderas para empresas, eventos, promociones y espacios comerciales. Soluciones visuales adaptadas a cada contexto.",
    eyebrow: "Impresión digital · Textiles",
    h1: "Textiles y banderas para empresas",
    intro: "Producimos banderas y gráfica textil para dar visibilidad a marcas en eventos, promociones y espacios comerciales. El diseño se adapta al lugar donde se mostrará y al mensaje que debe comunicar.",
    image: "/ImagenesWebClav/Logos-Cosa-Varias/banderas-textil-exterior.jpg",
    imageAlt: "Tres banderas verticales con gráfica de marcas en exterior",
    solutions: {
      eyebrow: "Soluciones textiles",
      title: "Gráfica que acompaña a tu marca",
      intro: "Las aplicaciones textiles ayudan a crear presencia visual en espacios donde la comunicación cambia o se desplaza.",
      items: [
        { title: "Banderas corporativas", description: "Identifican una marca y aportan visibilidad en accesos y zonas abiertas." },
        { title: "Gráfica para eventos", description: "Elementos textiles que acompañan la identidad visual en presentaciones y acciones promocionales." },
        { title: "Gráfica para espacios interiores", description: "Piezas visuales que pueden integrarse en entornos comerciales o expositivos." },
      ],
    },
    customization: {
      eyebrow: "Diseño y producción",
      title: "Una imagen coherente en cada formato",
      intro: "Trabajamos la composición gráfica para que el mensaje conserve su identidad al pasar de una pieza a otra.",
      points: [
        { title: "Formato", description: "Ajustamos el diseño a las proporciones de la pieza." },
        { title: "Marca", description: "Mantenemos legibles los elementos que permiten reconocerla." },
        { title: "Entorno", description: "Consideramos el fondo y la distancia desde los que se verá." },
        { title: "Conjunto", description: "Coordinamos las piezas cuando comparten un mismo espacio o campaña." },
      ],
    },
    applications: {
      eyebrow: "Aplicaciones",
      title: "Presencia visual en movimiento y en espacio",
      intro: "La gráfica textil puede acompañar tanto la señalización de una marca como la ambientación de una acción comercial.",
      items: [
        { title: "Accesos y exteriores", description: "Banderas visibles para identificar un lugar o una marca." },
        { title: "Eventos", description: "Gráfica que refuerza la identidad de una presentación o encuentro." },
        { title: "Promociones comerciales", description: "Piezas visuales que acompañan campañas en espacios de venta." },
      ],
    },
    installation: {
      eyebrow: "Colocación",
      title: "Pensadas para verse bien en su contexto",
      intro: "Antes de situar una bandera o elemento gráfico, importa conocer su emplazamiento y el recorrido del público. Podemos coordinar su colocación si forma parte del proyecto.",
      points: [
        { title: "Visibilidad", description: "Valoramos desde dónde se reconocerá el mensaje." },
        { title: "Composición", description: "Adecuamos el contenido al formato y a su orientación." },
        { title: "Colocación", description: "Integramos las piezas en el espacio cuando el encargo lo requiere." },
      ],
    },
    cta: { title: "¿Necesitas banderas o gráfica textil para tu empresa?", text: "Cuéntanos dónde quieres utilizarlas y qué debe comunicar tu marca. Te ayudaremos a dar forma a las piezas." },
  },
} satisfies Record<string, DigitalPrintingPage>;

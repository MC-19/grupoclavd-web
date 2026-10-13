import { paths } from "@/data/navigation";

type Advice = {
  name: string;
  parent: { name: string; href: string };
  preparation: string;
  questions: { question: string; answer: string }[];
  guides: { label: string; slug: string }[];
};

const signage = { name: "Rotulación", href: paths.signage };
const printing = { name: "Impresión digital", href: paths.digitalPrinting };

// Alcance basado en las páginas de servicio, el catálogo y los trabajos del repositorio.
export const serviceAdvice: Record<string, Advice> = {
  [paths.vehicles]: {
    name: "Rotulación de vehículos", parent: signage,
    preparation: "Envíanos la marca y el modelo, fotografías actuales, el número de vehículos y las zonas que quieres rotular. Añade el logotipo y la ubicación del trabajo para que podamos valorar la propuesta y su aplicación.",
    questions: [
      { question: "¿Podéis rotular una sola furgoneta o una flota?", answer: "Trabajamos la rotulación de vehículos comerciales y flotas. La gráfica se adapta a cada modelo y mantiene los elementos de identidad comunes cuando hay varias unidades." },
      { question: "¿De qué depende el presupuesto de rotulación de un vehículo?", answer: "Del vehículo concreto, las zonas que se rotularán, la cantidad de unidades, el diseño disponible y las condiciones de aplicación. El trabajo se presupuesta después de revisar esa información; una tarifa de vinilo por metro cuadrado no equivale al precio de la rotulación completa." },
    ],
    guides: [{ label: "Cómo planificar la gráfica de tus vehículos", slug: "rotulacion-vehiculos-empresa" }],
  },
  [paths.dimensionalLetters]: {
    name: "Letras corpóreas", parent: signage,
    preparation: "Comparte el logotipo, fotografías de la fachada o pared, las medidas disponibles y si necesitas iluminación. Así podemos valorar la escala de las letras, la composición y su instalación.",
    questions: [
      { question: "¿Las letras corpóreas pueden llevar iluminación?", answer: "Sí, ofrecemos letras corpóreas con y sin iluminación. La elección depende de dónde se colocarán, cómo se verá la marca y qué presencia necesita en ese espacio." },
      { question: "¿Qué necesitáis para presupuestar letras para una recepción o fachada?", answer: "El logotipo, las dimensiones de la zona disponible y fotografías del lugar. Indica también si se trata de un interior o exterior y si quieres iluminación; el acabado y el montaje se concretan al revisar el proyecto." },
    ],
    guides: [{ label: "Qué valorar en interiores y recepciones", slug: "letras-corporeas-interiores-recepciones" }, { label: "Letras corpóreas e iluminación: cómo elegir", slug: "letras-corporeas-o-rotulos-luminosos" }],
  },
  [paths.illuminatedSigns]: {
    name: "Rótulos luminosos y fachadas", parent: signage,
    preparation: "Envíanos fotografías generales de la fachada y de la zona prevista para el rótulo, las medidas disponibles y el logotipo. Indica la ubicación y si la visibilidad nocturna forma parte del objetivo.",
    questions: [
      { question: "¿Cómo se elige el rótulo para una fachada comercial?", answer: "Revisamos la identidad de marca, la superficie disponible y los puntos desde los que debe leerse. La iluminación se plantea según la visibilidad que necesita el negocio; no todas las fachadas requieren la misma solución." },
      { question: "¿El proyecto puede incluir la instalación?", answer: "Diseñamos, fabricamos e instalamos soluciones para fachadas. El montaje se define según las características del edificio y del rótulo, después de revisar el emplazamiento." },
    ],
    guides: [{ label: "Cómo preparar la rotulación de una fachada", slug: "planificar-rotulacion-fachada" }],
  },
  [paths.vinyls]: {
    name: "Vinilos para empresas", parent: signage,
    preparation: "Dinos qué superficie quieres rotular, sus medidas y dónde se encuentra. Adjunta fotografías, el diseño o los recursos de marca e indica si necesitas producción, instalación o ambas.",
    questions: [
      { question: "¿Qué vinilo conviene para un cristal, escaparate o pared?", answer: "Depende de la superficie, el efecto visual y el uso previsto. Trabajamos soluciones para cristales, escaparates e interiores; antes de elegir revisamos el lugar y la gráfica que se quiere aplicar." },
      { question: "¿Puedo calcular una estimación del vinilo?", answer: "La sección de presupuesto incluye referencias para varios tipos de vinilo. La estimación depende del producto y las medidas introducidas; el importe final y el alcance de la instalación se confirman al revisar el encargo." },
    ],
    guides: [{ label: "Cuándo elegir lona, soporte rígido o vinilo", slug: "lona-soporte-rigido-o-vinilo" }, { label: "Cómo organizar una campaña de escaparate", slug: "rotulacion-escaparates-campanas" }],
  },
  [paths.digitalPrintingBanners]: {
    name: "Lonas y gráfica para vallas publicitarias", parent: printing,
    preparation: "Para valorar la gráfica de una valla o una lona, comparte las medidas del soporte, fotografías del emplazamiento y el diseño disponible. Indica la ubicación y si el encargo necesita colocación.",
    questions: [
      { question: "¿Podéis producir gráfica para una valla publicitaria?", answer: "Producimos lonas publicitarias para soportes exteriores y coordinamos su colocación cuando forma parte del proyecto. Comparte las medidas y fotografías de la valla para valorar la gráfica y las condiciones de instalación." },
      { question: "¿Qué datos hacen falta para presupuestar una lona?", answer: "Las medidas, el lugar donde se utilizará, la creatividad disponible y si se necesita instalación. El catálogo incluye lona lisa, lona microperforada y refuerzo con ojales; la solución se concreta según el soporte y el uso previsto." },
    ],
    guides: [{ label: "Elegir el formato de la gráfica", slug: "lona-soporte-rigido-o-vinilo" }, { label: "Preparar archivos para gran formato", slug: "preparar-archivos-impresion-gran-formato" }],
  },
  [paths.digitalPrintingRigidSupports]: {
    name: "Soportes rígidos y displays publicitarios", parent: printing,
    preparation: "Cuéntanos qué debe comunicar la pieza o qué producto quieres destacar. Indica las medidas, la cantidad, el lugar de uso y el diseño disponible; si necesitas montaje, inclúyelo en la consulta.",
    questions: [
      { question: "¿Realizáis displays y expositores para puntos de venta?", answer: "Desarrollamos elementos gráficos para dar presencia a productos y campañas en espacios comerciales. El formato se plantea según el producto, el espacio disponible y la identidad de marca." },
      { question: "¿Cómo se define el soporte de un cartel o display?", answer: "Primero revisamos la función, las dimensiones y el entorno de la pieza. El soporte y el montaje se concretan para cada encargo; las fotografías del lugar y una referencia de la gráfica ayudan a preparar la propuesta." },
    ],
    guides: [{ label: "Soporte rígido, lona o vinilo: qué encaja", slug: "lona-soporte-rigido-o-vinilo" }, { label: "Qué enviar antes de imprimir", slug: "preparar-archivos-impresion-gran-formato" }],
  },
};

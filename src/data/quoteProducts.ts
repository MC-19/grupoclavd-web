export type QuotePricing =
  | { type: "square-meter"; unitPrice: number }
  | { type: "linear-meter"; unitPrice: number }
  | { type: "unit"; unitPrice: number }
  | { type: "consult"; tariffNote: string };

export interface QuoteProduct {
  id: string;
  name: string;
  pricing: QuotePricing;
}

export interface QuoteCategory {
  id: string;
  name: string;
  products: QuoteProduct[];
}

const m2 = (id: string, name: string, unitPrice: number): QuoteProduct => ({
  id,
  name,
  pricing: { type: "square-meter", unitPrice },
});

const linear = (id: string, name: string, unitPrice: number): QuoteProduct => ({
  id,
  name,
  pricing: { type: "linear-meter", unitPrice },
});

const unit = (id: string, name: string, unitPrice: number): QuoteProduct => ({
  id,
  name,
  pricing: { type: "unit", unitPrice },
});

const consult = (id: string, name: string, tariffNote: string): QuoteProduct => ({
  id,
  name,
  pricing: { type: "consult", tariffNote },
});

export const quoteCategories: QuoteCategory[] = [
  {
    id: "servicios",
    name: "Servicios y trabajos personalizados",
    products: [
      consult("rotulacion-interior", "Rotulación interior", "Depende del proyecto y material"),
      consult("rotulacion-exterior", "Rotulación exterior", "Depende del proyecto y material"),
      consult("vinilado-oficinas", "Vinilado de oficinas", "Depende del proyecto y material"),
      consult("rotulacion-vehiculos", "Rotulación de vehículos", "Depende del proyecto y material"),
      consult("senaletica-directorios", "Señalética y directorios", "Depende del proyecto y material"),
      consult("placas-identificativas", "Placas identificativas", "Depende del proyecto y material"),
      consult("tarjetas-visita", "Tarjetas de visita", "Depende del proyecto y material"),
      consult("material-corporativo", "Material corporativo", "Depende del proyecto y material"),
      consult("imprenta", "Imprenta", "Depende del proyecto y material"),
      consult("material-promocional", "Material promocional", "Depende del proyecto y material"),
    ],
  },
  {
    id: "vinilos-corte",
    name: "Vinilos de corte",
    products: [
      m2("vinilo-corte", "Vinilo de corte", 10),
      m2("vinilo-corte-plotter-transportador", "Vinilo de corte plotter + transportador", 14),
      m2("vinilo-monomerico-impreso", "Vinilo monomérico impreso", 9),
      m2("vinilo-monomerico-impreso-laminado", "Vinilo monomérico impreso laminado", 13),
      m2("vinilo-polimerico-5-impreso", "Vinilo polimérico 5 años impreso", 11),
      m2("vinilo-polimerico-5-laminado", "Vinilo polimérico 5 años impreso + laminado exterior", 17),
      m2("vinilo-polimerico-7-impreso", "Vinilo polimérico 7 años impreso", 16),
      m2("vinilo-fundido-impreso", "Vinilo fundido impreso", 22),
      m2("vinilo-fundido-impreso-laminado", "Vinilo fundido impreso + laminado", 32),
      consult("vinilo-reflectante", "Vinilo reflectante", "Desde 17 €/m² según color"),
      consult("vinilo-fluorescente", "Vinilo fluorescente", "Precio por definir"),
      m2("vinilo-translucido", "Vinilo translúcido", 2),
    ],
  },
  {
    id: "vinilos-impresos",
    name: "Vinilos impresos",
    products: [
      consult("vinilo-impresion", "Vinilo de impresión", "Precio por definir"),
      m2("vinilo-blockout", "Vinilo Blockout / opaco con trasera gris", 11),
      m2("vinilo-removible", "Vinilo removible", 9.75),
      m2("vinilo-reposicionable", "Vinilo reposicionable", 12),
      m2("vinilo-easy-dot", "Vinilo Easy Dot / adhesivo por puntos", 13),
      m2("vinilo-alta-adherencia", "Vinilo de alta adherencia", 23),
    ],
  },
  {
    id: "escaparates-cristales",
    name: "Vinilos para escaparates y cristales",
    products: [
      m2("vinilo-microperforado", "Vinilo microperforado", 13),
      m2("vinilo-microperforado-homologado", "Vinilo microperforado homologado", 14),
      m2("vinilo-acido", "Vinilo ácido / cristal al ácido", 2),
      m2("vinilo-transparente-no-laminado", "Vinilo transparente no laminado", 14),
      m2("vinilo-electrostatico", "Vinilo electrostático", 12),
      consult("vinilo-easy-dot-escaparates", "Vinilo Easy Dot para escaparates", "Precio por definir"),
    ],
  },
  {
    id: "vehiculos",
    name: "Vinilos para vehículos",
    products: [
      m2("vinilo-wrapping", "Vinilo para wrapping", 27),
      consult("vinilo-ppf", "Vinilo de protección / PPF", "Tarifa variable de 40 a 110 €/m²"),
      m2("vinilo-magnetico", "Vinilo magnético", 30),
      consult("vinilo-polimerico-vehiculos", "Vinilo polimérico para vehículos", "Mismo precio según acabado; acabado no definido"),
      m2("vinilo-fundido-cast-vehiculos", "Vinilo fundido / Cast para vehículos", 22),
      consult("vinilo-reflectante-vehiculos", "Vinilo reflectante para vehículos", "Precio por definir"),
    ],
  },
  {
    id: "decorativos",
    name: "Vinilos decorativos",
    products: [
      consult("vinilo-decorativo-texturizado", "Vinilo decorativo y texturizado", "Tarifa variable de 23 a 70 €/m²"),
      m2("vinilo-pizarra", "Vinilo efecto pizarra", 22),
      m2("vinilo-whiteboard", "Vinilo borrable / Whiteboard", 30),
    ],
  },
  {
    id: "paredes-suelos",
    name: "Paredes y suelos",
    products: [
      m2("laminado-suelo", "Laminado para suelo", 9),
      m2("vinilo-superficies-rugosas", "Vinilo para superficies rugosas", 32),
      m2("vinilo-alta-adherencia-paredes", "Vinilo de alta adherencia para paredes", 23),
    ],
  },
  {
    id: "especiales",
    name: "Vinilos especiales",
    products: [
      consult("vinilo-fotoluminiscente", "Vinilo fotoluminiscente", "Precio por definir"),
      m2("vinilo-textil-termotransferible", "Vinilo textil / termotransferible", 19),
      consult("vinilo-fluorescente-especial", "Vinilo fluorescente especial", "Precio por definir"),
      consult("vinilo-reflectante-especial", "Vinilo reflectante especial", "Precio por definir"),
      consult("vinilo-translucido-especial", "Vinilo translúcido especial", "Precio por definir"),
    ],
  },
  {
    id: "laminas-cristales",
    name: "Láminas para cristales",
    products: [
      consult("lamina-solar", "Lámina solar", "Tarifa variable de 23 a 100 €/m²"),
      m2("vinilo-acido-cristales", "Vinilo ácido para cristales", 2),
      m2("vinilo-microperforado-cristales", "Vinilo microperforado para cristales", 13),
    ],
  },
  {
    id: "lonas-comunicacion",
    name: "Lonas y comunicación visual",
    products: [
      m2("lona-lisa", "Lona lisa", 14),
      linear("refuerzo-lona-ojales", "Refuerzo de lona + ojales", 2.5),
      m2("lona-microperforada", "Lona microperforada", 17),
      unit("roll-up", "Roll-up", 80),
    ],
  },
];

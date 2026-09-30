export interface SquareMeterInput {
  widthCm: number;
  heightCm: number;
  quantity: number;
  unitPrice: number;
}

export interface SquareMeterResult {
  area: number;
  total: number;
}

function isPositiveFinite(value: number) {
  return Number.isFinite(value) && value > 0;
}

export function calculateSquareMeters(input: SquareMeterInput): SquareMeterResult | null {
  if (
    !isPositiveFinite(input.widthCm) ||
    !isPositiveFinite(input.heightCm) ||
    !isPositiveFinite(input.quantity) ||
    !Number.isInteger(input.quantity) ||
    !isPositiveFinite(input.unitPrice)
  ) {
    return null;
  }

  const area = (input.widthCm / 100) * (input.heightCm / 100) * input.quantity;
  return { area, total: area * input.unitPrice };
}

export function calculateLinearMeters(linearMeters: number, unitPrice: number) {
  if (!isPositiveFinite(linearMeters) || !isPositiveFinite(unitPrice)) return null;
  return { total: linearMeters * unitPrice };
}

export function calculateUnits(quantity: number, unitPrice: number) {
  if (!isPositiveFinite(quantity) || !Number.isInteger(quantity) || !isPositiveFinite(unitPrice)) return null;
  return { total: quantity * unitPrice };
}

export function sumCalculatedTotals(totals: Array<number | null>) {
  return totals.reduce<number>((sum, value) => sum + (value ?? 0), 0);
}

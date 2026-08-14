export interface BoardDimensions {
  length: string;
  width: string;
  thickness: string;
}

function formatNumber(value: string): string {
  return Number(value).toString();
}

export function extractDimensions(
  content: string
): BoardDimensions {

  const lengthRaw =
    content.match(/_BSX=([0-9.]+)/)?.[1] || "";

  const widthRaw =
    content.match(/_BSY=([0-9.]+)/)?.[1] || "";

  const thicknessRaw =
    content.match(/_BSZ=([0-9.]+)/)?.[1] || "";

  return {
    length: formatNumber(lengthRaw),
    width: formatNumber(widthRaw),
    thickness: formatNumber(thicknessRaw)
  };
}
export interface OperationsSummary {
  verticalDrills: number;
  horizontalDrills: number;
  grooves: number;
  components: number;
  total: number;
}

export function extractOperations(
  content: string
): OperationsSummary {

  const verticalDrills =
    (content.match(/BohrVert/g) || []).length;

  const horizontalDrills =
    (content.match(/BohrHoriz/g) || []).length;

  const grooves =
    (content.match(/Grooves_MPR3/g) || []).length;

  const components =
    (content.match(/Komponente/g) || []).length;

  const total =
    verticalDrills +
    horizontalDrills +
    grooves +
    components;

  return {
    verticalDrills,
    horizontalDrills,
    grooves,
    components,
    total
  };
}
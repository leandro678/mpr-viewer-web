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
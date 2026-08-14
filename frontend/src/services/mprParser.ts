export interface BoardDimensions {
  width: string;
  length: string;
  thickness: string;
}

export function extractDimensions(
  content: string
): BoardDimensions {

  const width =
    content.match(/LPX=(.*)/)?.[1] || "";

  const length =
    content.match(/LPY=(.*)/)?.[1] || "";

  const thickness =
    content.match(/LPZ=(.*)/)?.[1] || "";

  return {
    width,
    length,
    thickness
  };
}
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
export interface Operation {
  type: string;
  x: string;
  y: string;
  diameter: string;
  depth: string;
}

export function extractOperationList(
  content: string
): Operation[] {

  const lines = content.split("\n");

  const operations: Operation[] = [];

  let currentType = "";

  let x = "";
  let y = "";
  let diameter = "";
  let depth = "";

  for (const line of lines) {

    if (line.includes("BohrVert")) {

      currentType = "BohrVert";

      x = "";
      y = "";
      diameter = "";
      depth = "";
    }

    if (line.includes('XA="')) {
      x = line.match(/XA="([^"]+)"/)?.[1] || "";
    }

    if (line.includes('YA="')) {
      y = line.match(/YA="([^"]+)"/)?.[1] || "";
    }

    if (line.includes('DU="')) {
      diameter =
        line.match(/DU="([^"]+)"/)?.[1] || "";
    }

    if (line.includes('TI="')) {

      depth =
        line.match(/TI="([^"]+)"/)?.[1] || "";

      if (currentType === "BohrVert") {

        operations.push({
          type: currentType,
          x,
          y,
          diameter,
          depth
        });
      }
    }
  }

  return operations;
}

    export interface Drill {
     x: number;
     y: number;
     diameter: number;
     depth: number;
}

     export function extractVerticalDrills(
       content: string
     ): Drill[] {
     
         const operations =
             content.split("<102 \\BohrVert\\");

  const drills: Drill[] = [];

  for (const operation of operations) {

    const x =
      operation.match(/XA="([^"]+)"/)?.[1];

    const y =
      operation.match(/YA="([^"]+)"/)?.[1];

    const diameter =
      operation.match(/DU="([^"]+)"/)?.[1];

    const depth =
      operation.match(/TI="([^"]+)"/)?.[1];

    if (
      x &&
      y &&
      diameter &&
      depth
    ) {

      drills.push({
        x: Number(x),
        y: Number(y),
        diameter: Number(diameter),
        depth: Number(depth)
      });
    }
  }

  return drills;
}

    export interface HorizontalDrill {
      x: number;
      y: number;
      diameter: number;
      depth: number;
    }
    export function extractHorizontalDrills(
      content: string
    ): HorizontalDrill[] {
    
    const operations =
        content.split("<103 \\BohrHoriz\\");

    const drills: HorizontalDrill[] = [];

    for (const operation of operations) {

        const x =
        operation.match(/XA="([^"]+)"/)?.[1];

        const y =
        operation.match(/YA="([^"]+)"/)?.[1];

        const diameter =
        operation.match(/DU="([^"]+)"/)?.[1];

        const depth =
        operation.match(/TI="([^"]+)"/)?.[1];

        if (
        x &&
        y &&
        diameter &&
        depth
        ) {

        drills.push({
            x: Number(x),
            y: Number(y),
            diameter: Number(diameter),
            depth: Number(depth)
        });

        }

    }

  return drills;
}
      export interface Groove {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
     }
     export function extractGrooves(
      content: string
     ): Groove[] {

       const operations =
         content.split("<109 \\Grooves_MPR3\\");

       const grooves: Groove[] = [];

       for (const operation of operations) {

         const x1 =
         operation.match(/XA="([^"]+)"/)?.[1];

         const y1 =
         operation.match(/YA="([^"]+)"/)?.[1];

         const x2 =
         operation.match(/XE="([^"]+)"/)?.[1];

         const y2 =
         operation.match(/YE="([^"]+)"/)?.[1];

          if (
           x1 &&
           y1 &&
           x2 &&
           y2
         ) {

         grooves.push({
           x1: Number(x1),
           y1: Number(y1),
           x2: Number(x2),
           y2: Number(y2)
          });

         }
       }

      return grooves;
}

    export interface Component {
      x: number;
       y: number;
        name: string;
    }
    export function extractComponents(
     content: string
    ): Component[] {

     const operations =
       content.split("<139 \\Komponente\\");

     const components: Component[] = [];

     for (const operation of operations.slice(1)) {

       const x =
        operation.match(/XA="([^"]+)"/)?.[1];

       const y =
        operation.match(/YA="([^"]+)"/)?.[1];

       const name =
       operation.match(/IN="([^"]+)"/)?.[1];

       if (x && y && name) {

          components.push({
            x: Number(x),
            y: Number(y),
           name
          });

         }
       }

       return components;
}
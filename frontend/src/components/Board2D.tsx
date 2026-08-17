type Drill = {
  x: number;
  y: number;
  diameter: number;
  depth: number;
};

type HorizontalDrill = {
  x: number;
  y: number;
  diameter: number;
  depth: number;
};

type Groove = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

type Props = {
  width: number;
  length: number;
  drills: Drill[];
  horizontalDrills: HorizontalDrill[];
  grooves: Groove[];
  zoom: number;
};

function Board2D({
  width,
  length,
  drills,
  horizontalDrills,
  grooves,
  zoom
}: Props) {

 const maxSize = 500;

 const baseScale = Math.min(
  maxSize / Math.max(length, 1),
  maxSize / Math.max(width, 1)
);

 const scale = baseScale * zoom;

  return (
    <svg
      width="100%"
      height="500"
      style={{
        border: "1px solid #ccc"
      }}
    >

      {Array.from({ length: 20 }).map((_, index) => (
        <line
          key={`vertical-${index}`}
          x1={50 + index * 50}
          y1={0}
          x2={50 + index * 50}
          y2={500}
          stroke="#eeeeee"
          strokeWidth="1"
        />
      ))}

      {Array.from({ length: 20 }).map((_, index) => (
        <line
          key={`horizontal-${index}`}
          x1={0}
          y1={50 + index * 50}
          x2={1000}
          y2={50 + index * 50}
          stroke="#eeeeee"
          strokeWidth="1"
        />
      ))}

      <text
        x="50"
        y="30"
        fontSize="16"
      >
        {length} x {width} mm
      </text>

      <text
        x="50"
        y="45"
        fontSize="12"
        fill="red"
      >
        (0,0)
      </text>

      <rect
        x="50"
        y="50"
        width={length * scale}
        height={width * scale}
        fill="#f5f5f5"
        stroke="#333"
        strokeWidth="2"
      />

      {drills?.map((drill, index) => (
        <g key={index}>

          <circle
            cx={50 + drill.x * scale}
            cy={50 + drill.y * scale}
            r={drill.diameter / 2}
            fill="white"
            stroke="#1976d2"
            strokeWidth="2"
          />

          <circle
            cx={50 + drill.x * scale}
            cy={50 + drill.y * scale}
            r={2}
            fill="#1976d2"
          />

          <title>
            X: {drill.x} | Y: {drill.y} | Ø: {drill.diameter} | Prof.: {drill.depth}
          </title>

        </g>
      ))}

      {horizontalDrills?.map((drill, index) => (
        <g key={`h-${index}`}>

       <circle
         cx={50 + drill.x * scale}
         cy={50 + drill.y * scale}
          r={drill.diameter / 2}
         fill="#4caf50"
         stroke="#1b5e20"
          strokeWidth="2"
       />

         <title>
           Furo Horizontal |
           X: {drill.x} |
           Y: {drill.y} |
           Ø: {drill.diameter} |
           Prof.: {drill.depth}
         </title>

       </g>
      ))}

      {grooves?.map((groove, index) => (
       <line
         key={`groove-${index}`}
         x1={50 + groove.x1 * scale}
         y1={50 + groove.y1 * scale}
         x2={50 + groove.x2 * scale}
         y2={50 + groove.y2 * scale}
         stroke="#ff9800"
         strokeWidth="4"
       />
      ))}

    </svg>
  );
}

export default Board2D;
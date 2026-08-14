type Drill = {
  x: number;
  y: number;
  diameter: number;
  depth: number;
};

type Props = {
  width: number;
  length: number;
  drills: Drill[];
};

function Board2D({
  width,
  length,
  drills
}: Props) {

  const scale = 0.5;

  return (
    <svg
      width="100%"
      height="400"
      style={{
        border: "1px solid #ccc"
      }}
    >
      <text
        x="50"
        y="30"
        fontSize="16"
      >
        {length} x {width} mm
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
        <circle
          key={index}
          cx={50 + drill.x * scale}
          cy={50 + drill.y * scale}
          r={drill.diameter / 2}
          fill="#1976d2"
          stroke="#0d47a1"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

export default Board2D;
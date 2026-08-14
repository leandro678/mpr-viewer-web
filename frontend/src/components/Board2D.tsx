type Props = {
  width: number;
  length: number;
};

function Board2D({
  width,
  length
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
    </svg>
  );
}

export default Board2D;
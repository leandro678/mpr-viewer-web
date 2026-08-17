import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

type Props = {
  length: number;
  width: number;
  thickness: number;
};

function Board3D({
  length,
  width,
  thickness
}: Props) {

  const scale = 0.01;

  return (
    <Canvas
      camera={{
        position: [8, 6, 8],
        fov: 50
      }}
      style={{
        height: "500px",
        border: "1px solid #ccc"
      }}
    >

      <ambientLight intensity={1} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <mesh>
        <boxGeometry
          args={[
            length * scale,
            thickness * scale,
            width * scale
          ]}
        />

        <meshStandardMaterial
          color="#d2b48c"
        />
      </mesh>

      <OrbitControls />

    </Canvas>
  );
}

export default Board3D;
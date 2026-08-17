import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

type Props = {
  length: number;
  width: number;
  thickness: number;
  drills: Drill[];
  horizontalDrills: HorizontalDrill[];
};

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

function Board3D({
  length,
  width,
  thickness,
  drills,
  horizontalDrills
}: Props) {

  const scale = 0.01;

  return (
    <Canvas
      camera={{
        position: [12, 8, 12],
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

      <gridHelper args={[20, 20]} />

      <axesHelper args={[5]} />

      <mesh
        position={[0, 0, 0]}
      >
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

      {drills?.map((drill, index) => (

        <mesh
         key={index}
          position={[
           (drill.x * scale) - (length * scale / 2),
            (thickness * scale / 2) + 0.01,
            (drill.y * scale) - (width * scale / 2)
          ]}
         >

         <cylinderGeometry
             args={[
               drill.diameter * scale / 2,
               drill.diameter * scale / 2,
               thickness * scale,
               16
             ]}
         />

         <meshStandardMaterial
             color="blue"
          />

         </mesh>

        ))}

        {horizontalDrills?.map((drill, index) => (

         <mesh
            key={`h-${index}`}
            position={[
             (drill.x * scale) - (length * scale / 2),
              0,
             (drill.y * scale) - (width * scale / 2)
            ]}
            rotation={[
               0,
               0,
               Math.PI / 2
            ]}
         >

             <cylinderGeometry
                 args={[
                   drill.diameter * scale / 2,
                   drill.diameter * scale / 2,
                   drill.depth * scale,
                   16
                 ]}
                />

              <meshStandardMaterial
                color="green"
             />

         </mesh>

    ))}

      <OrbitControls />

    </Canvas>
  );
}

export default Board3D;
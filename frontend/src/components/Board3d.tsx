import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

type Props = {
  length: number;
  width: number;
  thickness: number;
  drills: Drill[];
  horizontalDrills: HorizontalDrill[];
  grooves: Groove[];
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

type Groove = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

function Board3D({
  length,
  width,
  thickness,
  drills,
  horizontalDrills,
  grooves
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

         {grooves?.map((groove, index) => {

             const grooveLength = Math.sqrt(
                 Math.pow(groove.x2 - groove.x1, 2) +
                 Math.pow(groove.y2 - groove.y1, 2)
             );

             const centerX =
                 ((groove.x1 + groove.x2) / 2);

             const centerY =
                 ((groove.y1 + groove.y2) / 2);

             return (
                 <mesh
                     key={`groove-${index}`}
                     position={[
                         (centerX * scale) -
                             (length * scale / 2),
                         (thickness * scale / 2) + 0.005,
                         (centerY * scale) -
                             (width * scale / 2)
                     ]}
                 >

                     <boxGeometry
                         args={[
                             grooveLength * scale,
                             0.02,
                             0.04
                         ]}
                     />

                     <meshStandardMaterial
                         color="orange"
                     />

                 </mesh>
             );

        })}

      <OrbitControls />

    </Canvas>
  );
}

export default Board3D;
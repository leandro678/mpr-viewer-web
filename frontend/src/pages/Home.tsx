import { useState } from "react";
import "../styles/Home.css";
import FileUploader from "../components/FileUploader";
import {
  extractDimensions,
  extractOperations,
  extractOperationList,
  extractVerticalDrills,
  extractHorizontalDrills,
  extractGrooves,
  extractComponents
} from "../services/mprParser";
import Board2D from "../components/Board2D";
import Board3D from "../components/Board3D";

function Home() {
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");

  const [dimensions, setDimensions] = useState({
    length: "",
    width: "",
    thickness: ""
  });

  const [operations, setOperations] = useState({
    verticalDrills: 0,
    horizontalDrills: 0,
    grooves: 0,
    components: 0,
    total: 0
  });

  const [operationList, setOperationList] = useState<any[]>([]);

  const [drills, setDrills] = useState<any[]>([]);

  const [horizontalDrills, setHorizontalDrills] = useState<any[]>([])

  const [grooves, setGrooves] = useState<any[]>([]);

  const [components, setComponents] = useState<any[]>([]);

  const [zoom, setZoom] = useState(1);

const handleFileLoaded = (
  content: string,
  name: string
) => {

  setFileName(name);

  setFileContent(content);

  const dims =
    extractDimensions(content);

  setDimensions(dims);

  const ops =
    extractOperations(content);

  setOperations(ops);

  const operationData =
    extractOperationList(content);

  setOperationList(operationData);

  const drillData =
    extractVerticalDrills(content);

  setDrills(drillData);

  const horizontalData =
    extractHorizontalDrills(content);
  
  setHorizontalDrills(horizontalData);

  const grooveData =
    extractGrooves(content);

  setGrooves(grooveData);

   const componentData =
     extractComponents(content);

  setComponents(componentData);

};

  const boardLength =
    Number(dimensions.length) || 0;

  const boardWidth =
    Number(dimensions.width) || 0;

  const boardThickness =
   Number(dimensions.thickness) || 0;

  const [selectedOperation] = useState<any>(null);

  return (
    <div className="home-container">

      <div className="header">
        <h1>MPR Viewer Web</h1>
      </div>

      <div className="upload-area">
        <FileUploader
          onFileLoaded={handleFileLoaded}
        />
      </div>

      <div className="info-panel">

        <h2>Informações da Peça</h2>

        <p>
          <strong>Arquivo:</strong>
          {" "}
          {fileName || "Nenhum arquivo"}
        </p>

        <br />

        <p>
          <strong>Comprimento:</strong>
          {" "}
          {dimensions.length || "-"} mm
        </p>

        <p>
          <strong>Largura:</strong>
          {" "}
          {dimensions.width || "-"} mm
        </p>

        <p>
          <strong>Espessura:</strong>
          {" "}
          {dimensions.thickness || "-"} mm
        </p>

        <br />

        <h3>Resumo das Operações</h3>

        <p>
          Furações Verticais:
          {" "}
          {operations.verticalDrills}
        </p>

        <p>
          Furações Horizontais:
          {" "}
          {operations.horizontalDrills}
        </p>

        <p>
          Canais:
          {" "}
          {operations.grooves}
        </p>

        <p>
          Componentes:
          {" "}
          {operations.components}
        </p>

        <p>
          Componentes encontrados:
         {" "}
         {components.length}
        </p>

        <ul>
          {components.map((component, index) => (
           <li key={index}>
            {component.name}
           </li>
          ))}
        </ul>

        <p>
         <strong>
           Total:
          </strong>
          {" "}
          {operations.total}
        </p>

      </div>

      <div className="viewer-2d">

        <h2>Visualização 2D</h2>

        <div style={{ marginBottom: "10px" }}>

          <button
            onClick={() =>
             setZoom(prev => prev * 1.2)
           }
         >
           Zoom +
         </button>

         <button
           onClick={() =>
             setZoom(prev => prev / 1.2)
           }
           style={{ marginLeft: "10px" }}
          >
            Zoom -
         </button>

        </div>

        <Board2D
          length={boardLength}
          width={boardWidth}
          drills={drills}
          horizontalDrills={horizontalDrills}
          grooves={grooves}
          zoom={zoom}
        />

        <div style={{ marginTop: "10px" }}>

          <p>🔵 Furo Vertical</p>

          <p>🟢 Furo Horizontal</p>

          <p>🟠 Canal</p>

        </div>

        <h2>Visualização 3D</h2>

          <Board3D
            length={boardLength}
            width={boardWidth}
            thickness={boardThickness}
            drills={drills}
            horizontalDrills={horizontalDrills}
          />

        <br />

        <div
          style={{
            padding: "15px",
            background: "#fafafa",
            border: "1px solid #ddd"
          }}
        >

          <h3>Operação Selecionada</h3>

          {
            selectedOperation ? (
              <>
                <p>
                  Tipo:
                  {" "}
                  {selectedOperation.type}
                </p>

                <p>
                  X:
                  {" "}
                  {selectedOperation.x}
                </p>

                <p>
                  Y:
                  {" "}
                  {selectedOperation.y}
                </p>
              </>
            ) : (
              <p>
                Passe o mouse sobre um furo.
              </p>
            )
          }

        </div>

        <br />

        <h2>Lista de Operações</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse"
        }}
        >

        <thead>
          <tr>

            <th>Tipo</th>

            <th>X</th>

            <th>Y</th>

            <th>Ø</th>

            <th>Prof.</th>

          </tr>
        </thead>

        <tbody>

          {operationList.map((op, index) => (
            <tr key={index}>

              <td>{op.type}</td>

              <td>{op.x}</td>

              <td>{op.y}</td>

              <td>{op.diameter}</td>

              <td>{op.depth}</td>

            </tr>
          ))}

        </tbody>

      </table>

      <br />


        <h2>Conteúdo Bruto do MPR (Depuração)</h2>

        <pre
          style={{
            whiteSpace: "pre-wrap",
            fontSize: "12px"
          }}
        >
          {fileContent}
        </pre>

      </div>

    </div>
  );
}

export default Home;
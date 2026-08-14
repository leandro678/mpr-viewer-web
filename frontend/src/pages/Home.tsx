import { useState } from "react";
import "../styles/Home.css";
import FileUploader from "../components/FileUploader";
import { extractDimensions } from "../services/mprParser";

function Home() {
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [dimensions, setDimensions] = useState({
  length: "",
  width: "",
  thickness: ""
});

const handleFileLoaded = (
  content: string,
  name: string
) => {

  setFileName(name);

  setFileContent(content);

  const dims = extractDimensions(content);

  setDimensions(dims);
};

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

      </div>

      <div className="viewer-2d">

        <h2>Conteúdo do Arquivo</h2>

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
import { useState } from "react";
import "../styles/Home.css";
import FileUploader from "../components/FileUploader";

function Home() {
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");

  const handleFileLoaded = (
    content: string,
    name: string
  ) => {
    setFileName(name);
    setFileContent(content);
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

        <h2>Arquivo Selecionado</h2>

        <p>{fileName || "Nenhum arquivo selecionado"}</p>

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
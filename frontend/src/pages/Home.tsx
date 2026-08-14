import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">

      <div className="header">
        <h1>MPR Viewer Web</h1>
      </div>

      <div className="upload-area">
        <button className="upload-button">
          Selecionar Arquivo MPR
        </button>
      </div>

      <div className="main-content">

        <div className="operations-panel">
          <h2>Operações</h2>

          <ul>
            <li>Furo 01</li>
            <li>Furo 02</li>
            <li>Canal 01</li>
            <li>Fresagem 01</li>
          </ul>

        </div>

        <div className="viewer-3d">
          <h2>Visualização 3D</h2>
          <p>Área reservada para o modelo 3D</p>
        </div>

      </div>

      <div className="info-panel">

        <h2>Informações da Peça</h2>

        <br />

        <p><strong>Código:</strong> LATERAL_DIREITA_001</p>

        <p><strong>Largura:</strong> 600 mm</p>

        <p><strong>Comprimento:</strong> 400 mm</p>

        <p><strong>Espessura:</strong> 18 mm</p>

        <p><strong>Material:</strong> MDF Branco 18 mm</p>

      </div>

      <div className="viewer-2d">
        <h2>Visualização 2D</h2>
        <p>Área reservada para o desenho 2D</p>
      </div>

    </div>
  );
}

export default Home;
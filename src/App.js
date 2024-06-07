import cachimbo from './assets/cachimbo-de-agua.png';
import narguile from './assets/narguile.png';
import style from './assets/css/style.css';
import script from './assets/script/index.js';
import './App.css';

function App() {
  return (
    <body>
    <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">

        {/* <img 
            src="./assets/narguile.png"
            alt="narguile"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          /> */}
          
        </a>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#meuModal"
        >
          <i className="bi bi-plus-square-fill"></i>
        </button>
      </div>
    </nav>

    <div
      className="modal fade"
      id="meuModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Adicionar nova Essência
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Fechar"
            ></button>
          </div>
          <div className="modal-body">
            <form id="essenciaForm">
              <div className="mb-3">
                <label htmlFor="saborEssencia" className="form-label">Sabor</label>
                <input type="text" className="form-control" id="saborEssencia" name="sabor" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="marcaEssencia" className="form-label">Marca</label>
                <input type="text" className="form-control" id="marcaEssencia" name="marca" required/>
              </div>
              <label htmlFor="responseMessage" id="responseMessage"></label>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
                <button type="submit" className="btn btn-primary">Salvar</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>

    <div className="selectBtn" id="selectBtn">
      <h4 id="monteSeuRoshMessage">Monte seu Rosh!</h4>

      <button type="button" className="btn btn-primary" id="umaEssencia">
        <i className="bi bi-1-square-fill"></i> Uma Essência
      </button>

      <button type="button" className="btn btn-primary" id="mix">
        <i className="bi bi-2-square-fill"></i> Mix
      </button>

      <div className="spinner-border text-primary d-none" role="status" id="spinner">
        <span className="visually-hidden">Carregando...</span>
      </div>
    </div>
    
    <div className="resultsBtn" id="resultsBtn">
     
    {/*</div>
     <div class="refreshBtns">
      <button type="button" class="btn btn-success" id="accept">BOA!!</button>
      <button type="button" class="btn btn-danger" id="refresh">
        <i class="bi bi-arrow-clockwise"></i>
      </button>*/}

    </div>
    

    <script src="./sript/index.js"></script>
  </body>
  );
}

export default App;

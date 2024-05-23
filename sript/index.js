document.addEventListener("DOMContentLoaded", function () {
  const selectBtn = document.getElementById("selectBtn");
  const resultDisplay = document.getElementById("resultsBtn");
  const btnUmaEssencia = document.getElementById("umaEssencia");
  const btnMix = document.getElementById("mix");
  const spinner = document.getElementById("spinner");
  const refreshBtn = document.getElementById("refreshBtn");
  const form = document.getElementById("essenciaForm");
  const responseMessage = document.getElementById("responseMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const formData = new FormData(form);

    const essenciaData = {};
    for (const [key, value] of formData.entries()) {
      essenciaData[key] = value;
    }

    createEssencia(essenciaData);
  });

  function createEssencia(essenciaData) {
    fetch("https://eonarga-api-fbf8d15a4fd5.herokuapp.com/person", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(essenciaData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao criar a essência");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Essência criada com sucesso:", data);
        showSuccessMessage();
        form.reset();
      })
      .catch((error) => {
        console.error("Erro ao criar a essência:", error);
        showErrorMessage("Erro ao criar a essência.");
      });
  }

  function showSuccessMessage() {
    const successMessage = document.createElement("div");
    successMessage.classList.add("alert", "alert-success");
    successMessage.textContent = "Essência criada com sucesso!";
    responseMessage.appendChild(successMessage);

    setTimeout(function () {
      successMessage.remove();
    }, 2000); // Remove o alerta após 3 segundos
  }

  function showErrorMessage(message) {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("alert", "alert-danger");
    errorMessage.textContent = message;
    responseMessage.appendChild(errorMessage);
  }

  btnUmaEssencia.addEventListener("click", () => {
    showSpinner();
    setTimeout(getEssencia, 1000); // Aguarda 1 segundo antes de buscar a essência
  });

  btnMix.addEventListener("click", () => {
    showSpinner();
    setTimeout(getMix, 1000); // Aguarda 1 segundo antes de buscar o mix
  });

  function getEssencia() {
    fetch("https://eonarga-api-fbf8d15a4fd5.herokuapp.com/person/random", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        hideSpinner();
        showEssencia(data);
        console.log(data);
      })
      .catch((error) => {
        hideSpinner();
        console.error("Erro ao buscar a Essencia", error);
      });
  }

  function getMix() {
    fetch("https://eonarga-api-fbf8d15a4fd5.herokuapp.com/person/randomdois", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        hideSpinner();
        showMix(data);
        console.log(data);
      })
      .catch((error) => {
        hideSpinner();
        console.error("Erro ao buscar o Mix", error);
      });
  }

  function showEssencia(essencia) {
    resultDisplay.innerHTML = `
    <div class="selectBtn">
      <h4>Rosh sorteado!</h4>

      <button type="button" class="btn btn-primary" id="umaEssencia">
        <i class="bi bi-1-square-fill"></i> ${essencia.sabor} ${essencia.marca}
      </button>
      <button id="refreshBtn" class="btn btn-secondary">
        <i class="bi bi-arrow-return-left"></i>
        Voltar
      </button>
    </div>
    `;
    hideButtons();
    hideMonteSeuRoshMessage();
    addRefreshEventListener();
  }

  function showMix(essencias) {
    const firstSabor = essencias[0].sabor;
    const firstMarca = essencias[0].marca;
    const secondSabor = essencias[1].sabor;
    const secondMarca = essencias[1].marca;

    resultDisplay.innerHTML += `
      <div class="selectBtn" id="displayResultMix">
        <h4>Rosh sorteado!</h4>

        <button type="button" class="btn btn-primary" id="umaEssencia">
          <i class="bi bi-1-square-fill"></i> ${firstSabor} ${firstMarca}
        </button>
        <i class="bi bi-plus-lg" style="font-size:20px"></i>
        <button type="button" class="btn btn-primary" id="mix">
          <i class="bi bi-2-square-fill"></i> ${secondSabor} ${secondMarca}
        </button>
        <button id="refreshBtn" class="btn btn-secondary">
          <i class="bi bi-arrow-return-left"></i>
          Voltar
        </button>
      </div>
    `;
    hideButtons();
    hideMonteSeuRoshMessage();
    addRefreshEventListener();
  }

  function hideButtons() {
    btnUmaEssencia.style.display = "none";
    btnMix.style.display = "none";
  }

  function showButtons() {
    btnUmaEssencia.style.display = "block";
    btnMix.style.display = "block";
  }

  function showSpinner() {
    spinner.classList.remove("d-none");
    hideButtons();
    hideMonteSeuRoshMessage();
  }

  function hideSpinner() {
    spinner.classList.add("d-none");
    showButtons();
  }

  function addRefreshEventListener() {
    const refreshBtn = document.getElementById("refreshBtn");
    refreshBtn.addEventListener("click", function () {
      location.reload();
    });
  }

  function hideMonteSeuRoshMessage() {
    const monteSeuRoshMessage = document.getElementById("monteSeuRoshMessage");
    if (monteSeuRoshMessage) {
      monteSeuRoshMessage.style.display = "none";
    }
  }
});

  // Definindo uma array para armazenar as tarefas
  let listaDeTarefas = [];
  const listaTarefasElement = document.getElementById("listaTarefas");
  const inputTarefaElement = document.getElementById("inputTarefa");
  
  // Função para adicionar uma nova tarefa à lista
  function adicionarTarefa() {
    const tarefa = inputTarefaElement.value;
    listaDeTarefas.push(tarefa);
    inputTarefaElement.value = "";
    exibirTarefas();
  }
  
  // Função para remover uma tarefa da lista
  function removerTarefa() {
    const tarefaSelecionada = prompt("Digite o número da tarefa que deseja remover:");
    const tarefaIndex = parseInt(tarefaSelecionada);
    if (!isNaN(tarefaIndex) && tarefaIndex >= 0 && tarefaIndex < listaDeTarefas.length) {
      listaDeTarefas.splice(tarefaIndex, 1);
      exibirTarefas();
    } else {
      alert("Número de tarefa inválido!");
    }
  }
  
  // Função para exibir todas as tarefas da lista
  function exibirTarefas() {
    listaTarefasElement.innerHTML = "";
    listaDeTarefas.forEach((tarefa, index) => {
      // const li = document.createElement("li");
      // li.innerText = `${index}: ${tarefa}`;
      const col = document.createElement("div");
      col.setAttribute("class", "col m-3 ");
      col.innerHTML = `<div  class='card shadow p-3 mb-5 bg-body-tertiary rounded'style='width: 18rem; background-color: #08029d !important; color: white !important;  box-shadow: 1px 1px 3px #c5c5c5,
      -1.5px -1.5px 3px #ffffff !important;'>
      <div class='card-body'>
        <i class="bi bi-${index}-square-fill" style="font-size: 2rem;"></i>
        <p class='card-text'>${tarefa}</p>
      </div>
    </div>`;
      listaTarefasElement.appendChild(col);
    });
  }
  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        adicionarTarefa();
    }
});
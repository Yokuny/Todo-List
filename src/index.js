/* pode adicionar Notas e Checklist */
/* deve haver lista de diferentes tipos de projetos para agrupar as tarefas */
/* quando o usuario abrir o aplicativo deve haver todo padrões e exemplo de conjunto */
/* o Usuario deve poder criar Novos conjuntos e um opção que selecione aonde seus todo irão ser adicionados */
/* Você deve separar a lógica do seu aplicativo (ou seja, criar novos todos, definir todos como completos,
    alterar a prioridade do todo, etc.) do material relacionado ao DOM, portanto, mantenha todas essas coisas em módulos separados. */
/* a interface deve ter
- visualizar todos as tarefas em cada projeto (provavelmente apenas o título e a data de vencimento…
    mudando de cor para diferentes prioridades)
- expandir uma unica tarefa para poder ver seus detalhes e altera-la
- deletar uma tarefa */
let taskArray = [];
import task from "./script/task.js";
import closeRegisterCard from "./script/closeRegisterCard.js";
import openRegisterCard from "./script/openRegisterCard.js";
import cleanRegisterCard from "./script/cleanRegisterCard.js";
import renderAllTasks from "./script/renderAllTasks.js";
const newTask = document.getElementById("taskInput");
const buttonToRegisterTask = document.getElementById("registerTaskCard");
/* funções */
function eraseTask(id) {
  for (let index = 0; index < taskArray.length; index++) {
    if (taskArray[index].id == id) {
      taskArray.splice(index, 1);
    }
  }
  localStorage.setItem("taskList", JSON.stringify(taskArray));
  renderAllTasks(taskArray);
  eventToTrashBtn();
  console.log(`> task apagada, salvei nova lista em LocalStorage`);
}

function eventToTrashBtn() {
  const allTrashButtons = document.getElementsByName("trash-outline");
  allTrashButtons.forEach((element) => {
    element.addEventListener("click", (theClick) => {
      eraseTask(theClick.target.id);
    });
  });
}
/* */
if (localStorage.taskList) {
  taskArray = JSON.parse(localStorage.getItem("taskList"));
  console.log("> true for localStorage taskList");
  closeRegisterCard();
  renderAllTasks(taskArray);
  eventToTrashBtn();
} else {
  const allScreenCard = document.getElementById("placeToRegisterCardRender");
  allScreenCard.style.display = "initial";
}
/* */
/* colocando event listener no Form quando submeter a nova task */
newTask.addEventListener("submit", (e) => {
  e.preventDefault();
  /* */
  console.log("> Peguei addEventListener submit do Task Register");
  let taskPriority = "";
  if (document.getElementById("urgent").checked) {
    taskPriority = "urgent";
  } else if (document.getElementById("important").checked) {
    taskPriority = "important";
  } else {
    taskPriority = "normal";
  }
  let aTask = task(
    document.getElementById("taskTitle").value,
    document.getElementById("taskDescription").value,
    document.getElementById("dueData").value,
    taskPriority,
    taskArray.length
  );
  taskArray.push(aTask);
  localStorage.setItem("taskList", JSON.stringify(taskArray));
  closeRegisterCard();
  cleanRegisterCard();
  renderAllTasks(taskArray);
  eventToTrashBtn();
  /* */
  console.log("> fechei registro, limpei e renderizei as task");
});
/* */
/* colocando event listener no botão de add task */
buttonToRegisterTask.addEventListener("click", () => {
  openRegisterCard();
});

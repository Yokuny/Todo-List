/* As tarefas são Factory */
/* obrigatoriamente devem ter title, description, dataDeVencimento and priority  */
/* pode adicionar Notas e Checklist */
/* deve haver lista de diferentes tipos de projetos para agrupar as tarefas */
/* quando o usuario abrir o aplicativo deve haver todo padrões e exemplo de conjunto */
/* o Usuario deve poder criar Novos conjuntos e um opção que selecione aonde seus todo irão ser adicionados */
/* Você deve separar a lógica do seu aplicativo (ou seja, criar novos todos, definir todos como completos,
    alterar a prioridade do todo, etc.) do material relacionado ao DOM, portanto, mantenha todas essas coisas em módulos separados. */
/* a interface deve ter
- visualizar os projetos (pastas de to do)
- visualizar todos as tarefas em cada projeto (provavelmente apenas o título e a data de vencimento…
    mudando de cor para diferentes prioridades)
- expandir uma unica tarefa para poder ver seus detalhes e altera-la
- deletar uma tarefa
*/
/* implementar forma de salvamento das tarefas em localStorage > salvando os arquivos no computador do usuario */

let taskArray = [];

const task = (title, description, dueDate, priorityColor) => {
  let priority;
  switch (priorityColor) {
      case "normal":
          priority = "lawngreen";
          break;
      case "important":
          priority = "dodgerblue";
          break;
      case "urgent":
          priority = "crimson";
          break;
      default:
          priority = "green";
          break;
  }
  return { title, description, dueDate, priority };
};
function closeRegisterCard(){
  const allScreenCard = document.getElementById("placeToRegisterCardRender");
  allScreenCard.style.display = "none";
}


if (localStorage.taskList) {
  taskArray = JSON.parse(localStorage.getItem("taskList"));
  closeRegisterCard();
} else {
  console.log("não há data");
}


const newTask = document.getElementById("taskInput");
newTask.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();
  let taskPriority = "";
  if(document.getElementById("urgent").checked){
    taskPriority = "urgent";
  }else if(document.getElementById("important").checked){
    taskPriority = "important";
  }else{
    taskPriority = "normal";
  }
  let aTask = task(
    document.getElementById("taskTitle").value,
    document.getElementById("taskDescription").value,
    document.getElementById("dueData").value,
    taskPriority
  );
  taskArray.push(aTask);
  localStorage.setItem("taskList", JSON.stringify(taskArray));
  closeRegisterCard();
});
/* pode adicionar Notas e Checklist */
/* deve haver lista de diferentes tipos de projetos para agrupar as tarefas */
/* quando o usuario abrir o aplicativo deve haver todo padrões e exemplo de conjunto */
/* o Usuario deve poder criar Novos conjuntos e um opção que selecione aonde seus todo irão ser adicionados */
/* Você deve separar a lógica do seu aplicativo (ou seja, criar novos todos, definir todos como completos,
    alterar a prioridade do todo, etc.) do material relacionado ao DOM, portanto, mantenha todas essas coisas em módulos separados. */
/*  a interface deve ter
- visualizar todos as tarefas em cada projeto (provavelmente apenas o título e a data de vencimento…)
- expandir uma unica tarefa para poder ver seus detalhes e altera-la  */
let taskArray = [];
import newTask from "./script/newTask.js";
import closeRegisterCard from "./script/closeRegisterCard.js";
import openRegisterCard from "./script/openRegisterCard.js";
import cleanRegisterCard from "./script/cleanRegisterCard.js";
import renderTasks from "./script/renderTasks.js";
import activedMenu from "./script/activedMenu.js";
const eventRegisterTask = document.getElementById("taskInput");
const RegisterTaskBtn = document.getElementById("registerTaskCard");
const normalRenderBtn = document.getElementById("normalRender");
const importantRenderBtn = document.getElementById("importantRender");
const urgentRenderBtn = document.getElementById("urgentRender");
const allTaskRenderBtn = document.getElementById("allTaskRender");
/*
funções
*/
const core = (() => {
  const renderByPriority = (type) => {
    let resultedArray = [];
    for (let i = 0; i < taskArray.length; i++) {
      if (taskArray[i].priority == type) {
        resultedArray.push(taskArray[i]);
      }
    }
    renderTasks(resultedArray);
    activedMenu(allTaskRenderBtn);
    eventViewBtn();
    eventEditBtn();
    eventEraseBtn();
  };

  const eraseTask = (id) => {
    for (let i = 0; i < taskArray.length; i++) {
      if (taskArray[i].id == id) {
        taskArray.splice(i, 1);
      }
    }
    localStorage.setItem("taskList", JSON.stringify(taskArray));
    renderTasks(taskArray);
    activedMenu(allTaskRenderBtn);
    eventViewBtn();
    eventEditBtn();
    eventEraseBtn();
    console.log(`> task removida, nova lista em LocalStorage, novo display e listeners`);
  };

  const eventViewBtn = () => {
    const allViewButtons = document.getElementsByName("eye-outline");
    allViewButtons.forEach((element) => {
      element.addEventListener("click", (theClick) => {
        console.log(">> esta executando função por click");
      });
    });
    console.log("> event to eye-outline");
  };

  const eventEditBtn = () => {
    const allEdiButtons = document.getElementsByName("create-outline");
    allEdiButtons.forEach((element) => {
      element.addEventListener("click", (theClick) => {
        editTask(theClick.target.id - 1000);
      });
    });
    console.log("> event to create-outline");
  };

  const eventEraseBtn = () => {
    const allTrashBtns = document.getElementsByName("trash-outline");
    allTrashBtns.forEach((element) => {
      element.addEventListener("click", (theClick) => {
        eraseTask(theClick.target.id - 1000);
      });
    });
    console.log("> event to trash-outline");
  };

  return { eventViewBtn, eventEditBtn, eventEraseBtn, renderByPriority };
})();
/*
verificação inicial se tem local storage
*/
if (localStorage.taskList) {
  taskArray = JSON.parse(localStorage.getItem("taskList"));
  closeRegisterCard();
  renderTasks(taskArray);
  activedMenu(allTaskRenderBtn);
  core.eventViewBtn();
  core.eventEditBtn();
  core.eventEraseBtn();
} else {
  openRegisterCard();
}
/*
watched components
*/
eventRegisterTask.addEventListener("submit", (e) => {
  e.preventDefault();
  taskArray.push(newTask(taskArray.length));
  localStorage.setItem("taskList", JSON.stringify(taskArray));
  closeRegisterCard();
  cleanRegisterCard();
  core.renderByPriority(taskArray[taskArray.length - 1].priority);
  activedMenu(taskArray[taskArray.length - 1].priority);
  core.eventViewBtn();
  core.eventEditBtn();
  core.eventEraseBtn();
  //console.log("> fechei registro, limpei e renderizei as task");
});
RegisterTaskBtn.addEventListener("click", openRegisterCard);
normalRenderBtn.addEventListener("click", () => {
  core.renderByPriority("green");
  activedMenu(normalRenderBtn);
});
importantRenderBtn.addEventListener("click", () => {
  core.renderByPriority("blue");
  activedMenu(importantRenderBtn);
});
urgentRenderBtn.addEventListener("click", () => {
  core.renderByPriority("red");
  activedMenu(urgentRenderBtn);
});
allTaskRenderBtn.addEventListener("click", () => {
  renderTasks(taskArray);
  activedMenu(allTaskRenderBtn);
  core.eventViewBtn();
  core.eventEditBtn();
  core.eventEraseBtn();
});
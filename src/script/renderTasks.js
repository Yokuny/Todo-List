export default function renderTasks(tasks) {
  const tasksElement = document.getElementById("itens");
  tasksElement.innerHTML = "";
  let taskCards = [];
  for (let index = 0; index < tasks.length; index++) {
    let cardTextH4 = document.createElement("h4");
    cardTextH4.textContent = tasks[index].title;
    let cardTextP = document.createElement("p");
    cardTextP.textContent = tasks[index].description;
    let cardTextContent = document.createElement("div");
    cardTextContent.appendChild(cardTextH4);
    cardTextContent.appendChild(cardTextP);
    let iconsDiv = document.createElement("div");
    iconsDiv.innerHTML = `
    <ion-icon id="${tasks[index].id + 5000}" name="eye-outline"></ion-icon>
    <ion-icon id="${tasks[index].id + 3000}" name="create-outline"></ion-icon>
    <ion-icon id="${tasks[index].id + 1000}" name="trash-outline"></ion-icon>`;
    iconsDiv.classList.add("cardIcons");
    let theCard = document.createElement("div");
    theCard.classList.add("item");
    theCard.style.borderLeft = `10px solid var(--${tasks[index].priority})`;
    theCard.appendChild(cardTextContent);
    theCard.appendChild(iconsDiv);
    taskCards.push(theCard);
  }
  taskCards.forEach((element) => {
    tasksElement.appendChild(element);
  });
  //
  console.log(">>> Render All Tasks");
}

export default function renderAllTasks(allTasks) {
  const tasksElement = document.getElementById("itens");
  tasksElement.innerHTML = "";
  let taskCards = [];
  for (let index = 0; index < allTasks.length; index++) {
    let cardTextH4 = document.createElement("h4");
    cardTextH4.textContent = allTasks[index].title;
    let cardTextP = document.createElement("p");
    cardTextP.textContent = allTasks[index].description;
    let cardTextContent = document.createElement("div");
    cardTextContent.appendChild(cardTextH4);
    cardTextContent.appendChild(cardTextP);
    let iconsDiv = document.createElement("div");
    iconsDiv.innerHTML = `
    <ion-icon name="eye-outline"></ion-icon>
    <ion-icon name="create-outline"></ion-icon>
    <ion-icon id="${allTasks[index].id}" name="trash-outline"></ion-icon>`;
    iconsDiv.classList.add("cardIcons");
    let theCard = document.createElement("div");
    theCard.classList.add("item");
    theCard.style.borderLeft = `10px solid var(--${allTasks[index].priority})`;
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

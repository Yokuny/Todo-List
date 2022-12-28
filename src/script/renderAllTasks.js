export default function renderAllTasks(allTasks) {
  const tasksElement = document.getElementById("itens");
  tasksElement.innerHTML = "";
  let taskCards = [];
  allTasks.forEach((element) => {
    let cardTextH4 = document.createElement("h4");
    cardTextH4.textContent = element.title;
    let cardTextP = document.createElement("p");
    cardTextP.textContent = element.description;
    let cardTextContent = document.createElement("div");
    cardTextContent.appendChild(cardTextH4);
    cardTextContent.appendChild(cardTextP);
    let iconsDiv = document.createElement("div");
    iconsDiv.innerHTML = `
    <ion-icon name="eye-outline"></ion-icon>
    <ion-icon name="create-outline"></ion-icon>
    <ion-icon name="trash-outline"></ion-icon>`;
    iconsDiv.classList.add("cardIcons");
    let theCard = document.createElement("div");
    theCard.classList.add("item");
    theCard.style.borderLeft = `10px solid var(--${element.priority})`;
    theCard.appendChild(cardTextContent);
    theCard.appendChild(iconsDiv);
    taskCards.push(theCard);
  });
  taskCards.forEach((element) => {
    tasksElement.appendChild(element);
  });
  //
  console.log(">>> Render All Tasks");
}

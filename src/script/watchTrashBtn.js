export default function watchTrashButtons(allTrashBtns) {
  allTrashBtns.forEach((element) => {
    element.addEventListener("click", (theClick) => {
      eraseTask(theClick.target.id - 1000);
    });
  });
  console.log("> event to trash-outline");
}

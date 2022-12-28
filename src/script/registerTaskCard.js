let registerTaskCard = document.getElementById("registerTaskCard");
registerTaskCard.addEventListener("click", () => {
  let allScreenCard = document.getElementById("placeToRegisterCardRender");
  allScreenCard.style.display = "initial";
});
console.log(">> Abri a tela de registro");
export default registerTaskCard;

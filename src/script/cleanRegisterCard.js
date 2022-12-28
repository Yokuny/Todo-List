export default function cleanRegisterCard() {
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDescription").value = "";
  document.getElementById("dueData").value = "";
  console.log(">> Finalizou modulo Limpar Register Card");
}

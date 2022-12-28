export default function cleanRegisterCard() {
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDescription").value = "";
  document.getElementById("dueData").value = "";
  console.log(">>> Clean Register Card");
}

import task from "./task.js";
export default function createNewTask(listSize) {
  let taskPriority = "";
  if (document.getElementById("urgent").checked) {
    taskPriority = "urgent";
  } else if (document.getElementById("important").checked) {
    taskPriority = "important";
  } else {
    taskPriority = "normal";
  }
  const aTask = task(
    document.getElementById("taskTitle").value,
    document.getElementById("taskDescription").value,
    document.getElementById("dueData").value,
    taskPriority,
    listSize
  );
  return aTask;
}

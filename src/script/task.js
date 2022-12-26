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
export default task;

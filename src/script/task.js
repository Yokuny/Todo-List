const task = (title, description, dueDate, priorityColor) => {
  let priority;
  switch (priorityColor) {
    case "normal":
      priority = "green";
      break;
    case "important":
      priority = "blue";
      break;
    case "urgent":
      priority = "red";
      break;
    default:
      priority = "light-gray";
      break;
  }
  return { title, description, dueDate, priority };
};
export default task;

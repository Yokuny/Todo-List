const task = (title, description, dueDate, priorityColor, id) => {
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
  id += 1000;
  return { title, description, dueDate, priority, id };
};
export default task;

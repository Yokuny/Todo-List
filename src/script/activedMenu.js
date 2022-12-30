export default function activedMenu(witchOne) {
  console.log("entrei na função");
  document.getElementById("normalRender").classList.add("listHover");
  document.getElementById("normalRender").classList.remove("listSelected");
  document.getElementById("importantRender").classList.add("listHover");
  document.getElementById("importantRender").classList.remove("listSelected");
  document.getElementById("urgentRender").classList.add("listHover");
  document.getElementById("urgentRender").classList.remove("listSelected");
  document.getElementById("allTaskRender").classList.add("listHover");
  document.getElementById("allTaskRender").classList.remove("listSelected");
  switch (witchOne) {
    case "red":
      witchOne = document.getElementById("urgentRender");
      break;
    case "blue":
      witchOne = document.getElementById("importantRender");
      break;
    case "green":
      witchOne = document.getElementById("normalRender");
      break;
  }
  witchOne.classList.add("listSelected");
}

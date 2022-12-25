import "./style/reset.css";

const registerCard = document.getElementById('card');
registerCard.innerHTML = `<input required type="text" name="" id="taskTitle" placeholder="titulo">
<input required type="text" name="" id="taskDescription" placeholder="descrição">
<input required type="date" name="" id="dueData" placeholder="data final">
<label for="importance">importance</label>
<select id="importance" name="importance" size="3">
  <option value="normal" selected>normal</option>
  <option value="important">important</option>
  <option value="urgent">urgent</option>
</select>
<button onclick="createTask()">Create</button>`
import "../style/reset.css";
import "../style/register.css";
// https://www.qodo.co.uk/blog/javascript-enabling-and-disabling-form-field-elements/
// para desativar elementos do input quando implementar opção de Task List e Quote
export default function registerCardRender() {
  document.body.innerHTML = `
  <section class="registerScreen">
    <div class="floatingCard">
        <form class="taskInput">
            <label for="taskTitle">Título</label>
            <input required type="text" id="taskTitle" placeholder="Título" />
            <label for="taskDescription">Descrição</label>
            <textarea required type="text" id="taskDescription" placeholder="descrição"> </textarea>
            <label for="dueData">Data limite</label>
            <input required type="date" id="dueData" placeholder="data final" />
            <fieldset>
                <legend>Prioridade</legend>
                <input name="importance" type="radio" id="normal" checked />
                <label for="normal">normal</label>
                <input name="importance" type="radio" id="important" />
                <label for="important">important</label>
                <input name="importance" type="radio" id="urgent" />
                <label for="urgent">urgent</label>
            </fieldset>
            <button type="submit">Create</button>
        </form>
    </div>
    </section>
    `;
}

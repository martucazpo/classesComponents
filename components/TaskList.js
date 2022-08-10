import Elements from "../library/Elements.js";

class TaskList extends Elements {
  constructor(
    elem,
    state,
    handleInput,
    handleDelete,
    handleEditForm,
    handleEdit
  ) {
    super(elem);
    this.elem = elem;
    this.state = state;
    this.elements = [];
    this.handleInput = handleInput;
    this.handleDelete = handleDelete;
    this.handleEditForm = handleEditForm;
    this.handleEdit = handleEdit;
    this.props = {
      handleInput: this.handleInput,
      handleSubmit: this.handleEdit,
      todos: this.state.tasks,
      isEdit: this.state.isEdit,
      id: this.state.id,
      inputs: [
        {
          name: "editTask",
          type: "text",
          required: true,
          value: this.state.editTask,
        },
      ],
      subTxt: "CHANGE",
      btnArr: [
        this.Btn({ handleClick: this.handleDelete, btnTxt: "X" }, value),
        this.Btn({ handleClick: this.handleEditForm, btnTxt: "EDIT" }, value),
      ],
    };
    this.makeList = this.makeList.bind(this);
  }
  makeList() {
    let section = document.createElement("section");
    if (this.state.tasks.length < 1) {
      let h3 = document.createElement("h3");
      h3.innerText = "There is nothing here to do!";
      section.append(h3);
      return section;
    } else {
      section.append(this.List(this.props));
      return section;
    }
  }
}

export default TaskList;

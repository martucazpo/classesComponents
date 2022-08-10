import UI from "./UI.js";

class Elements extends UI {
  constructor(elem) {
    super(elem);
    this.elem = elem;
    this.state = {};
    this.elements = [];
  }
}
Elements.prototype.Form = function (props) {
  let section = document.createElement("section");
  let form = document.createElement("form");
  form.addEventListener("submit", props.handleSubmit);
  props.inputs.forEach((obj) => {
    let input = document.createElement("input");
    input.setAttribute("name", obj.name);
    input.setAttribute("type", obj.type);
    input.addEventListener("input", props.handleInput)
    input.value = obj.value;
    input.required = obj.required;
    form.append(input);
  });
  let subBtn = document.createElement("button");
  subBtn.setAttribute("type", "submit");
  subBtn.innerText = props.subTxt;
  form.append(subBtn);
  div.append(form);
  return section;
};
Elements.prototype.Header = function (props) {
  let header = document.createElement("header");
  let h1 = document.createElement("h1");
  h1.innerText = props.headTxt;
  header.append(h1);
  return header;
};
Elements.prototype.List = function (props) {
  let ul = document.createElement("ul");
  props.todos.forEach((todo) => {
    let li = document.createElement("li");
    if (props.isEdit && props.id === todo.id) {
      li.append(this.Form(props));
    } else {
      li.innerText = todo.task;
      if (props.btnArr) {
        btnArr.forEach((btn) => li.append(btn(props, todo)));
      }
    }
    ul.append(li);
  });
  return ul
};
Elements.prototype.Btn = function(props, value){
    let button = document.createElement("button")
    button.addEventListener("click", ()=>props.handleClick(value))
    button.innerText = props.btnTxt
    return button
}

export default Elements;

import TodoList from "./TodoList.js"

class TodoElement extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: 'open'});
        new TodoList(shadow).render()
    }
    
}

customElements.define("todo-element", TodoElement)




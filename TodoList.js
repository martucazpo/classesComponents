import UI from "./library/UI.js"
import Header from "./components/Header.js"
import AddTodoForm from "./components/AddTodoForm.js"
import TaskList from "./components/TaskList.js"


class TodoList extends UI {
    constructor(elem){
        super(elem)
        this.elem = elem
        this.state = {
            id: "",
            task: "",
            editTask: "",
            tasks: [],
            isEdit: false
        }
        this.elements = []
        this.handleInput = this.handleInput.bind(this)
        this.handleAddTask = this.handleAddTask.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEditForm = this.handleEditForm.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.render = this.render.bind(this)
    }
    handleInput(e){
        let { name, value } = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
        return this
    }
    handleAddTask(e){
        e.preventDefault()
        let todo = {}
        todo.id = Math.floor(Math.random() * 90000)
        todo.task = this.state.task
        this.setState({
            ...this.state,
            tasks: [todo, ...this.state.tasks],
            task: ""
        })
        this.render()
        return this
    }
    handleDelete(todo){
        let allTheOthers = this.state.tasks.filter(task => task.id !== todo.id)
        this.setState({
            ...this.state,
            tasks: allTheOthers
        })
        this.render()
        return this
    }
    handleEditForm(todo){
        this.setState({
            ...this.state,
            editTask: todo.task,
            id: todo.id,
            isEdit: true
        })
        this.render()
        return this
    }
    handleEdit(e){
        e.preventDefault()
        let youveChanged = this.state.tasks.map(item => {
            if(item.id === this.state.id){
                item.task = this.state.editTask
            }
            return item
        })
        this.setState({
            ...this.state,
            tasks: youveChanged,
            editTask: "",
            id: "",
            isEdit: false
        })
        this.render()
    }
    render(){
        this.setElement(new Header().renderHeader())
        this.setElement(new AddTodoForm(this.elem,this.state,this.handleAddTask,this.handleInput).renderForm())
        this.setElement(new TaskList(this.elem,this.state,this.handleInput,this.handleDelete,this.handleEditForm,this.handleEdit).makeList())
        this.renderElements()
    }
}

export default TodoList
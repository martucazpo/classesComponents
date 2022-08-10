import Elements from "../library/Elements.js"

class AddTodoForm extends Elements {
    constructor(elem, state, handleSubmit, handleInput,){
        super(elem)
        this.elem = elem
        this.state = state
        this.elements = []
        this.handleSubmit = handleSubmit
        this.handleInput = handleInput
        this.props = {
            handleSubmit : this.handleSubmit,
            handleInput : this.handleInput,
            inputs: [{
                name: "task",
                type: "text",
                required: true,
                value: this.state.task
            }],
            subTxt: "ADD"
        }
        this.renderForm = this.renderForm.bind(this)
    }
    renderForm(){
        return this.Form(this.props)
    }
}

export default AddTodoForm
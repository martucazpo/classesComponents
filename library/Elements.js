import UI from "./UI.js"

class Elements extends UI {
    constructor(elem){
        super(elem)
        this.elem = elem
        this.state = {}
        this.elements = []
    }
}

export default Elements
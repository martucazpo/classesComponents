class UI {
    constructor(elem){
        this.elem = elem
        this.state = {}
        this.elements = []
    }
}
UI.prototype.setState = function(state){
    this.state = state
    return this
}
UI.prototype.setElement = function(element){
    this.elements = [...this.elements,element]
    return this
}
UI.prototype.unsetElements = function(){
    this.elements = []
    return this
}
UI.prototype.renderElements = function(){
    this.elements.forEach(element => this.elem.append(element))
    return this
}

export default UI
import Elements from "../library/Elements.js"


class Header extends Elements {
   constructor(elem){
    super(elem)
    this.elem = elem
    this.renderHeader = this.renderHeader.bind(this)
   }
   renderHeader(){
    return this.Header({ headTxt: "Let's find something to do!"})
   }
}

export default Header
import { updateDom } from "./main.js"

class Baxo {
  constructor(opt) {
    this.opt = opt
    this.data = opt.data
    this.fields = opt.fields
    this.items = []
    this.price = 0
    this.index = 0
  }
  
  add(id) {
    let foundEle = this.data.filter(product => product.id === id)
    
    let schema = {}
    
    this.fields.forEach(field => {
      if(foundEle[0].hasOwnProperty(field)) {
        schema[field] = foundEle[0][field]
      } else throw ReferenceError(`'${field}' not found on any product`)
    })
   
    this.items.push(
      {
        ...schema,
        index: this.index,
        price: foundEle[0].price
      }
    )
    
    this.index++
    
    this.price += foundEle[0].price
    updateDom()
  }
  
  remove(index) {
    let updatedBaxo = this.items.filter(item => item.index !== index)
    this.items = updatedBaxo
    // this.price = 0
    // this.items.forEach(item => this.price += item.price)

    // let index = this.items.findIndex(item => item.id=== id)
    
    // if(index >= 0) {
    //   this.items.splice(index, 1)
    // } else {
    //   console.log("not found");
    // }
    
    this.price = 0
    this.items.forEach(item => this.price += item.price)

    updateDom()
  }
}

export default Baxo
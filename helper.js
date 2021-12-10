import baxo from "./BaxoIns.js"

export const selector = s => document.querySelector(s)
export const selectorAll = s => document.querySelectorAll(s)
export const create = el => document.createElement(el)

export const ProductShowcaseCard = ({ name, id, index, price }) => {
  const div = create("div")
  div.className = "card"
  
  const h3 = create('h3')
  const p = create("p")
  const strong = create("strong")
  strong.textContent = price 
  h3.textContent = name
  p.textContent = id
  
  const button = create("button")
  button.innerText = "Add to cart"
  
  button.addEventListener("click", () => {
    baxo.add(id)
    console.log(baxo.items);
  })
  
  div.append(h3)
  div.append(p)
  div.append(strong)
  div.append(button)
  
  return div
}

export const CartShowcaseCard = ({ name, id , index, price }) => {
  const div = create("div")
  div.className = "card__cart"

  const h3 = create('h3')
  const span = create("span")
  const strong = create("strong")
  strong.textContent = price
  h3.textContent = name
  span.textContent = id

  const button = create("button")
  button.innerText = "Remove from bucket"

  button.addEventListener("click", () => {
    baxo.remove(index)
    console.log(baxo.items);
  })

  div.append(h3)
  div.append(span)
  div.append(strong)
  div.append(button)

  return div
}


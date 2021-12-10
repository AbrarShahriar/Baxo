import { products, getData } from "./data.js"
import { selector, selectorAll, ProductShowcaseCard, CartShowcaseCard } from "./helper.js"
import baxo from "./BaxoIns.js"

const cards = selector(".cards")
const bucketItems = selector(".items")
const bucketCount = selector(".title > span")
const priceContainer = selector("strong")

// getData()
// .then(data => {
//   initialRender(data)
//   baxo.data = data
// })

initialRender(products)
baxo.data = products

function initialRender(data) {
  for (var i = 0; i < data.length; i++) {
    cards.append(ProductShowcaseCard({
      name: data[i].title,
      id: data[i].id,
      price: data[i].price
    }))
  }
}

export function updateDom(updatedBucket) {
  bucketItems.innerHTML = null
  
  baxo.items.forEach(item => bucketItems.append(CartShowcaseCard({
    name: item.title,
    id: item.id,
    index: item.index
  })))
  
  bucketCount.textContent = baxo.items.length
  priceContainer.textContent = `${baxo.price}$`
}

// baxo.add(2)
// baxo.add(2)
// baxo.add(3)
// baxo.add(5)
// console.log(baxo.items);
// baxo.remove(1)
// console.log(baxo.items);
// baxo.remove(2)
// console.log(baxo.items);
// baxo.remove(0)
// console.log(baxo.items);
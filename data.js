export const products = [
  {
    title: "cooker",
    price: 49,
    id: 1
  },
  {
    title: "tv",
    price: 899,
    id: 2
  },
  {
    title: "pan",
    price: 29,
    id: 3
  },
  {
    title: "speaker",
    price: 488,
    id: 4
  },
  {
    title: "bag",
    price: 89,
    id: 5
  }
]

export async function getData() {
  const res = await fetch("https://fakestoreapi.com/products")
  const data = await res.json()
  return data
}
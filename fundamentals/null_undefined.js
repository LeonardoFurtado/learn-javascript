let val
let val2 = null
// console.log(val)
// console.log(val2)
// console.log(val3)

const product = {}
console.log(product.price) // Undefined
console.log(product) // {}

product.price = 7.50
console.log(product)
console.log(product.price)

product.price = undefined // avoid to use it.
console.log(product.price)
console.log(!!product.price)
product.price = null
console.log(product.price)
console.log(!!product.price)



import createItem from "./services/item.js";

import * as cartService from './services/cart.js'

const myCart = []
const myWishList = []

const item1 = await createItem('Hotwhells Ferrari',20.99, 1)
const item2 = await createItem('Hotwhells Lamborghini', 39.99, 3)

await cartService.addItem(myCart,item1)
await cartService.addItem(myCart,item2)

 await cartService.removeItem(myCart,1)
 await cartService.removeItem(myCart,1)


await cartService.displayCart(myCart)
await cartService.calculateTotal(myCart)


// await cartService.deletItem(myCart, item2.name)
// await cartService.deletItem(myCart, item1.name)





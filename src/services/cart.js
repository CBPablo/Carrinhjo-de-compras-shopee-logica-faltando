
async function addItem(userCart, item) {
    userCart.push(item)
}

//deletar item 

// async function deletItem(userCart, name) {


//     const index = userCart.findIndex((item) => item.name === name)
//     if (index !== -1) {
//         userCart.splice(deletItem, 1)
//     }
// }


//display cart

// remover um item

async function removeItem(userCart, posicao) {
    let  userCartPosition = posicao -1
     userCart[userCartPosition].quantity -= 1
     
    }
//calcular total

async function calculateTotal(userCart) {
    console.log(`Shopee service ... TOTAL IS:`)

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`\nTotal: R$${result}`)
}

async function displayCart(userCart) {
    
    console.log(`\nWelcome to your Shopee service.\n\nShopee cart list:\n`)
    userCart.forEach((item, index) => {
        
        console.log(`${index + 1}. ${item.name}-R$${item.price}. | Quantidade : X ${item.quantity}. | Subtotal: ${item.subtotal()}`)
    })
}

export {
    addItem,
    calculateTotal,
    removeItem,
    displayCart
}


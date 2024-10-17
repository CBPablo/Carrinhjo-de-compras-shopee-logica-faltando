// casos de uso dos itens
//criar item com subtotal certo
async function createItem(name, price, quantity){
    return {
        name, 
        price, 
        quantity,
        subtotal : () => price * quantity,
    }
}

export default createItem;


// const item=function(name, quantity, price){
//     this.name = name;
//     this.quantity = quantity
//     this.price = price
//     function calcular(a,b ){
//         return a * b
//     }
//     this.subtotal=calcular(price, quantity)
    
//     }
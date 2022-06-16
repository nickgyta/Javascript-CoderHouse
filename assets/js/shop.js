// E-COMMERCE del GYM
class item{
 constructor(tipo, talle, marca, color, precio) {
    this.tipo = tipo
    this.talle = talle
    this.marca = marca
    this.color = color
    this.precio = parseFloat(precio)
    this.vendido = false
 }
    carrito(){
        console.log('Has seleccionado el siguiente item: ' + this.tipo + ' talla ' + this.talle + ', de marca ' + this.marca + ' y de color ' + this.color+' al costo de $'+this.precio+' pesos.')
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
        console.log(this.precio)
    }
    vender(){
        this.vendido=true
    }
}
const item1 = new item('Remera', 'M', 'Reebok', 'Negro', 3500)
const item2 = new item('Short', 'L', 'Reebok', 'Azul', 2800)
const item3 = new item('Zapatillas', 42, 'Reebok', 'Negro', 18000)
const item4 = new item('Medias', 'M', 'Reebok', 'Azul', 1000)
const item5 = new item('Calleras', 'L', 'Rogue', 'Negro', 1400)

item1.carrito();
item1.sumaIva();
item2.carrito();
item3.carrito();
item4.carrito();
item5.carrito();

// }
// const item1 = {
//     tipo: 'short',
//     talle: 'l',
//     marca: 'reebok',
//     color: 'azul',

// }
// const item2 = {
//     tipo: 'zapatillas',
//     talle: '42',
//     marca: 'reebok',
//     color: 'negro',

// }
// const item3 = {
//     tipo: 'medias',
//     talle: 'm',
//     marca: 'reebok',
//     color: 'azul',

// }
// const item4 = {
//     tipo: 'callera',
//     talle: 'l',
//     marca: 'rogue',
//     color: 'negro',

// }
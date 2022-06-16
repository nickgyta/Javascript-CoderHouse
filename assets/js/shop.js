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
        this.precio *= 1.21;
        console.log(`con el IVA incluido el artículo ${this.tipo} se va a ${this.precio}`)
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
item2.carrito();
item3.carrito();
item4.carrito();
item5.carrito();

item1.sumaIva();
item2.sumaIva();
item3.sumaIva();
item4.sumaIva();
item5.sumaIva();

const total = item1.precio+item2.precio+item3.precio+item4.precio+item5.precio;
console.log(`El precio total de tus productos seleccionados es de $ ${total} pesos`)

// E-COMMERCE del GYM
// const listaItems = []
// let cantidad = 5

// do{
//     let entrada = prompt('Ingresar el tipo de artículo')
//     listaItems.push(entrada.toUpperCase());
//     console.log(listaItems.length);
// }while(listaItems.length != cantidad){
// const nuevaLista = listaItems.concat([])
// console.log(nuevaLista.join('\n'))



const item = [{
    'iD': 1,
    'tipo': 'Remera',
    'talle': 'M',
    'marca': 'Reebok',
    'color': 'Negro',
    'precio': 3500,
    'promo': 2999,
    'cantidad': 1,
    'imagen': 'https://http2.mlstatic.com/D_NQ_NP_2X_703026-MLA46375750218_062021-F.webp',
},
{
    'iD': 2,
    'tipo': 'Short',
    'talle': 'M',
    'marca': 'Reebok',
    'color': 'Azul',
    'precio': 2800,
    'promo': 2150,
    'cantidad': 1,
    'imagen': 'https://http2.mlstatic.com/D_NQ_NP_385115-MLM25146337841_112016-O.jpg',
},
{
    'iD': 3,
    'tipo': 'Zapatillas',
    'talle': '42',
    'marca': 'Reebok',
    'color': 'Negro',
    'precio': 18000,
    'promo': 14800,
    'cantidad': 1,
    'imagen': 'https://photo2.i-run.fr/reebok-crossfit-nano-6.0-m-chaussures-homme-132655-1-z.jpg',
},
{
    'iD': 4,
    'tipo': 'Medias',
    'talle': 'M',
    'marca': 'Reebok',
    'color': 'Azul',
    'precio': 1000,
    'promo': 850,
    'cantidad': 1,
    'imagen': 'https://http2.mlstatic.com/D_NQ_NP_2X_711320-MLV32036388683_092019-F.webp',
},
{
    'iD': 5,
    'tipo': 'Calleras',
    'talle': 'L',
    'marca': 'Rogue',
    'color': 'Negro',
    'precio': 1400,
    'promo': 1150,
    'cantidad': 1,
    'imagen': 'https://http2.mlstatic.com/D_NQ_NP_2X_686109-MLA49108573513_022022-F.webp',
}
]
const carrito = [];
let total = 0;

function gestionarItems() {
    let store = document.getElementById('store');

    item.forEach((e) => {
        let productoHTML = '\
            <div class="d-flex justify-content-between p-3">\
            <p class="lead mb-0">Oferta del Dia '+e.iD+'</p>\
            <div class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style="width: 35px; height: 35px;">\
            <p class="text-white mb-0 small">'+e.cantidad+'</p>\
          </div>\
        </div>\
        <img src="'+e.imagen+'"\
          class="card-img-top" alt="Laptop" />\
        <div class="card-body">\
          <div class="d-flex justify-content-between">\
            <p class="small"><a href="#!" class="text-muted">Indumentaria de entrenamiento</a></p>\
            <p class="small text-danger"><s>' +e.precio+ ' </s></p>\
          </div>\
          <div class="d-flex justify-content-between mb-3">\
            <h5 class="mb-0">'+e.tipo+', '+e.marca+'<hr>Color '+e.color+'<hr>Talle '+e.talle+'</h5>\
            <h5 class="text-dark mb-0">'+e.promo+'</h5>\
          </div>\
          <div class="d-flex justify-content-between mb-2">\
            <p class="text-muted mb-0">Disponibles: <span class="fw-bold">6</span></p>\
            <div class="ms-auto text-warning">\
              <i class="fa fa-star"></i>\
              <i class="fa fa-star"></i>\
              <i class="fa fa-star"></i>\
              <i class="fa fa-star"></i>\
              <i class="fa fa-star"></i>\
            </div>\
          </div>\
        </div>\
        </div>\
        '
        store.innerHTML += productoHTML
    });
}
gestionarItems();

//     carrito(){
//         console.log('Has seleccionado el siguiente item: ' + this.tipo + ' talla ' + this.talle + ', de marca ' + this.marca + ' y de color ' + this.color+' al costo de $'+this.precio+' pesos.')
//     }
//     sumaIva(){
//         this.precio *= 1.21;
//         console.log(`con el IVA incluido el artículo ${this.tipo} se va a ${this.precio}`)
//     }
//     vender(){
//         this.vendido=true
//     }
//     sumaTotal(){
//         this.precio+=this.precio;
//         console.log(`La suma total de tus productos es de ${this.precio} pesos`)
//     }

// }
// const items = []
// items.push(new item('Remera', 'M', 'Reebok', 'Negro', 3500))
// items.push(new item('Short', 'L', 'Reebok', 'Azul', 2800))
// items.push(new item('Zapatillas', 42, 'Reebok', 'Negro', 18000))
// items.push(new item('Medias', 'M', 'Reebok', 'Azul', 1000))
// items.push(new item('Calleras', 'L', 'Rogue', 'Negro', 1400))

// for (const item of items)
//    item.sumaIva()
// for (const item of items)
// item.carrito();

// for (const item of items)
// item.sumaTotal
// item1.carrito();
// item2.carrito();
// item3.carrito();
// item4.carrito();
// item5.carrito();

// item1.sumaIva();
// item2.sumaIva();
// item3.sumaIva();
// item4.sumaIva();
// item5.sumaIva();

// const total = item1.precio+item2.precio+item3.precio+item4.precio+item5.precio;
// console.log(`El precio total de tus productos seleccionados es de $ ${total} pesos`)

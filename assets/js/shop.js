// E-COMMERCE del GYM
// const carrito = [];
// let total = 0;

    const storeContainer = document.querySelector('#store');
    const carritoContenedor = document.querySelector('#carrito-contenedor')

    const contadorCarrito = document.querySelector('#contadorCarrito')
    const precioTotal = document.querySelector('#precioTotal')
    
    const btnVaciarCarrito = document.querySelector('#vaciarCarrito')

    let carrito 
    const carritoEnLocalStorage = JSON.parse(localStorage.getItem('carrito'))

    


    items.forEach((item)=>{
        const div = document.createElement('div')
    div.classList.add('card')

    div.innerHTML = `<div class="d-flex justify-content-between p-3">
                    <p class="lead mb-0">Oferta del Dia</p>
                    <div class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style="width: 35px; height: 35px;">
                    <p class="text-white mb-0 small">${item.cantidad}</p>
                    </div>
                    </div>
                    <img src="${item.imagen}"
                    class="card-img-top" alt="Laptop" />
                    <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <p class="small"><a href="#!" class="text-muted">Indumentaria de entrenamiento</a></p>
                        <p class="small text-danger"><s>$${item.precio} </s></p>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <h5 class="mb-0">${item.tipo}, ${item.marca}<hr>Color ${item.color}<hr>Talle ${item.talle}</h5>
                        <h5 class="text-dark mb-0">$${item.promo}</h5>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                        <p class="text-muted mb-0">Disponibles: <span class="fw-bold">6</span></p>
                        <div class="ms-auto text-warning">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        </div>
                    </div><a href="#!" class="btn btn-primary" onclick='agregarItemAlCarrito(${item.iD})'>Agregar al carrito  <i class="fas fa-shopping-cart"></i></a>
                    </div>
                    </div>
                    `

    storeContainer.append(div)
    })

    const agregarItemAlCarrito = (iD) => {
        const prod = items.find( (item) => item.iD === iD) 
        carrito.push(prod)

        localStorage.setItem('carrito', JSON.stringify(carrito))

        console.log(carrito)
        renderCarrito()
        visualizarCantidad()
        renderTotal()
    }

    const removerCarrito = (iD) => {
        const remover = carrito.find((item) => item.iD === iD)
        const indice = carrito.indexOf(remover)
        carrito.splice(indice, 1)

        localStorage.setItem('carrito', JSON.stringify(carrito))

        renderCarrito()
        visualizarCantidad()
        renderTotal()
    }
    const VaciarCarrito = () => {
    carrito.length = 0

    localStorage.setItem('carrito', JSON.stringify(carrito))

        renderCarrito()
        visualizarCantidad()
        renderTotal()
    }

    btnVaciarCarrito.addEventListener('click', VaciarCarrito)
    
    const renderCarrito = () => {
        carritoContenedor.innerHTML = ''

        carrito.forEach((art)=>{
            const div = document.createElement('div')
            div.classList.add('productoEnCarrito')

            div.innerHTML = `
                        <p>${art.tipo}</p>
                        <p>Precio: $${art.promo}</p>
                        <button onclick='removerCarrito(${art.iD})'class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                        `

            carritoContenedor.append(div)
        })
    }

    const visualizarCantidad = () => {
        contadorCarrito.innerText = carrito.length
    }

    const renderTotal = () => {
        let total = 0
        carrito.forEach((art) => {
            total += art.precio
        }) 
        precioTotal.innerText = total
    }

    if(carritoEnLocalStorage){
        carrito = carritoEnLocalStorage
        
        renderCarrito()
        visualizarCantidad()
        renderTotal()
    } else{
        carrito = []
    }





    // function gestionarItems() {
    // const store = document.querySelector('#store');
    // let filtro = document.getElementById('filtro');
    // filtro.innerHTML = `
    // <button class= 'btn btn-warning mb-5' onclick='filtroPrecio()'>filtrar mayor a $10.000</button>
    // `
//     item.forEach((e) => {
//         let productoHTML = `
//             <div class="d-flex justify-content-between p-3">
//             <p class="lead mb-0">Oferta del Dia</p>
//             <div class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style="width: 35px; height: 35px;">
//             <p class="text-white mb-0 small">${e.cantidad}</p>
//           </div>
//         </div>
//         <img src="${e.imagen}"
//           class="card-img-top" alt="Laptop" />
//         <div class="card-body">
//           <div class="d-flex justify-content-between">
//             <p class="small"><a href="#!" class="text-muted">Indumentaria de entrenamiento</a></p>
//             <p class="small text-danger"><s>${e.precio} </s></p>
//           </div>
//           <div class="d-flex justify-content-between mb-3">
//             <h5 class="mb-0">${e.tipo}, ${e.marca}<hr>Color ${e.color}<hr>Talle ${e.talle}</h5>
//             <h5 class="text-dark mb-0">${e.promo}</h5>
//           </div>
//           <div class="d-flex justify-content-between mb-2">
//             <p class="text-muted mb-0">Disponibles: <span class="fw-bold">6</span></p>
//             <div class="ms-auto text-warning">
//               <i class="fa fa-star"></i>
//               <i class="fa fa-star"></i>
//               <i class="fa fa-star"></i>
//               <i class="fa fa-star"></i>
//               <i class="fa fa-star"></i>
//             </div>
//           </div><a href="#!" class="btn btn-primary" onclick='agregarItemAlCarrito ${e.iD}'>Agregar al carrito<i class="fas fa-shopping-cart"></i></a>
//         </div>
//         </div>
//         `
//         store.innerHTML += productoHTML
//     });
// }
// gestionarItems();

// function agregarItemAlCarrito(iD){
//     let producto = item.find(producto=> producto.iD == iD);
//     let productoEnCarrito = carrito.find(producto => producto.iD == iD);
//     if(productoEnCarrito){
//         productoEnCarrito.cantidad+producto.cantidad;
//     }else{
//         producto.cantidad = 1;
//         carrito.push(producto);
        
//     }
//     gestionarCarrito();
// }

// function gestionarCarrito(){

// let carritoHTML = document.getElementById('carrito')

//  html = '';
//  carrito.forEach((producto, iD)=>{
//     html += `
//     <div class="d-flex justify-content-between p-3">
//     <p class="lead mb-0">Oferta del Dia</p>
//     <div class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style="width: 35px; height: 35px;">
//     <p class="text-white mb-0 small">${producto.cantidad}</p>
//   </div>
// </div>
// <img src="${producto.imagen}"
//   class="card-img-top" alt="Laptop" />
// <div class="card-body">
//   <div class="d-flex justify-content-between">
//     <p class="small"><a href="#!" class="text-muted">Indumentaria de entrenamiento</a></p>
//     <p class="small text-danger"><s>${producto.precio} </s></p>
//   </div>
//   <div class="d-flex justify-content-between mb-3">
//     <h5 class="mb-0">${producto.tipo}, ${producto.marca}<hr>Color ${producto.color}<hr>Talle ${producto.talle}</h5>
//     <h5 class="text-dark mb-0">${producto.promo}</h5>
//   </div>
//   <div class="d-flex justify-content-between mb-2">
//     <p class="text-muted mb-0">Disponibles: <span class="fw-bold">6</span></p>
//     <div class="ms-auto text-warning">
//       <i class="fa fa-star"></i>
//       <i class="fa fa-star"></i>
//       <i class="fa fa-star"></i>
//       <i class="fa fa-star"></i>
//       <i class="fa fa-star"></i>
//     </div>
//   </div><a href="#!" class="btn btn-primary" onclick='eliminarItemDelCarrito ${iD}'>Agregar al carrito</a>
// </div>
// </div>
// `
//  })
//  calcularTotal();
// carritoHTML.innerHTML = html; 

// }


// function calcularTotal(){

//     carrito.forEach((producto)=>{

//         total += producto.promo * producto.cantidad;
//     });
//     console.log(total);
// }

// const eliminarItemDelCarrito = (iD) => {
//     console.log(carrito[iD].cantidad);
//     carrito[iD].cantidad--;
//     console.log(carrito[iD].cantidad);

//     if(carrito[iD].cantidad== 0){
//         carrito.splice(iD, 1);
//     }
//     gestionarCarrito();
// }

// function filtroPrecio(){
//     let bd = item.filter(producto=>producto.promo>10000);
//     console.log(bd);

// }
















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

// E-COMMERCE del GYM
// const carrito = [];
// let total = 0;

    const storeContainer = document.querySelector('#store');
    const carritoContenedor = document.querySelector('#carrito-contenedor')

    const contadorCarrito = document.querySelector('#contadorCarrito')
    const precioTotal = document.querySelector('#precioTotal')
    
    const btnVaciarCarrito = document.querySelector('#vaciarCarrito')

    const carrito = JSON.parse(localStorage.getItem('carrito')) || []

    let stock = []

    fetch('../items.json')
    .then((resp) => resp.json())
    .then((data) => {
        stock = data
  
    stock.forEach((item)=>{
        const div = document.createElement('div')
    div.classList.add('card')

    div.innerHTML = `
                    <div class="d-flex justify-content-between p-3">
                    <p class="lead mb-0">Oferta del Dia</p>
                    
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
})

    const agregarItemAlCarrito = (iD) => {
        const prod = carrito.find((item) => item.iD === iD) 

        if (prod) {
            prod.cantidad += 1
            checkAgregarItem(prod.tipo, prod.marca)

        } else {
            const {id, tipo, precio} = stock.find( (item) => item.id === iD)
        
            const prod = {
                id, 
                tipo, 
                marca,
                precio, 
                cantidad: 1
            }
        carrito.push(prod)
        checkAgregarItem(tipo, marca)
       
        }

        localStorage.setItem('carrito', JSON.stringify(carrito))

        console.log(carrito)
        renderCarrito()
        visualizarCantidad()
        renderTotal()
    }

    const removerCarrito = (iD) => {
        const remover = carrito.find((item) => item.iD === iD)

        remover.cantidad -= 1
        if (remover.cantidad === 0) {
            const indice = carrito.indexOf(remover)
        carrito.splice(indice, 1)
        }
        Toastify({
            text: `Se eliminó 1 unidad de ${remover.nombre}`,
            position: 'left',
            gravity: 'bottom',
            duration: 5000,
            style: {
                background: "linear-gradient(to right, #f17b5d, #f02f2f)",
              }
            }).showToast()

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
            total += art.precio * art.cantidad
        }) 
        precioTotal.innerText = total
    }


    const checkAgregarItem = (art,art2)=>{
    Toastify({
        text: `${art}  ${art2} fue agregado al carrito con exito!`,
        duration: 3000,
        position: 'right',
        gravity: 'bottom',
        style: {
          background: "linear-gradient(to right, #b53200, #f3c96a)",
        }
      }).showToast();
    }
    renderCarrito()
    visualizarCantidad()
    renderTotal()

    

    
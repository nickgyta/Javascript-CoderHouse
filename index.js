

const storeContainer = document.querySelector('#store');
// const carritoContenedor = document.querySelector('#carrito-contenedor')

// const contadorCarrito = document.querySelector('#contadorCarrito')
// const precioTotal = document.querySelector('#precioTotal')

// const btnVaciarCarrito = document.querySelector('#vaciarCarrito')

// const carrito = JSON.parse(localStorage.getItem('carrito')) || []

// let stock = []

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9fde5139c9msh8b0ab8e00fec08cp1cf57ejsn99245c962dc6',
		'X-RapidAPI-Host': 'amazon-products1.p.rapidapi.com'
	}
};

fetch('https://amazon-products1.p.rapidapi.com/summaries?country=MX&asins=B078HF7LBH%2CB07T9RP449%2CB07XRNGVD5%2CB07ZQJLSKJ%2CB01NBP3J7Y%2CB098FGBZ29%2CB07ZN1QM47%2CB07B163FP6%2CB09PHH2PY2%2CB08VNP7C19%2CB089NLLCC1%2C', options)
.then((resp) => resp.json())
.then((data) => {
	console.log(data)
stock = data

for (let datos = 0; datos < data.lenght; datos++) {
    
}((data)=>{
    const div = document.createElement('div')
div.classList.add('card')

div.innerHTML = `
                <div class="d-flex justify-content-between p-3">
                <p class="lead mb-0">Oferta del Dia</p>
                </div>
                <img src="${data.image}"
                class="card-img-top" alt="Laptop" />
                <div class="card-body">
                <div class="d-flex justify-content-between">
                    <p class="small"><a href="#!" class="text-muted">Indumentaria de entrenamiento</a></p>
                    <p class="small text-danger"><s>${data.prices.currency}${data.prices.current_price} </s></p>
                </div>
                <div class="d-flex justify-content-between mb-3">
                    <h5 class="mb-0">${data.title}
                    <h5 class="text-dark mb-0">$${data.prices.previous_price}</h5>
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
                </div><a href="#!" class="btn btn-primary" onclick='agregarItemAlCarrito(${data.asin})'>Agregar al carrito  <i class="fas fa-shopping-cart"></i></a>
                </div>
                </div>
                `

            storeContainer.append(div)
        })
    })
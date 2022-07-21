
// ARMANDO CONDICIONAL PARA PAGINA WEB DEL GIMNASIO // CONDICIONAL IF

// let person = prompt('Ingresa su nombre y apellido')

// alert('Bienvenido ' + person)

// let training = prompt('Ingrese el tipo de entrenamiento que ud. realiza(libre/fijo/programacion')

// if(training === 'libre'){
//     alert('Bienvenido a las clases libres de IronCross ' + person+'.')
// }
// else if(training === 'fijo'){
//     alert('Bienvenido a las clases guiadas semanales de IronCross ' + person+'.')
// }
// else if(training === 'programacion'){
//     alert('Bienvenido a las clases de entrenamiento hiit y musculacion de IronCross ' + person+'.')
// }
// else{
//     alert('No es una clase válida. Por favor ingrese un tipo de clase de entrenamiento válido')
// }




// //Mi deuda del gimnasio


// let mesActual = 6
// let mesesPagados= Number(prompt('indique la cantidad de meses pagados en lo que va del año'))
// let mesesDeudores  = mesActual - mesesPagados


// while(mesesDeudores === 0){
//  mesesDeudores+=0
//  break
// alert('estas al dia con tu cuota')
 

// }if (mesesDeudores > 0){
//     alert('estas debiendo '+ mesesDeudores + ' cuota/s')

// }else{
    
//     alert('llevas adelantadas ' + mesesDeudores +' cuota/s') 
//     }

// // ARRAYS - ORDENAR NUMERO DE LOS PARTICIPANTES CLASIFICADOS PARA LA PROXIMA COMPETENCIA DE CROSSFIT DE LA PROVINCIA


// let numeroos = [9, 11, 6, 2, 17, 13, 32, 27]
// numeroos.sort((a,b) =>{
//     if(a === b){
//         return 0;
//     }
//     if(a<b){
//         return -1;
//     }
//     else{
//         return 1;
//     }
// });
// console.log(numeroos)

// // ORDENAR PARTICIPANTES CLASIFICADOS DEL ULTIMO AL PRIMER PUESTO

// let numeros = [65, 32, 85, 47, 12, 3, 99, 55]
// numeros.sort((a,b) =>{
//     if(a === b){
//         return 1
//     }
//     else if (a<b){
//         return 1
//     }
//     else{
//         return -1
//     }
// })
// console.log(numeros)

// // ORDENAR EL TOTAL DE PARTICIPANTES YA CLASIFICADOS ANTERIORMENTE

// let numbers = [14,6,98,52,64,31,78,99,5,12,32,71,2,0]
// numbers.sort((a,b)=>{
//     if(a===b){
//         return 0
//     }
//     else if(a<b){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// console.log(numbers)


const storeContainer = document.querySelector('#store');
const carritoContenedor = document.querySelector('#carrito-contenedor')

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

const btnVaciarCarrito = document.querySelector('#vaciarCarrito')

const carrito = JSON.parse(localStorage.getItem('carrito')) || []

let stock = []

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9fde5139c9msh8b0ab8e00fec08cp1cf57ejsn99245c962dc6',
        'X-RapidAPI-Host': 'amazon-products1.p.rapidapi.com'
    }
};
const url = 'https://amazon-products1.p.rapidapi.com/summaries?country=MX&asins=B078HF7LBH%2CB07T9RP449%2CB07XRNGVD5%2CB07ZQJLSKJ%2CB01NBP3J7Y%2CB098FGBZ29%2CB07ZN1QM47%2CB07B163FP6%2CB09PHH2PY2%2CB08VNP7C19%2CB089NLLCC1%2C';
fetch(url)
    .then((response) => response.json())
    .then((data) => {
stock = data

stock.forEach((item)=>{
    const div = document.createElement('div')
div.classList.add('card')

div.innerHTML = `
                <div class="d-flex justify-content-between p-3">
                <p class="lead mb-0">Oferta del Dia</p>
                </div>
                <img src="${item.image}"
                class="card-img-top" alt="Laptop" />
                <div class="card-body">
                <div class="d-flex justify-content-between">
                    <p class="small"><a href="#!" class="text-muted">Indumentaria de entrenamiento</a></p>
                    <p class="small text-danger"><s>${item.prices.currency}${item.prices.current_price} </s></p>
                </div>
                <div class="d-flex justify-content-between mb-3">
                    <h5 class="mb-0">${item.title}
                    <h5 class="text-dark mb-0">$${item.prices.previous_price}</h5>
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
                </div><a href="#!" class="btn btn-primary" onclick='agregarItemAlCarrito(${item.asin})'>Agregar al carrito  <i class="fas fa-shopping-cart"></i></a>
                </div>
                </div>
                `

            storeContainer.append(div)
        })
    })
    .catch(err => console.error(err));

// ARMANDO CONDICIONAL PARA PAGINA WEB DEL GIMNASIO // CONDICIONAL IF

let person = prompt('Ingresa su nombre y apellido')

alert('Bienvenido ' + person)

let training = prompt('Ingrese el tipo de entrenamiento que ud. realiza(libre/fijo/programacion')

if(training === 'libre'){
    alert('Bienvenido a las clases libres de IronCross ' + person+'.')
}
else if(training === 'fijo'){
    alert('Bienvenido a las clases guiadas semanales de IronCross ' + person+'.')
}
else if(training === 'programacion'){
    alert('Bienvenido a las clases de entrenamiento hiit y musculacion de IronCross ' + person+'.')
}
else{
    alert('No es una clase válida. Por favor ingrese un tipo de clase de entrenamiento válido')
}




//Mi deuda del gimnasio


let mesActual = 6
let mesesPagados= Number(prompt('indique la cantidad de meses pagados en lo que va del año'))
let mesesDeudores  = mesActual - mesesPagados


while(mesesDeudores === 0){
 mesesDeudores+=0
 break
alert('estas al dia con tu cuota')
 

}if (mesesDeudores > 0){
    alert('estas debiendo '+ mesesDeudores + ' cuota/s')

}else{
    
    alert('llevas adelantadas ' + mesesDeudores +' cuota/s') 
    }

// PRACTICAS VARIAS


// let numeroos = [9, 45, 6, 20, 71, 13, 32, 87]
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

// let numbers = [14,6,98,52,64,31,78,99,5,162,32,71,2,0]
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


let numbers = [14,6,98,52,64,31,78,99,5,162,32,71,2,0]

for(let i = 0; i < numbers.length; i++){
    console.log(numbers [i])
}
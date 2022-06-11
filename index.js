
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




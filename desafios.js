// // ejercicio 1
// let numeros= "";
// for (i=0; i<=10; i++){
//     numeros = numeros + i;
// }
 
// const unoAlDiez = document.querySelector("#ejercicio1")
// unoAlDiez.value = numeros;

// // ejercicio 2
// let numerosHastaCien= "";
// for (i=1; i<=100;i+=2){
//     numerosHastaCien += i;
// }
// const imparesHastaCien = document.querySelector("#ejercicio2")
// imparesHastaCien.value = numerosHastaCien

// // ejercicio 3

// for (i= 0; i<=10; i++){
//     const resultado = 7 * i;
//     console.log (`7 * ${i} = ${resultado}`);
// }

// // ejercicio 4
//  for (i=0; i<=9; i++){
//     console.log (`tabla de multiplicacion del ${i}`);
//     for (j = 1; j<= 10; j++){
//         resultado = i*j
//         console.log(resultado)
//     } 
//  }   
// // Ejercicio 5
//  const listaNumeros = [1,2,3,4,5,6,7,8,9,10];  

//  let totalNumeros= 0; 
//  for (i=0; i<listaNumeros.length; i++){
    
//     totalNumeros = totalNumeros + listaNumeros[i]
    
// }
// console.log (totalNumeros)


// // Ejercicio 6 
// let totalMultiplicacion= 10;
// for (i=9;i>1; i--){
// totalMultiplicacion = totalMultiplicacion * i
// }
// console.log(totalMultiplicacion)

// // Ejercicio 7
// totalSuma = 0;
// for (i=11; i<30;i+=2){
//     totalSuma += i
//     console.log(totalSuma)
// }
// // ejercicio 8
// const Celsius = 30
// function convertirCelsiusAFahrenheit (Celsius){
//          var fahrenheit= (Celsius * 1.8) + 32
//          return fahrenheit}

// console.log(convertirCelsiusAFahrenheit(Celsius))
// ejercicio 9
// // Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
// let fahrenheit = 90;
// function convertirFahrenheitACelsius (fahrenheit){
//     let Celsius = (fahrenheit - 32) / 1.8
//     return Celsius
//  };
//  console.log(convertirFahrenheitACelsius(fahrenheit));
  
// // Desafío de programación #10: Calcula la suma de todos los números en un array de números

// const array = [13, 15, 23, 34, 45, 56]

// let acumulador = 0
// for (i=0; i<array.length; i++){
//     acumulador = acumulador + array[i]
// }
// console.log (acumulador)

// // Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
// const array = [13, 15, 23, 34, 45, 56]
// cantidadDeNumeros = array.length
// sumaDeNumeros = 0;
// for(let i = 0; i < array.length; i++){
//     sumaDeNumeros = sumaDeNumeros + array[i]
// }

// function promedio(sumaDeNumeros,cantidadDeNumeros) {
//    let promedio = sumaDeNumeros / cantidadDeNumeros
//    return promedio
// }
// console.log(promedio(sumaDeNumeros,cantidadDeNumeros))

// Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

// const array = [12 ,13,-14,35,-36,-54,-78,99];

// function filtraNumerosPositivos(array){
//          const arrayDePositivos = [];
//         for(let i =0;i < array.length; i++){
//            if (array[i] > 0){
//             arrayDePositivos[arrayDePositivos.length] = array[i]
//            } 
//         }
//         return arrayDePositivos;
// }
// console.log(filtraNumerosPositivos(array))

// Desafío de programación #13: Find the maximum number in an array of numbers

const array = [12 ,13,-14,35,-36,-54,-78,99,88];

function DevuelveNumeroMayor(array){
   let numeroMayor = 0;
   for(let i = 0;i<array.length;i++){
     if(numeroMayor < array[i])
     numeroMayor = array[i]
   } 
   return numeroMayor
}
console.log(DevuelveNumeroMayor(array))

edad >= 18 ? console.log("hola") : console.log("chau");

var edad = 144

// fibonacci 
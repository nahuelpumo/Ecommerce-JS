// let nombre = "Nahuel"; //string
//  let edad = "20"; // number (numeros enteros)
//  let casado = "false" //boolean (true o false)

// let variable1 = null;
// let variable2 = undefined;

// const  DNI = 11222333;



//  let suma = 10 + 5;

//  console.log(suma);

// let oracion = "Soy" + " Nahuel";

// console.log(oracion);


// let resta = 500 - 254;

// console.log(resta);

// //FUNCIONES NATIVAS

// //PROMPT

let nombreApellido = prompt("Introduzca su nombre y apellido:")

console.log(nombreApellido);


//ALERT

alert("Hola " + nombreApellido + ". Presioná la tecla Enter.")




// //CONFIRM

// let resultado = confirm("Te gusta el agua?")


// console.log(resultado);




// // MATERIAL ASINCRONICO CLASE 2

// let suma = 7 + 1;

// if(suma>10) {
   
//     console.log("La suma es mayor que 10");
// } else {console.log("la suma es menor o igual que 10")}

// console.log(suma)

//  for (let i = 0; i < 5; i++) {
//     console.log(i);
//    }
 

//   let nombre2 = "Manuelito"; //String
//   let edad2 = "20"; // number
//   let casado2 = "true"; //boolean

//   console.log(nombre2)
//   console.log(edad2)
//   console.log(casado2)


//   let calificacion = 95;

//   if(calificacion >= 90) {
//     console.log("Excelente");
//   } else if (calificacion >= 70) {
//     console.log ("Bueno");
//   } else {
//     console.log("Reprobado");
//   }

//   let edad3 = "20";

//   let acceso = (edad3 >=18) && (edad3 <=30);

//   console.log(acceso);

//   let temperatura = "20";

//   let advertencia = (temperatura <0) || (temperatura >=32);
//   console.log(advertencia)


//   //CICLOS Y CONTROL DE FLUJOS

//     for (let u = 0; u <10; u++) {
//       console.log("Número: "+ u)
//     }

//      let z = 0;
//      while (z <5) {
//        console.log('Número: ' + z);
//       ++z
//      }

 
//  let i = 0;
//  do {
//      console.log('Número: ' + i);
//      i++;
//  } while (i < 7);

// const password = "1234";

// let passwordIngresado = prompt("Ingrese su contraseña");

// while(passwordIngresado != password) {
//   passwordIngresado = prompt("Error. Ingrese su contraseña correctamente")

// }


//  for (let i = 0; i <10; i++) {

//    if (i === 5) {
//      break;
//    }
//    console.log(i)
//  }

//  for (let i = 0; i <10; i++) {
//    if (i % 2 === 0) {
//      continue;
//    }
//    console.log(i)
//  }


// //EJEMPLO VALIDACION DE USUARIOS

//  const usuarios = [
//   {nombre: "Nahuel", edad: 20, aceptoTerminos: true},
//    {nombre: "Mariana", edad: 19, aceptoTerminos: true},
//    {nombre: "Romina", edad: 19, aceptoTerminos: false},   {nombre: "Pepe", edad: 17, aceptoTerminos: true}
//  ]

//  for(let i = 0; i < usuarios.length; i++) {
//    if(usuarios [i].edad >=18 && usuarios[i].aceptoTerminos) {
//      console.log(usuarios[i].nombre);
//  }
//  }

// //FIN EJEMPLO USUARIOS

// let edad = null;
// let nombre = "Carlos";

// if (edad !== null && edad !== undefined) {
//   console.log(`Tienes ${edad} años`);
// } else {
//   if (nombre) {
//     console.log(`Bienvenido, ${nombre}`);
//   } else {
//     console.log("Información incompleta");
//   }
// }


// let valor1 = null;
// let resultadoOR = valor1 || "Valor predeterminado";

// console.log(resultadoOR); 

// //Operador NULLISH COALESCING (??)

// let valor2 = 0;
// let resultadoNullish = valor2 ?? "Valor predeterminado";

// console.log(resultadoNullish); 


// // EJEMPLO DE (??)

// const mensaje = document.getElementById("mensaje");
// const boton = document.getElementById("cambiarDescuento");

// let descuentoInicial = null;

// const descuentoPredeterminado = 10;
// let descuentoActual = descuentoInicial ?? descuentoPredeterminado;
// mensaje.textContent = 'El descuento es del $(descuentoActual)%'

// let descuentoIngresado = prompt("Ingrese el descuento en porcentaje...")
// {

//   descuentoIngresado = Number(descuentoIngresado)


//   descuentoActual = descuentoIngresado ?? descuentoPredeterminado
 
//   mensaje.textContent = 'el descuento es del $(descuentoActual)%'

// }


 //ACTIVIDAD PRACTICA 2.4


// const num = parseInt(prompt("Ingresa un número:"));

// if (num > 0) {
//     for (let i = 0; i < num; i++) {
//         console.log("Hola");

//     }
// } else {
//     alert("Por favor, ingresa un número válido.");
// }
 


//SWITCH:

// let nombre = prompt("Ingrese su nombre").toLowerCase();



// switch (nombre) {
//   case "brian":
//     console.log("Brian, ya te dijimos que no podes entrar");

//   break;

//   case "german":
//     console.log("German, ya te dijimos que no podes entrar");
//   break;

//   default:
//     console.log(nombre);
//     break;
// }



//CICLOS EN CLASE:

//FOR EN CLASE:

// i++ => i = i+1

// let contador = 1;
// for (let i = 0; i < 10; i++) {
//   console.log('hay ' + contador + ' alumnos');
// contador++
// }

//WHILE EN CLASE:

//let condicion = true;

// while (condicion) {
 
//   let nombre = prompt('Ingrese su nombre:').toLowerCase();

//   if (nombre == 'jeremias') {
//     console.log('Usted no puede ingresar');

//   }else {
//     console.log('Bienvenido/a: ' + nombre);
//     break;
//   }

// }

// let contador = 0;

// while (condicion) {

// if(contador == 5) {
//   continue;
// }

// if(contador == 10) {
//   break;
// }
// console.log(contador);
// contador++
// }

//DO WHILE:

// do {

//   console.log(edad);

// }while (edad ==18);



//EJEMPLO EN VIVO
// let totalCarrito = 0;
// let opcionIngresada = prompt('Bienvenido a nuestra tienda CODERSHOP, ingrese alguna de las opciones siguientes: 1- Ver productos 2- Ver el total del carrito ESC- Salir de la tienda')

//   if (opcionIngresada == 1) {
//     let continuar = true;
//     while(continuar) {
//       let producto = prompt('Ingrese una opción para agregar al carrito el producto: 1- Comprar remera 2- Comprar pantalón 3- Comprar zapatos 4- Salir de Agregar productos');

//         if(producto == 1) {
//           totalCarrito += 5000
//         }else if (producto == 2){
//           totalCarrito += 10000
//         }else if(producto == 3) {
//           totalCarrito += 15000
//         }else if (producto == 4) {
//           continuar = !confirm ('Estás seguro de que quieres salir?')
//         }else {
//           alert('Has elegido una opción incorrecta. Intenta nuevamente...')
//         }
//     }
//   }


// FUNCIONES MATERIAL ASINCRONICO:

/*function saludar () {
 console.log("¡Hola Mundo!");
}

saludar (); /*muestra ¡Hola Mundo!*/


/*function sumar (a , b) {
 return a + b;
}

let resultado = sumar(5 , 3);

console.log(resultado);*/

/*function saludar(nombre) {
 console.log(`Hola, ${nombre}`);
}

saludar("Ana");
saludar("Juan");
saludar("María");


function calcularAreaTriangulo(base, altura) {
 return (base * altura) / 2;
}

console.log(`El área del triángulo es ${calcularAreaTriangulo(10, 5)}`);*/



/*function calcularPrecioFinal(precio, descuento) {
 return precio - (precio * descuento / 100);
}

// Reutilizando la función en diferentes contextos
let precioCamisa = calcularPrecioFinal(50, 10);
let precioPantalon = calcularPrecioFinal(80, 15);

console.log(`Precio final de la camisa: ${precioCamisa}`);
console.log(`Precio final del pantalón: ${precioPantalon}`);*/



/*function calcularDescuento(precio, porcentajeDescuento) {
 return precio - (precio * porcentajeDescuento / 100);
}

// Función para calcular el precio final incluyendo impuestos
function calcularPrecioFinal(precio, descuento, impuesto) {
 let precioConDescuento = calcularDescuento(precio, descuento);
 return precioConDescuento + (precioConDescuento * impuesto / 100);
}

// Invocación
let total = calcularPrecioFinal(100, 10, 21);
console.log(total); // Muestra: 108.9*/


//FUNCIONES CLASE EN VIVO:

//parametros:


/*function sumar(number1,number2) {
console.log(number1 + number2);
}

sumar(10,5);*/


//CALCULADORA EJEMPLO

/*function calculadora(numero1, numero2, operacion) {

 switch (operacion) {
   case "+":
     alert(numero1 + numero2);
     break;

       case "-":
     alert(numero1 - numero2);
     break;


       case "/":
     alert(numero1 / numero2);
     break;


       case "*":
     alert(numero1 * numero2);
     break;

     default:
       alert("Esa operación no existe!")
       break;
 }
}

let numero1Seleccionado = parseInt(prompt("Elegí el primer número"));
let numero2Seleccionado = parseInt(prompt("Elegí el segundo número"));
let operacionSeleccionada = prompt("Elegí la operación");

calculadora(numero1Seleccionado, numero2Seleccionado, operacionSeleccionada);*/



//EJEMPLO EN VIVO FUNCIONES + FOR:

/*function turnos(cantTurnos){
for (let i = 1; i <= cantTurnos; i++){
 console.log('Hay ' + i + ' turnos');
}
}

turnos(5);*/


//FUNCIONES ANONIMAS Y FUNCIONES FLECHA:


/*(function () {
 console.log('Hola Mundo');
})();

const sumar = (num1,num2)=>num1 + num2;

let resultado = sumar(1, 2);

console.log(resultado);*/



//EJEMPLO EN VIVO FINAL productos con iva:


const IVA = 1.21;

const calcularIva = (precio) => {
 return precio * IVA;
};

let condition = true;
let totalCarrito = 0;

do {

 let eleccion = prompt (`Bienvenido a Alto Voltaje, selecciona un producto:
   1- Remera West Coast Choppers 
   2- Remera Bullet GT-R R34
   3- Remera Mazda RX7
   4- Ver total (con IVA)
   ESC- Salir de la tienda
   `);

   
   switch (eleccion) {
     case "1":
       totalCarrito += calcularIva(15000);
       break;

       case "2":
         totalCarrito += calcularIva(18000);
       break;

       case "3":
         totalCarrito += calcularIva(16000);
       break;

       case "4":
       alert(`El total del carrito es $${totalCarrito}`);
       break;

       case "ESC":
         alert("¡Muchas gracias por pasar por nuestra tienda!")
         condition = false
         break;
         default:
           alert("Esa opción no está disponible")
           break;
   }

} while (condition)




//EJEMPLO DEL TUTOR

/*const opcionesMenu = () => {
 let opcionUsuario;
 do {
 opcionUsuario = parseInt(prompt(`¿Qué desea hacer con los nombres? \n
     1 - Ordenar ascendentemente. \n
     2 - Ordenar descendentemente. \n
     3 - Realizar un sorteo. \n
     4 - Agregar otro nombre. \n\n
     0 - Salir.`));
 switch (opcionUsuario) {
     case 0:
         alert('¡Gracias por utilizar el programa!');
         break;
     case 1:
         ordenarAscendente();
         break;
     case 2:
         ordenarDescendente();
         break;
     case 3:
         sorteo();
         break;
     case 4:
         agregarNombres();
         break;
     default:
         alert(`Opción inválida, ingrese un número correcto.`);
         opcionesMenu();
         break;
  } 
 } while (opcionUsuario !==0)*/

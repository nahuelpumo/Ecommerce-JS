//PROMPS + ALERT INICIO
 let nombreApellido = prompt("Introduzca su nombre y apellido:")

 console.log(nombreApellido);


 alert("Hola " + nombreApellido + ". Presioná la tecla Enter.")




//CONFIRM

let resultado = confirm("¿Es la primera vez que ingresás a nuestra tienda?")


console.log(resultado);



// CARRITO


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


//ITERACIÓN

const productos = [
  { nombre: "Remera WC", precio: 15000 , stock: true},
  { nombre: "Remera Bullet", precio: 18000 , stock: true},
  { nombre: "Remera RX7", precio: 16000 , stock: true }
];

for (let i = 0; i < productos.length; i++) {
  const producto = productos[i];
  console.log(`${producto.nombre} - $${producto.precio} ${producto.stock}`);
}



//ITERACIÓN
const productos = [
  { nombre: "Remera WC", precio: 15000, stock: true },
  { nombre: "Remera Bullet", precio: 18000, stock: true },
  { nombre: "Remera RX7", precio: 16000, stock: true }
];

for (let i = 0; i < productos.length; i++) {
  const producto = productos[i];
  console.log(`${producto.nombre} - $${producto.precio} ${producto.stock}`);
}

// FUNCION CONSTRUCTORA PRODUCTOSS
function Producto(id, nombre, precio) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
}

// RECUPERAR CARITO LOCALSTORAGE
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función AGREGAR CARRITO
function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarLocalStorage();
  mostrarCarrito();
}

// FUNCION ELIMIENAR CARRITO
function eliminarDelCarrito(id) {
  carrito = carrito.filter(producto => producto.id !== id);
  actualizarLocalStorage();
  mostrarCarrito();
}

// CALCULAR CARRITO
function calcularTotal() {
  return carrito.reduce((total, producto) => total + producto.precio, 0);
}

// CARRITO LOCALSTORAGE
function actualizarLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// PRODUCTOS DOM
function mostrarCarrito() {
  const carritoContainer = document.getElementById("carrito-lista");
  if (!carritoContainer) {
      console.error("El contenedor del carrito no existe.");
      return;
  }

  carritoContainer.innerHTML = "";
  carrito.forEach(producto => {
      const item = document.createElement("div");
      item.textContent = `${producto.nombre} - $${producto.precio}`;
      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.onclick = () => eliminarDelCarrito(producto.id);
      item.appendChild(btnEliminar);
      carritoContainer.appendChild(item);
  });

  const totalElemento = document.getElementById("total");
  if (totalElemento) {
      totalElemento.textContent = `Total: $${calcularTotal()}`;
  } else {
      console.error("El elemento con id='total' no existe en el DOM.");
  }
}

// EVENTO BOTON AGREGARCARRITO
document.querySelectorAll(".producto button").forEach(boton => {
    boton.addEventListener("click", (event) => {
        const productoDiv = event.target.closest(".producto");
        const id = productoDiv.getAttribute("data-id");
        const nombre = productoDiv.getAttribute("data-nombre");
        const precio = parseFloat(productoDiv.getAttribute("data-precio"));
        const nuevoProducto = new Producto(id, nombre, precio);
        agregarAlCarrito(nuevoProducto);
    });
});

// INIT DOM CARRITO
document.addEventListener("DOMContentLoaded", mostrarCarrito);





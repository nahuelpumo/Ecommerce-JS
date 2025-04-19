const productos = [
  { id: 1, nombre: "Remera WC Choppers", precio: 15000 },
  { id: 2, nombre: "Remera Bullet GTR", precio: 18000 },
  { id: 3, nombre: "Remera Mazda RX7", precio: 16000 },
  { id: 4, nombre: "Remera Supra MK4", precio: 17500 },
  { id: 5, nombre: "Remera Skyline R34", precio: 18500 },
  { id: 6, nombre: "Remera Mustang 67", precio: 19000 },
  { id: 7, nombre: "Remera Corvette C8", precio: 19500 },
  { id: 8, nombre: "Remera Lancer Evo", precio: 17000 },
  { id: 9, nombre: "Remera Camaro SS", precio: 18500 },
  { id: 10, nombre: "Remera Civic Type-R", precio: 16000 }
];

function Producto(id, nombre, precio, cantidad = 1) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
}

let carrito = [];

try {
  const guardado = JSON.parse(localStorage.getItem("carrito"));
  if (Array.isArray(guardado)) carrito = guardado;
} catch (e) {
  localStorage.removeItem("carrito");
}

function agregarAlCarrito(nuevoProd) {
  const prodExistente = carrito.find(p => p.id === nuevoProd.id);
  if (prodExistente) {
    prodExistente.cantidad += 1;
  } else {
    carrito.push(nuevoProd);
  }
  actualizarLocalStorage();
  mostrarCarrito();

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: `${nuevoProd.nombre} agregado al carrito`,
    showConfirmButton: false,
    timer: 2000
  });
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(producto => producto.id !== id);
  actualizarLocalStorage();
  mostrarCarrito();
}

function calcularTotal() {
  return carrito.reduce((total, p) => total + p.precio * p.cantidad, 0);
}

function actualizarLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarCarrito() {
  const container = document.getElementById("carrito-lista");
  container.innerHTML = "";

  carrito.forEach(producto => {
    const item = document.createElement("div");
    item.classList.add("mb-2");
    item.innerHTML = `
      <strong>${producto.nombre}</strong> x${producto.cantidad} - $${producto.precio * producto.cantidad}
      <button class="btn btn-sm btn-danger ms-2">Eliminar</button>
    `;
    item.querySelector("button").onclick = () => eliminarDelCarrito(producto.id);
    container.appendChild(item);
  });

  document.getElementById("total").textContent = `Total: $${calcularTotal()}`;
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();

  document.querySelectorAll(".btn-agregar").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const div = e.target.closest(".producto");
      const id = parseInt(div.getAttribute("data-id"));
      const nombre = div.getAttribute("data-nombre");
      const precio = parseFloat(div.getAttribute("data-precio"));
  
      if (!id || !nombre || !precio || isNaN(id) || isNaN(precio)) return;
  
      agregarAlCarrito(new Producto(id, nombre, precio));
    });
  });
  

  const finalizarBtn = document.getElementById("finalizarCompra");
  finalizarBtn.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire("El carrito está vacío", "", "error");
      return;
    }

    const resumen = carrito.map(p => `${p.nombre} x${p.cantidad} - $${p.precio * p.cantidad}`).join("<br>");
    const total = calcularTotal();

    Swal.fire({
      title: "Resumen de Compra",
      html: `${resumen}<br><br><strong>Total: $${total}</strong>`,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
    }).then(result => {
      if (result.isConfirmed) {
        carrito = [];
        actualizarLocalStorage();
        mostrarCarrito();
        Swal.fire("Compra realizada", "Gracias por tu pedido", "success");
      }
    });
  });
});

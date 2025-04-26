const productos = [
  {
    id: 1,
    ciudad: "Barranquilla",
    nombre: "Macarol",
    categoria: "Apartamento",
    precio_actual: 321100000,
    precio_anterior: 435141509,
    area: "80m²",
    habitaciones: 3,
    baños: 2,
    parqueaderos: 1,
    imagen:
      "https://img10.naventcdn.com/avisos/111/01/45/53/71/27/360x266/1506588304.jpg?rapc=bXZhX2ltYWdl?isFirstImage=true",
  },
  {
    id: 2,
    ciudad: "Bogotá",
    nombre: "Pinar de la Fontana",
    categoria: "Casa",
    precio_actual: 255000000,
    precio_anterior: 315000000,
    area: "58m²",
    habitaciones: 2,
    baños: 2,
    parqueaderos: 0,
    imagen:
      "https://img10.naventcdn.com/avisos/111/01/45/15/61/48/360x266/1497975678.jpg?rapc=bXZhX2ltYWdl?isFirstImage=true",
  },
  {
    id: 3,
    ciudad: "Jamundí",
    nombre: "Tangara",
    categoria: "Apartamento",
    precio_actual: 350000000,
    precio_anterior: 400000000,
    area: "100m²",
    habitaciones: 2,
    baños: 2,
    parqueaderos: 1,
    imagen:
      "https://img10.naventcdn.com/avisos/111/01/44/00/55/00/360x266/1472914528.jpg?rapc=bXZhX2ltYWdl?isFirstImage=true",
  },
  {
    id: 4,
    ciudad: "Rionegro",
    nombre: "Alejandría",
    categoria: "Lote",
    precio_actual: 190000000,
    precio_anterior: 240000000,
    area: "54m²",
    habitaciones: 2,
    baños: 2,
    parqueaderos: 1,
    imagen:
      "https://img10.naventcdn.com/avisos/111/01/43/84/18/58/360x266/1468865247.jpg?rapc=bXZhX2ltYWdl?isFirstImage=true",
  },
];

function ProductList() {
  const productContainer = document.getElementById("productos");
  productContainer.innerHTML = productos
    .map(
      (producto) => `
        <div class="producto">
          <img src="${producto.imagen}" alt="${producto.nombre}" />
          <h3>${producto.nombre}</h3>
          <p>${producto.ciudad}</p>
          <p>${producto.area} - ${producto.habitaciones} habitaciones - ${
        producto.baños
      } baños - ${producto.parqueaderos} parqueaderos</p>
          <p><span class="precio-anterior">${producto.precio_anterior.toLocaleString()}</span> <strong>${producto.precio_actual.toLocaleString()}</strong></p>
          <button onclick="window.location.href='detalle${
            producto.id
          }.html'"> Ver detalles </button>
        </div>
        </div>
      `
    )
    .join("");
}

ProductList();

function mostrarProductos(productos) {
  const container = document.getElementById("productos");
  container.innerHTML = "";
  productos.forEach((producto) => {
    const productoElement = document.createElement("div");
    productoElement.classList.add("producto");
    productoElement.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p>Categoria: ${producto.categoria}</p>
        <p>Precio: $${producto.precio_actual.toLocaleString()}</p>
        <button onclick="verDetalles(${producto.id})">Ver Detalles</button>
      `;
    container.appendChild(productoElement);
  });
}

function filtrarProductos() {
  const categoria = document.getElementById("filtrar").value;
  let productosFiltrados = productos;

  if (categoria !== "Todos") {
    productosFiltrados = productos.filter(
      (producto) => producto.categoria === categoria
    );
  }

  ordenarProductos(productosFiltrados);
}

function ordenarProductos(productosFiltrados) {
  const orden = document.getElementById("ordenar").value;
  let productosOrdenados;

  if (orden === "Menor") {
    productosOrdenados = productosFiltrados.sort(
      (a, b) => a.precio_actual - b.precio_actual
    );
  } else if (orden === "Mayor") {
    productosOrdenados = productosFiltrados.sort(
      (a, b) => b.precio_actual - a.precio_actual
    );
  }

  mostrarProductos(productosOrdenados);
}

function verDetalles(id) {
  alert(`Mostrar detalles del producto con ID: ${id}`);
}

document.getElementById("filtrar").addEventListener("change", filtrarProductos);
document.getElementById("ordenar").addEventListener("change", filtrarProductos);

mostrarProductos(productos);

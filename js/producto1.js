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

/* Para seleccionar la id */
const productoSeleccionado = productos.find((producto) => producto.id === 1);

/* Render de detalles */
function ProductoDetalles() {
  return (
    <div className="producto-detalle">
      <img
        src={productoSeleccionado.imagen}
        alt={productoSeleccionado.nombre}
      />
      <h3>{productoSeleccionado.nombre}</h3>
      <p>{productoSeleccionado.ciudad}</p>
      <p>
        {productoSeleccionado.area} - {productoSeleccionado.habitaciones}{" "}
        habitaciones - {productoSeleccionado.baños} baños -{" "}
        {productoSeleccionado.parqueaderos} parqueaderos
      </p>
      <p>
        <span className="precio-anterior">
          {productoSeleccionado.precio_anterior.toLocaleString()}
        </span>{" "}
        <strong>{productoSeleccionado.precio_actual.toLocaleString()}</strong>
      </p>
      <button>Ver Detalles</button>
    </div>
  );
}

ReactDOM.render(<ProductoDetalles />, document.getElementById("producto"));

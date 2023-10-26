// Filtra los productos de hombre y mujer
const ropaMen = products.filter(
  (product) => product.category === "men's clothing"
);
const ropaWomen = products.filter(
  (product) => product.category === "women's clothing"
);

// Crea un conjunto de productos ordenado por título
const conjuntoOrdenado = [...ropaMen, ...ropaWomen].sort((a, b) =>
  a.title.localeCompare(b.title)
);

// Obtiene un arreglo de nombres de productos
const productosNombre = conjuntoOrdenado.map((producto) => producto.title);

// Obtiene las categorías
const ambasCategorias = [];
conjuntoOrdenado.forEach((producto) => {
  if (!ambasCategorias.includes(producto.category)) {
    ambasCategorias.push(producto.category);
  }
});

// Crea una lista ordenada de nombres de productos
function organizarProductos(array) {
  return array.map((nombre, index) => `${index + 1}. ${nombre}`).join("\n");
}

// Muestra un mensaje de bienvenida
alert("¡Hola!, Bienvenido a nuestro ecommerce.");

// Muestra las categorías disponibles
alert(
  `Las categorías de los productos disponibles son: ${ambasCategorias.join(
    " y "
  )}`
);

// Muestra los productos disponibles
alert(
  `Los productos disponibles son: \n${organizarProductos(productosNombre)}`
);

// Pide al usuario que elija un producto
let productoElegido;
let productoSeleccionado;

do {
  productoElegido = prompt(
    "Por favor, ingrese el número del producto que desea comprar: "
  );
  productoElegido = parseInt(productoElegido);

  if (
    !isNaN(productoElegido) &&
    productoElegido >= 1 &&
    productoElegido <= productosNombre.length
  ) {
    productoSeleccionado = conjuntoOrdenado[productoElegido - 1];
  } else {
    alert("Por favor, ingrese un número de producto válido");
  }
} while (!productoSeleccionado);

// Muestra información del producto seleccionado y pide confirmación
const confirmacion = confirm(
  `Nombre: ${productoSeleccionado.title}\nDescripción: ${productoSeleccionado.description} \nPrecio: ${productoSeleccionado.price}\n\n¿Desea completar la compra?`
);

if (confirmacion) {
  // Calcula la fecha de entrega sumando 3 días
  const fechaEntrega = new Date();
  fechaEntrega.setDate(fechaEntrega.getDate() + 3);

  // Formatea la fecha de entrega
  const options = { year: "numeric", month: "long", day: "numeric" };
  const fechaEntregaFormateada = fechaEntrega.toLocaleDateString(
    undefined,
    options
  );

  // Muestra un mensaje de confirmación de compra
  alert(
    `¡Su compra ha sido completada con éxito! Gracias por su compra, ¡esperamos que vuelva! \nFecha de entrega estimada: ${fechaEntregaFormateada}`
  );
} else {
  alert("Usted ha cancelado su compra. ¡Esperamos su regreso!");
}

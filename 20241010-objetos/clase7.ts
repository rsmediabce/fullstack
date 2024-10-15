//Metodos de objetos

//Object.keys()
// Retorna un array con las keys de un objeto
// Uso: Cuando queremos acceder o iterar sobre las keys del objeto
const producto = { nombre: "alienware", precio: 2000000, stock: 2 };
const keys = Object.keys(producto);
console.log(keys);

//Object.values()
// Retorna un array con los valores de las propiedades de un objeto
// uso: Acceder a los valores sin las claves
const values = Object.values(producto);
console.log(values);

//Object.entries()
// Retorna un array de arrays, donde cada sub-array es el par [clave, valor]
// uso: iterar sobre claves y valores al mismo tiempo
const entries = Object.entries(producto);
console.log(entries);

//Destructuring - extrae valores y los asigna a variables
// Tambien podemos cambiarle el nombre a la constante con "clave: nombreNuevo"
const { nombre, precio, stock: cantidad } = producto;
console.log("destructurando objeto", nombre, precio, cantidad);

//Metodos de arrays

const productos = ["Laptop asus", "Teclado cougar", "mouse genius", "ssd 10TB"];

//Destructurar arreglo
//Podemos omitir un indice a partir de dejar espacio vacio entre dos comas
const [laptop, teclado, , ssd] = productos;
console.log("destructurando array", laptop, teclado, ssd);

//forEach()
// Ejecuta una funcion para cada elemento de un array
// No devuelve un nuevo array
// forEach - por cada item
// No modifica el array original
// Genera un bucle en un array, donde procesa cada item
// forEach como parametro tiene un callback
productos.forEach(producto => {
  console.log(producto);
});

//map()
// Retorna un array nuevo, con los resultados de aplicar una funcion a cada item del array original
//No modifica el original
//Para transformar elementos de un array
const precios = [100, 250, 1000, 20, 30, 15];

const descuentos = precios.map(precio => {
  const descuento = precio * 0.2;
  return (precio -= descuento);
});

const descuentos2 = precios.map(precio => (precio -= precio * 0.2));

console.log(descuentos);

const frutas = ["manzana", "pera", "uva", "naranja", "papaya"];
const frutasMayusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasMayusculas);

//filter()
// Retorna un nuevo array, con elementos que cumplen una condicion
// Filtra elementos si cumplen un criterio

const stock = [
  { nombre: "zapatillas nike", precio: 125000 },
  { nombre: "zapatillas adidas", precio: 120000 },
  { nombre: "zapatillas DC", precio: 95000 },
  { nombre: "zapatillas fila", precio: 100000 },
];

const filtradosMenorIgual = stock.filter(item => item.precio <= 100000);
const filtradosMayor = stock.filter(item => !(item.precio <= 100000));
const filtrados = stock.filter(item => item.precio > 1000000);

//Si filter no consigue traer data, retorna array vacio
//El array vacio es truth
//  esto es engañoso porque no trae data pero funciona como true
// haria falta validar por el largo

console.log(filtrados.length > 0 ? filtrados : "estoy vacio");

//find()
// Devuelve es el primer elemento que cumpla con una condicion
// Si no lo encuentra retorna undefined
const found = stock.find(item => item.nombre === "zapatillas nike");

//Includes busca dentro de un string un substring que cumpla con la busqueda
const foundItem1 = stock.find(item => item.nombre.includes("nike"));

//Si le añadimos un segundo parametro, empieza a buscar desde ese indice
const foundItem2 = stock.find(item => item.nombre.includes("nike", 10));

console.log(foundItem1);

//reduce()
// Aplica una funcion a un acumulador
// Acumulador tiene el rol de guardar el resultado de las operaciones - todo un guardador serial
// Uso: Ideal para sumar, concatenar, o realizar calculos acumulativos sobre arrays

const preciosCuidados = [100, 250, 1000, 20, 30, 15];
//El primer argumento es el acumulador
//El segundo argumento es el item de nuestro array
const resultadoAcc = preciosCuidados.reduce(
  (acumulador, precio) => acumulador + precio
);

console.log(resultadoAcc);

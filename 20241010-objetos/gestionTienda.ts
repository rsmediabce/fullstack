// Es un contrato
interface Producto {
  nombre: string;
  precio: number;
  stock: number;
}

interface TiendaPepe {
  productos: Producto[];
  crearProducto: (
    nombreProducto: string,
    precio: number,
    stock: number
  ) => void;
  actualizarPrecio: (nombre: string, precio: number) => void;
  venderProducto: (nombre: string, cantidad: number) => void;
  productosEnOferta: (filtroPrecio: number) => void;
  mostrarInventario: ()=> void;
  valorTotalInventario: ()=> void;
  valorTotalInventario2: ()=> void;
  verProductoMasCaro:()=> void;
}

const tiendaPepe: TiendaPepe = {
  productos: [
    {
      nombre: "Trout Rainbow Whole",
      precio: 20.39,
      stock: 11,
    },
    {
      nombre: "Bread - Roll, Italian",
      precio: 20.61,
      stock: 38,
    },
    {
      nombre: "Bar Special K",
      precio: 86.98,
      stock: 42,
    },
    {
      nombre: "Salt - Celery",
      precio: 48.2,
      stock: 44,
    },
    {
      nombre: "Kirsch - Schloss",
      precio: 50.79,
      stock: 36,
    },
  ],
  //implementacion de las funciones, definimos comportamiento
  crearProducto(nombreProducto, precio, stock) {
    //Pasamos nombre a minusculas y le quitamos los espacios al principio y al final
    const nuevoProducto = {
      nombre: nombreProducto.toLowerCase().trim(),
      precio: precio,
      stock: stock,
    };
    if (nuevoProducto) {
      this.productos.push(nuevoProducto);
      console.log(`Producto ${nombreProducto} añadido`);
    }
  },
  actualizarPrecio(nombre, precio) {
    let productoEncontrado = this.productos.find(
      producto => producto.nombre === nombre.toLowerCase().trim()
    );
    //Si encuentra el producto entonces actualiza precio
    if (productoEncontrado) {
      let precioViejo = productoEncontrado.precio;
      productoEncontrado.precio = precio;
      console.log(
        `Producto ${nombre} el precio era ${precioViejo}, ahora es ${precio}`
      );
    } else {
      console.log(`Producto ${nombre} no encontrado`);
    }
  },
  venderProducto(nombre, cantidad) {
    let productoEncontrado = this.productos.find(
      producto => producto.nombre === nombre.toLowerCase().trim()
    );
    //Si encuentra el producto entonces actualiza precio
    if (productoEncontrado) {
      let stockAntiguo=productoEncontrado.stock;
      if (productoEncontrado.stock-cantidad>=0){
        productoEncontrado.stock=productoEncontrado.stock-cantidad;
        console.log(
          `Producto ${nombre} el nuevo stock anterior era de ${stockAntiguo} ahora es ${productoEncontrado.stock}`
        );
      } else {
        console.log(
          `No existe stock disponible del producto Producto ${nombre}. El stock del mismo es ${stockAntiguo} y usted quiere vender ${cantidad}`
        );
      }   
    } else {
      console.log(`Producto ${nombre} no encontrado`);
    }
  },
  productosEnOferta(filtroPrecio) {
    const filtradosMenorIgual = this.productos.filter(item => item.precio <= filtroPrecio);
    if (filtradosMenorIgual.length>0){
      console.table(filtradosMenorIgual)
    }else {
      console.log("No existen productos de un precio menor o igual a "+filtroPrecio)
    }
  },
  mostrarInventario(){
    this.productos.forEach(producto => {
      const keys = Object.keys(producto);  
      console.log(`${keys[0]}: ${producto.nombre} ${keys[2]}: ${producto.stock}`);
    });
  },
  
  valorTotalInventario(){
    let resultadoAcc=0;
    this.productos.forEach(producto => {
      //console.log(producto.precio);
      resultadoAcc+=producto.precio*producto.stock
    })
    console.log("\nEl valor total del inventario es de:" + resultadoAcc)
  },
  valorTotalInventario2(){
    const valorTotal = this.productos.reduce((acumulador, producto) => {  
      return acumulador + producto.precio * producto.stock;  
    }, 0);  
    console.log("\nEl valor total del inventario es de:" + valorTotal)
  },
  verProductoMasCaro(){
    const productoMasCaro = this.productos.reduce((acumulador, producto) => {  
      return (acumulador.precio > producto.precio) ? acumulador : producto;  
    });  
  
  console.log(`\nEl producto más caro es: ${productoMasCaro.nombre} con un precio de $${productoMasCaro.precio.toFixed(2)}`);  
  },
};

tiendaPepe.crearProducto("roquefort", 20000, 20);

console.log(tiendaPepe.productos);

tiendaPepe.actualizarPrecio("roquefort", 35000);

console.log(tiendaPepe.productos);

tiendaPepe.venderProducto("roquefort", 2);

tiendaPepe.productosEnOferta(19);

tiendaPepe.mostrarInventario();

tiendaPepe.valorTotalInventario();

tiendaPepe.valorTotalInventario2();

tiendaPepe.verProductoMasCaro();

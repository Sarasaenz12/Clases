class Producto {
    constructor(id, nombre, fecha, precioInicial) {
      this.id = id;
      this.nombre = nombre;
      this.fecha = fecha;
      this.precioInicial = precioInicial;
      this.ofertas = [];
    }
  
    registrarOferta(fecha, valorOfrecido) {
      this.ofertas.push({ fecha, valorOfrecido });
    }
  
    verOfertas() {
      console.log(`Ofertas para el producto ${this.nombre}:`);
      this.ofertas.forEach(oferta => {
        console.log(`Fecha: ${oferta.fecha}, Valor ofrecido: ${oferta.valorOfrecido}`);
      });
    }
  
    seleccionarGanador() {
      const ofertasOrdenadas = this.ofertas.sort((a, b) => b.valorOfrecido - a.valorOfrecido);
      const ganador = ofertasOrdenadas[0];
      console.log(`El ganador de la subasta para el producto ${this.nombre} es el que ofreció ${ganador.valorOfrecido} en la fecha ${ganador.fecha}.`);
    }
  }
  
  class Subasta {
    constructor() {
      this.productos = [];
    }
  
    registrarProducto(id, nombre, fecha, precioInicial) {
      const producto = new Producto(id, nombre, fecha, precioInicial);
      this.productos.push(producto);
    }
  
    listarProductos() {
      console.log("Lista de productos en subasta:");
      this.productos.forEach(producto => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio Inicial: ${producto.precioInicial}`);
      });
    }
  
    registrarOferta(idProducto, fecha, valorOfrecido) {
      const producto = this.productos.find(producto => producto.id === idProducto);
      if (!producto) {
        console.log("Producto no encontrado.");
        return;
      }
      producto.registrarOferta(fecha, valorOfrecido);
      console.log(`Oferta registrada para el producto ${producto.nombre}.`);
    }
  
    verOfertasProducto(idProducto) {
      const producto = this.productos.find(producto => producto.id === idProducto);
      if (!producto) {
        console.log("Producto no encontrado.");
        return;
      }
      producto.verOfertas();
    }
  
    seleccionarGanador(idProducto) {
      const producto = this.productos.find(producto => producto.id === idProducto);
      if (!producto) {
        console.log("Producto no encontrado.");
        return;
      }
      producto.seleccionarGanador();
    }
  }
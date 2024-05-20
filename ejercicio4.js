class Banco {
    constructor() {
      this.cajas = [
        { numero: 1, tipo: 'retiro' },
        { numero: 2, tipo: 'retiro' },
        { numero: 3, tipo: 'caja' },
        { numero: 4, tipo: 'caja' },
        { numero: 5, tipo: 'asesoria' }
      ];
      this.clientes = {
        preferencial: [],
        general: [],
        sinCuenta: []
      };
    }
  
    asignarTurno(cliente, tipoAtencion) {
      this.clientes[cliente.tipo].push({ cliente, tipoAtencion });
      this.atenderClientes();
    }
  
    atenderClientes() {
      for (let caja of this.cajas) {
        if (this.clientes.preferencial.length > 0) {
          this.atenderCliente(caja, 'preferencial');
        } else if (this.clientes.general.length > 0) {
          this.atenderCliente(caja, 'general');
        } else if (this.clientes.sinCuenta.length > 0) {
          this.atenderCliente(caja, 'sinCuenta');
        }
      }
    }
  
    atenderCliente(caja, tipoCliente) {
      const cliente = this.clientes[tipoCliente].shift();
      if (cliente.tipoAtencion === 'retiro' && caja.tipo === 'retiro') {
        console.log(`Atendiendo cliente ${cliente.cliente.nombre} (${tipoCliente}) en caja ${caja.numero} para retiro.`);
      } else if (cliente.tipoAtencion === 'asesoria' && caja.tipo === 'asesoria') {
        console.log(`Atendiendo cliente ${cliente.cliente.nombre} (${tipoCliente}) en caja ${caja.numero} para asesoría.`);
      } else if (cliente.tipoAtencion === 'deposito' && caja.tipo === 'caja') {
        console.log(`Atendiendo cliente ${cliente.cliente.nombre} (${tipoCliente}) en caja ${caja.numero} para depósito.`);
      } else {
        console.log(`Caja ${caja.numero} no es adecuada para atender al cliente ${cliente.cliente.nombre}.`);
        this.clientes[tipoCliente].push(cliente); 
      }
    }
  }
  
  class Cliente {
    constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
    }
  }
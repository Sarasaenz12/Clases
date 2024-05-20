class Cajero {
    constructor(banco) {
      this.banco = banco;
      this.clienteActual = null;
      this.encendido = true;
    }
  
    cambiarEstado(estado) {
      this.encendido = estado;
    }
  
    iniciarTransaccion(cliente) {
      if (!this.encendido) {
        console.log("El cajero automático está apagado. No se pueden realizar transacciones.");
        return;
      }
  
      this.clienteActual = cliente;
      this.validarPin();
    }
  
    validarPin() {
      let intentos = 0;
      while (intentos < 3) {
        const pin = prompt("Ingrese su PIN de 4 dígitos:");
  
        if (this.banco.validarPin(this.clienteActual.documento, pin)) {
          this.mostrarMenu();
          return;
        } else {
          intentos++;
          console.log("PIN incorrecto. Por favor, inténtelo nuevamente.");
        }
      }
  
      console.log("Ha excedido el número máximo de intentos. Saliendo del cajero automático.");
      this.clienteActual = null;
    }
  

    mostrarMenu() {
      let opcion;
      do {
        opcion = prompt("Seleccione una opción:\n1. Retiro de efectivo\n2. Depósito\n3. Transferencia\n4. Consulta de saldo\n5. Salir");
  
        switch (opcion) {
          case "1":
            this.realizarRetiro();
            break;
          case "2":
            this.realizarDeposito();
            break;
          case "3":
            this.realizarTransferencia();
            break;
          case "4":
            this.consultarSaldo();
            break;
          case "5":
            console.log("Saliendo del cajero automático...");
            break;
          default:
            console.log("Opción inválida. Por favor, seleccione una opción válida.");
        }
      } while (opcion !== "5");
    }
  
    realizarRetiro() {
    }
  
    realizarDeposito() {
    }
  
    realizarTransferencia() {
    }
  
    consultarSaldo() {
    }
  }
  
  class Banco {
    constructor() {
    }
  
    validarPin(documento, pin) {
    }
  }
  
  class Cliente {
    constructor(documento) {
      this.documento = documento;
    }
  }
class Hotel {
    constructor() {
      this.habitaciones = {
        individual: { disponibles: 3, ocupadas: 0 },
        doble: { disponibles: 3, ocupadas: 0 },
        familiar: { disponibles: 3, ocupadas: 0 }
      };
      this.reservas = [];
    }

    reservarHabitacion(tipo, fumador, nombre, pais, personas, periodo, mascota) {
      if (this.habitaciones[tipo].disponibles === 0) {
        console.log(`Lo siento, no hay habitaciones ${tipo} disponibles.`);
        return;
      }
  
      if (personas > this.obtenerLimitePersonas(tipo)) {
        console.log(`Número de personas excede el límite para la habitación ${tipo}.`);
        return;
      }
  
      if (tipo === 'familiar' && !mascota) {
        console.log("Las habitaciones familiares solo se aceptan con mascotas.");
        return;
      }
  
      this.habitaciones[tipo].disponibles--;
      this.habitaciones[tipo].ocupadas++;
  
      this.reservas.push({
        tipo: tipo,
        fumador: fumador,
        nombre: nombre,
        pais: pais,
        personas: personas,
        periodo: periodo,
        mascota: mascota
      });
  
      console.log(`Reserva realizada: ${tipo}, ${fumador ? 'fumador' : 'no fumador'}, ${nombre}, ${pais}, ${personas} personas, ${periodo}, ${mascota ? 'con mascota' : 'sin mascota'}.`);
    }
  
    obtenerLimitePersonas(tipo) {
      switch (tipo) {
        case 'individual':
          return 2;
        case 'doble':
          return 4;
        case 'familiar':
          return 6;
      }
    }
  
    obtenerEstadisticas() {
      const totalOcupadas = Object.values(this.habitaciones).reduce((total, habitacion) => total + habitacion.ocupadas, 0);
      const totalMascotas = this.reservas.filter(reserva => reserva.mascota).length;
  
      console.log(`Total de habitaciones ocupadas: ${totalOcupadas}`);
      console.log(`Total de mascotas: ${totalMascotas}`);
    }
  }
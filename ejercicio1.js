class EstadisticaAtencionDeUsuario {
    constructor() {
      this.usuariosAtendidos = 0;
      this.atendidosPorDia = {
        terminal: { estudiante: 0, docente: 0 },
        oficina: { estudiante: 0, docente: 0 }
      };
      this.trasferencias = 0;
    }
  
    registrarAtencion(modulo, tipoUsuario) {
      this.usuariosAtendidos++;
      this.atendidosPorDia[modulo][tipoUsuario]++;
    }
  
    registrarTransferencia() {
      this.trasferencias++;
    }
  
    obtenerEstadisticas() {
      return {
        usuariosAtendidos: this.usuariosAtendidos,
        atendidosPorDia: this.atendidosPorDia,
        trasferencias: this.trasferencias
      };
    }
  }
  
import { Empleado } from "./empleado";
import { Equipo } from "./equipo";
import { Usuarios } from "./usuarios";

export class Renta{
  ID?: number;
  NUMERO_PRESTAMO: number;
  ID_EMPLEADO: Empleado;
  ID_EQUIPO: Equipo;
  ID_USUARIO: Usuarios;
  FECHA_PRESTAMO: Date
  FECHA_DEVOLUCION: Date
  COMENTARIO: string;
  ESTADO: boolean;

  constructor(NUMERO_PRESTAMO: number, ID_EMPLEADO: Empleado, ID_EQUIPO: Equipo, ID_USUARIO: Usuarios, FECHA_PRESTAMO: Date, FECHA_DEVOLUCION: Date, COMENTARIO: string, ESTADO: boolean){
    this.NUMERO_PRESTAMO = NUMERO_PRESTAMO;
    this.ID_EMPLEADO = ID_EMPLEADO;
    this.ID_EQUIPO = ID_EQUIPO;
    this.ID_USUARIO = ID_USUARIO;
    this.FECHA_PRESTAMO = FECHA_PRESTAMO;
    this.FECHA_DEVOLUCION = FECHA_DEVOLUCION;
    this.COMENTARIO = COMENTARIO;
    this.ESTADO = ESTADO;
  }
}

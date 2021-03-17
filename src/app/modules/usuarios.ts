import { Renta } from "./renta";
import { TipoUsuarios } from "./tipo_usuario";


export class Usuarios{
  ID?: number;
  NOMBRE: string;
  APELLIDO: string;
  CEDULA:string;
  MATRICULA: string;
  ID_TIPO_USUARIO: TipoUsuarios;
  ESTADO:boolean;

  constructor(NOMBRE: string, APELLIDO: string, CEDULA:string, MATRICULA: string, ID_TIPO_USUARIO: TipoUsuarios, ESTADO:boolean, RENTAS: Renta[]){
    this.NOMBRE = NOMBRE;
    this.APELLIDO = APELLIDO;
    this.CEDULA = CEDULA;
    this.MATRICULA = MATRICULA;
    this.ID_TIPO_USUARIO = ID_TIPO_USUARIO;
    this.ESTADO = ESTADO;
  }
}

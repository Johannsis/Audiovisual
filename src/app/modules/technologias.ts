import { Equipo } from "./equipo";

export class TecnologiaConexion{
  ID?: number;
  DESCRIPCION: string;
  ESTADO: boolean;
  EQUIPO?:Equipo[];

  constructor(DESCRIPCION: string, ESTADO: boolean){
    this.DESCRIPCION = DESCRIPCION;
    this.ESTADO = ESTADO;
  }
}

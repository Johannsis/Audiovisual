import { Equipo } from "./equipo";

export class TipoEquipo{
  ID?: number;
  DESCRIPCION: string;
  ESTADO: Boolean;
  EQUIPO?: Equipo[];

  constructor(DESCRIPCION: string, ESTADO: Boolean){
    this.DESCRIPCION = DESCRIPCION;
    this.ESTADO = ESTADO;
  }
}

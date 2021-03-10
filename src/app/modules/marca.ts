import { Equipo } from "./equipo";
import { Modelo } from "./modelo";

export class Marca{
  ID?: number;
  NOMBRE: string;
  MODELOS?: Modelo[];
  EQUIPO?:Equipo[];
  ESTADO: boolean;

  constructor(NOMBRE: string, ESTADO: boolean){
    this.NOMBRE = NOMBRE;
    this.ESTADO = ESTADO;
  }
}

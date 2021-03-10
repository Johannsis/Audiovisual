import { Equipo } from "./equipo";
import { Marca } from "./marca";

export class Modelo{
  ID?: number;
  ID_MARCA: Marca;
  NOMBRE: string;
  EQUIPO?:Equipo[];
  ESTADO: boolean;

  constructor(ID_MARCA: Marca, NOMBRE: string, ESTADO: boolean){
    this.ID_MARCA = ID_MARCA;
    this.NOMBRE = NOMBRE;
    this.ESTADO = ESTADO;
  }
}

import { stringify } from "@angular/compiler/src/util";
import { Marca } from "./marca";
import { Modelo } from "./modelo";
import { TecnologiaConexion } from "./technologias";
import { TipoEquipo } from "./tipo_equipo";

export class Equipo {
    _ID?: number;
    DESCRIPCION: string;
    NUMERO_SERIAL: string;
    ID_MARCA: Marca;
    ID_MODELO: Modelo;
    ID_TIPO_EQUIPO: TipoEquipo;
    ID_TECNOLOGIA_CONEXION: TecnologiaConexion;
    ESTADO: boolean;

  constructor(DESCRIPCION:string, NUMERO_SERIAL: string,ID_MARCA: Marca,ID_MODELO: Modelo, ID_TIPO_EQUIPO: TipoEquipo, ID_TECNOLOGIA_CONEXION: TecnologiaConexion , ESTADO: boolean){
    this.DESCRIPCION = DESCRIPCION;
    this.NUMERO_SERIAL = NUMERO_SERIAL;
    this.ESTADO = ESTADO;
    this.ID_MARCA = ID_MARCA;
    this.ID_MODELO = ID_MODELO;
    this.ID_TIPO_EQUIPO = ID_TIPO_EQUIPO;
    this.ID_TECNOLOGIA_CONEXION = ID_TECNOLOGIA_CONEXION;
  }
}

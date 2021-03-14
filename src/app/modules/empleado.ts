import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Renta } from "./renta";

export class Empleado {
  ID?: number
  NOMBRE: string;
  APELLIDO: string;
  CEDULA: string;
  TANDA: string;
  FECHA_INGRESO: Date;
  ESTADO: boolean;
  RENTAS?: Renta[];

  constructor(NOMBRE: string, APELLIDO:string, CEDULA: string, TANDA: string, FECHA_INGRESO: Date, ESTADO: boolean, RENTAS?: Renta[]){
    this.NOMBRE = NOMBRE;
    this.APELLIDO = APELLIDO;
    this.CEDULA = CEDULA;
    this.TANDA = TANDA;
    this.FECHA_INGRESO = FECHA_INGRESO;
    this.ESTADO = ESTADO;
    this.RENTAS = RENTAS;
  }
}

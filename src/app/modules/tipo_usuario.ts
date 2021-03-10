export class TipoUsuarios{
  ID?: number;
  DESCRIPCION: string;
  ESTADO: Boolean;

  constructor(DESCRIPCION: string, ESTADO: Boolean){
    this.DESCRIPCION = DESCRIPCION;
    this.ESTADO = ESTADO;
  }
}

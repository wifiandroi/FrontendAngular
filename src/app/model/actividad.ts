export class Actividad {
    id!: number;
    nombre: String;
    apellido: String;
    precio:number;

    constructor(nombre: string, apellido: string, precio: number){
     this.nombre=nombre;
     this.apellido=apellido;
     this.precio=precio;
    }
}

export class Actividad {
    id!: number;
    nombre: string;
    apellido: string;
    precio:number;

    constructor(nombre: string, apellido: string, precio: number){
     this.nombre=nombre;
     this.apellido=apellido;
     this.precio=precio;
    }
}

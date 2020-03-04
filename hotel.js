import Reservacion from "./reservacion.js";
var reserv=new Array();
export default class Hotel{
    constructor(nombre, reservaciones){
        this.nombre=nombre;
        this.reservaciones=reservaciones;
        reserv.push(this.reservaciones);
    }
    print(){
        return `Hotel ${this.nombre}
        ${reserv}`;
    }
}
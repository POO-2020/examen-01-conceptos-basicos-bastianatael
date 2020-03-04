import Huesped from "./huesped.js";

var huesped=new Array();
export default class Reservacion{
    /**
     * 
     * @param {Number} numeroh Numero de habitación. 
     * @param {String} fechaLlegada String en el formato: "dd/mm/yyyy" 
     * @param {Number} noches Cantidad de noches. 
     * @param {String} huesped Nombre del huésped. 
     */
    constructor(numeroh,fechaLlegada,noches,h,sexo){
        this.numeroh=numeroh;
        this.diaLlegada=fechaLlegada.substring(0,2);
        this.mesLlegada=fechaLlegada.substring(2,4);
        this.añoLlegada=fechaLlegada.substring(4,8);
        this.fechaLlegada=`${this.diaLlegada}/${this.mesLlegada}/${this.añoLlegada}`;
        this.noches=noches;
        this.huesped=h;
        huesped.push(new Huesped(h,sexo).getDescripcion());
    }
    getFecha(){
        return this.fechaLlegada;
    }
    addHuesped(nombre,sexo){

        huesped.push(new Huesped(nombre,sexo).getDescripcion());
    }
    getNumHuesped(){
        let cont=0;
        huesped.forEach((nombre,i)=>{
            cont=i;
        })
        return cont+1;
    }
    print(){
        let r1=`Habitacion ${this.numeroh}`;
        let r2=`Fecha de llegada: ${this.fechaLlegada}`
        let r3=`${this.noches} noches`;
        return `*${r1} 
        *${r2} 
        *${r3} 
        *${huesped}`;
    }
}
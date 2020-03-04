import Huesped from "./huesped.js";
import Reservacion from "./reservacion.js";
import Hotel from "./hotel.js";
var reservaciones=new Array();
class Main{
    addReservacion(data){
        let reserv=new Array();
        reserv[0]=data[0];
        reserv[1]=data[1];
        reserv[2]=data[2];
        reserv[3]=data[3];
        reserv[4]=data[4];
        let r=new Reservacion(data[0],data[1],data[2],data[3],data[4]).print();
        reservaciones.push(r);
    }
    test(){
        let r=new Huesped("Juan Pérez","Masculino").getDescripcion();
        console.log(r);
        let r3=new Hotel("LaClass",reservaciones);
        console.log(r3.print());

    }
}
let app=new Main;
app.addReservacion([31232,"27032020",3,"Juan Pérez","Masculino"]);
app.addReservacion([32323,"25012020",2,"Juan Fulano","Masculino "]);
app.test();
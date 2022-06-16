/*let inicio = prompt("Bienvenidx a nuestro emprendimiento TransmutArte ; para iniciar te pedimos que ingreses tu partido/localidad para decirte cual es el costo de envio que te queda");


if(inicio == "palermo"){
    alert("El costo de envio seria " + 880 + ", bienvenidx a nuestra tienda");
    console.log("si se cumple la condicion y tu partido/localidad es palermo se va a mostrar este mensaje");
}  

else if(inicio == "recoleta"){
    alert("El costo de envio seria " + 1050 + ", bienvenidx a nuestra tienda");
    console.log("si se cumple esta condicion y tu partido/localidad recoleta se va a mostrar este mensaje");
    
}

else{
    alert("Lo lamento, hay un error con el partido/localidad ingresado");
    console.log("si no se cumple ninguna de las condiciones, se va a mostrar este mensaje")
}*/

alert("Bienvenido a nuestra tienda TransmutArte");
    let nombre = prompt( "Por favor ingrese su nombre ");
    let  mientras = (nombre ===""); {
    nombre = prompt("ingrese su nombre");
     }
 alert("Bienvenido "+ nombre);

/*LE PEDIMOS QUE NOS SLECCIONE CUAL PRODUCTO QUIERE, CADA UNO TIENE SU NUMERO 
\n1 \n2 Y ASI, SI LA PERSONA INGRESA 1, SE LE VA A DEVOLVER LO QUE ESTABA EN EL \N1*/

function carritoCompra () {
 let elijaSuProducto = prompt("Por favor elija su piedra. \n1 Piedra Amatista \n2 Piedra Cuarzo Rosa \n3 Piedra turmalina negra")
 switch (elijaSuProducto) {
     case "1":
     alert(piedraAmatista.modelo + piedraAmatista.precio)
     break
     case "2" :
     alert(piedraCuarzoRosa.modelo + piedraCuarzoRosa.precio);
     break;
     case "3" :
     alert(piedraTurmalinaNegra.modelo + piedraTurmalinaNegra.precio); 
     break
     default:
         alert("no hay ingresado ninguna opcion")
     carritoCompra()
 } 
}  


class piedraPredefinido {
 constructor(modelo, precio){
     this.modelo = modelo
     this.precio = precio
 }
}

//SEGUN LO QUE LA PERSONA INGRESO, LE DEVOLVEMOS EL COSTO QUE TIENE ESTO 
const piedraAmatista = new piedraPredefinido("Piedra Amatista ", "$1000");
const piedraCuarzoRosa = new piedraPredefinido("Piedra Cuarzo Rosa ", "$2000");
const piedraTurmalinaNegra = new piedraPredefinido("Piedra Turmalina Negra ", "$3000");
const array = []

array.push(piedraAmatista) 
array.push(piedraCuarzoRosa) 
array.push(piedraTurmalinaNegra) 

//const resultado = array.find((cascoPredefinido) => cascoPredefinido.precio =="$2000")
//console.log(resultado)

const existe = array.some(piedraPredefinido => piedraPredefinido.modelo ==="Piedra Amatista ")
console.log(existe)


carritoCompra()



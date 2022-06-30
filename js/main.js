
//SALUDAMOS A LA PERSONA Y LE PEDIMOS QUE NOS INDIQUE SU NOMBRE
//DESPUES VOLVEMOS A SALUDAR A LA PERSONA PERO CON EL NOMBRE QUE NOS PROPORCIONO
/*


LE PEDIMOS QUE NOS SLECCIONE CUAL PRODUCTO QUIERE, CADA UNO TIENE SU NUMERO 
\n1 \n2 Y ASI, SI LA PERSONA INGRESA 1, SE LE VA A DEVOLVER LO QUE ESTABA EN EL \N1

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


*/




//DESAFIO CON DOM
//LA PERSONA SELECCIONA SU CODIOG POSTAL Y LE SALTA UNA ALERTA DICIENDOLE CUAL ES EL COSTO DE ENVIO QUE TIENE HASTA AHI

let listaDesplegable = document.querySelector(" .lista-desplegable");
listaDesplegable.addEventListener("change", function()

{alert("El costo de envio seria de $" + this.value);}

)




     alert("Bienvenidx a esta tienda holistica hecha con mucho amor!");
     function names() {
        let nombresList = [];
        
        for (let i = 0; i <= 1; i++) {
          let nombre = prompt("Ingresa tu nombre:");
          nombresList.push( nombre ); 
        }
        // Con Join podemos unir los item de la lista 
       document.getElementById("here").innerHTML = nombresList.join("Bienvenido" + " ");}
      
      names(); // Iniciar la función


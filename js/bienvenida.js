


//saludo bienvenida 

/*
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

*/



//saludos bienvenida2
    //no se cual de los dos queda mejor

    function guardarDatos() {
        localStorage.nombre = document.getElementById("nombre").value;
    }
    
    function recuperarDatos() {
        (localStorage.nombre != undefined) ? document.getElementById("datos").innerHTML = "Bienvenidx " + localStorage.nombre : document.getElementById("datos").innerHTML = "No has introducido tu nombre";    
    }
    
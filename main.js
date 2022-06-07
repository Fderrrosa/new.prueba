let inicio = prompt("Bienvenidx a nuestro emprendimiento TransmutArte ; para iniciar te pedimos que ingreses tu partido/localidad para decirte cual es el costo de envio que te queda");


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
}



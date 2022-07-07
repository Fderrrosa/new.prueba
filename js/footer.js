//lista despleable-tira los precios


let listaDesplegable = document.querySelector(" .lista-desplegable");
listaDesplegable.addEventListener("change", function()

{Swal.fire("El costo de envio seria de $" + this.value);}
)
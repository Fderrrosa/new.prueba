function validarForm()
{
	//alert("Validando");
	let verificar = true;
	let expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let expRegEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	let formulario = document.getElementById("contacto-frm");
	let nombre = document.getElementById("nombre");
	
	let email = document.getElementById("email");

	let asunto = document.getElementById("asunto");
	let comentarios = document.getElementById("comentarios");

	if(!nombre.value)
	{
		alert("El campo nombre es requerido");
		nombre.focus();
		verificar = false;
	}
	else if(!expRegNombre.exec(nombre.value))
	{
		alert("El campo nombre solo acepta letras y espacios en blanco");
		nombre.focus();
		verificar=false;
	}
	
	
	else if(!email.value)
	{
		alert("El campo email es requerido");
		email.focus();
		verificar = false;
	}
	else if(!expRegEmail.exec(email.value))
	{
		alert("El campo email no es valido");
		email.focus();
		verificar=false;
	}

	else if(!asunto.value)
	{
		alert("El campo asunto es requerido");
		asunto.focus();
		verificar = false;
	}
	else if(!comentarios.value)
	{
		alert("El campo comentarios es requerido");
		comentarios.focus();
		verificar = false;
	}
	else if(comentarios.value.length > 255)
	{
		alert("El campo comentarios no puede tener más de 255 caracteres");
		comentarios.focus();
		verificar = false;
	}
	
	if(verificar)
	{
		Swal.fire("Enviado");
		document.getElementById("contacto-frm").reset();
		//document.contacto_frm.submit();
	}
}

function limpiarForm()
{
	swal.fire("Limpiando");
	document.getElementById("contacto-frm").reset();
}

window.onload = function()
{
	var botonEnviar, botonLimpiar;
	botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.onclick = limpiarForm;

	botonEnviar = document.contacto_frm.enviar_btn;
	botonEnviar.onclick = validarForm;
}

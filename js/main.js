

// Array de productos
const productos = {
  producto1: {
    nombre: 'Bomba Carbon',
    precio: '300',
    descripcion: 'Consiste en encender carbones en nuestra casa o negocio para barrer con toda aquella energía dañina para nosotros.',
    srcImg: 'https://github.com/Fderrrosa/new.prueba/blob/prueba-bootstrap/imagenes/bombas%20carbon.jpg?raw=true'
  },
  producto2: {
    nombre: 'Sahumos',
    precio: '450',
    descripcion: 'Sahumar es una antigua técnica de limpieza espiritual y energética en la que se utiliza el humo de diversas hierbas y flores —salvia, lavanda, romero, rosas y muchas más',
    srcImg: 'https://github.com/Fderrrosa/new.prueba/blob/prueba-bootstrap/imagenes/sahumo-4-hierbas-.jpg?raw=true'
  },
  producto3: {
    nombre: 'Palo Santo',
    precio: '550',
    descripcion: 'Se utiliza, ya sea en su estado natural o como incienso, para fines energéticos ya que ayuda a limpiar y purificar el ambiente',
    srcImg: 'https://github.com/Fderrrosa/new.prueba/blob/prueba-bootstrap/imagenes/tercero.jpeg?raw=true'
  },
  producto4: {
    nombre: 'Concentrado para hornillo',
    precio: '850',
    descripcion: 'Los aceites esenciales se suelen utilizar en baños de aromaterapia, en compresas y masajes, mediante inhalación o a través de ambientadores.',
    srcImg: 'https://github.com/Fderrrosa/new.prueba/blob/prueba-bootstrap/imagenes/deco.jpeg?raw=true'
  },
  producto5: {
    nombre: 'Piedra Turmalina Negra',
    precio: '500',
    descripcion: 'Se considera una piedra de referencia para la limpieza, la protección y la transformación.',
    srcImg: 'https://github.com/Fderrrosa/new.prueba/blob/prueba-bootstrap/imagenes/turmanlinanegra.jpg?raw=true'
  }
}
// Se captura el template de los productos
const templateProd = document.getElementById('template-prod').content
const contenedorProd = document.querySelector('.contenedor-productos')
const fragment = document.createDocumentFragment()



// TODO LO RELACIONADO A AGREGAR LOS PRODUCTOS AL DOM
Object.values(productos).forEach( producto => {
  templateProd.querySelector('.div-info .nombre-prod').textContent = producto.nombre
  templateProd.querySelector('.div-precio-boton .precio').textContent = producto.precio
  templateProd.querySelector('.div-info .descripcion-prod').textContent = producto.descripcion
  templateProd.querySelector('.contenedor-img img').setAttribute('alt', producto.nombre)
  templateProd.querySelector('.contenedor-img img').setAttribute('src', producto.srcImg)
  const clone = templateProd.cloneNode(true)
  fragment.appendChild(clone)
})
contenedorProd.appendChild(fragment)

// TODO LO RELACIONADO AL CARRITO DE COMPRA
let carrito = {}
const templateTabla = document.getElementById('agregar-producto-al-carro').content
const tbodyCarrito = document.getElementById('carrito-body')
const fragmentTabla = document.createDocumentFragment()
const templateFoot = document.getElementById('tfooter').content
const tfootCarrito = document.getElementById('footer')

contenedorProd.addEventListener('click', e => {
  
  if(e.target.textContent === "Agregar") {
    setCarrito(e.target.parentElement.parentElement)
  }
  e.stopPropagation();
})
const setCarrito = e => {
  const pivoteCarrito = {
    nombre: e.querySelector('.div-info .nombre-prod').textContent,
    precio: e.querySelector('.div-precio-boton .precio').textContent,
    cantidad: 1
  }
  if(carrito.hasOwnProperty(pivoteCarrito.nombre)){
    carrito[pivoteCarrito.nombre].cantidad += 1
  } else {
    carrito[pivoteCarrito.nombre] = {...pivoteCarrito}
  }
  pintarTabla(carrito)
}

const pintarTabla = objetoCarrito => {
  Object.values(objetoCarrito).forEach( objeto => {
    const cloneTabla = templateTabla.cloneNode(true)
    cloneTabla.getElementById('producto').textContent = objeto.nombre
    cloneTabla.getElementById('cant').textContent = objeto.cantidad
    cloneTabla.getElementById('precio-uni').textContent = objeto.precio
    let precioTotal = parseFloat(objeto.precio) * objeto.cantidad
    cloneTabla.getElementById('precio-total-prod').textContent = precioTotal.toFixed(2)
    fragmentTabla.appendChild(cloneTabla)
  })
  tbodyCarrito.innerHTML = ''
  tbodyCarrito.appendChild(fragmentTabla)
  pintarFooter()
}
const pintarFooter = () => {
  tfootCarrito.innerHTML = ''
  if(Object.keys(carrito).length === 0) {
    tfootCarrito.innerHTML = '<tr><td colspan = 4>¡No hay ningun elemento en el carrito!</td></tr>'
  } else {
    const total = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + (cantidad * precio),0)
    templateFoot.getElementById('total-a-pagar').textContent = total.toFixed(2)
    const cloneFoot = templateFoot.cloneNode(true)
    fragment.appendChild(cloneFoot)
    tfootCarrito.appendChild(fragment)
    //Boton Vaciar carrito
    const botonVaciar = document.getElementById('vaciar-tabla')
botonVaciar.addEventListener('click', () => {
      carrito = {}
      pintarTabla(carrito)
      pintarFooter()
    })
    


//boton comprar

const btnComprar = document.querySelector('#btnComprar');

btnComprar.addEventListener("click", () => {
  Swal.fire({
      title: "Comprar",
      text: "¿Estás seguro que quieres realizar esta compra?",
      showCancelButton: true,
      confirmButtonText: "SI",
      cancelButtonText: "CANCELAR",
  })
  })
  




    //Botones aumentar y disminuir cantidades
    
  }
}
tbodyCarrito.addEventListener('click', e => {
  
  if(e.target.classList.contains('button')) {
    aumentarDisminuir(e.target)
  }
})
const aumentarDisminuir = boton => {
  if(boton.textContent === '+'){
    const indicador = boton.parentElement.parentElement.firstElementChild.textContent
    Object.values(carrito).forEach( elemento => {
      if(elemento.nombre === indicador) {
      carrito[elemento.nombre].cantidad++  
      }
    })
  }
  if(boton.textContent === '-') {
    const indicador = boton.parentElement.parentElement.firstElementChild.textContent
    Object.values(carrito).forEach( elemento => {
      if(elemento.nombre === indicador) {
      carrito[elemento.nombre].cantidad--
        if(carrito[elemento.nombre].cantidad === 0) {
          delete carrito[elemento.nombre]
        }
      }
    })
  }
  pintarTabla(carrito)
  pintarFooter()
}  

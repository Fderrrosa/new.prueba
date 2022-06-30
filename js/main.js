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
























































































//segunda entrega del proyecto(intento)


const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', ' ')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}€`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}

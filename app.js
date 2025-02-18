// SECTION Global Variables

const iceCreamOptions = [
  {
    name: 'Cone',
    price: 150,
    quantity: 0,
  },

  {
    name: 'Vanilla',
    price: 100,
    quantity: 0,
  },

  {
    name: 'Chocolate',
    price: 110.25,
    quantity: 0,
  },

  {
    name: 'Rubber Bands',
    price: 1,
    quantity: 0,
  },

  {
    name: 'Gears',
    price: 50,
    quantity: 0,
  },

  {
    name: 'Propane',
    price: 500,
    quantity: 0,
  }

]


// !SECTION 

//  SECTION Logic

function addItemToCart(indexNumber) {
  const iceCreamChoice = iceCreamOptions[indexNumber]

  iceCreamChoice.quantity++

  drawItemTotals()
  drawCartTotal()
  drawQuantityTotal()

}

function calculateCartTotal() {

  let total = 0

  for (let i = 0; i < iceCreamOptions.length; i++) {
    const iceCreamPrice = iceCreamOptions[i]

    total += iceCreamPrice.price * iceCreamPrice.quantity
  }

  console.log(total)

  return total

}

function qtyCartTotal() {
  let total = 0

  for (let i = 0; i < iceCreamOptions.length; i++) {
    const iceCreamQty = iceCreamOptions[i]

    total += iceCreamQty.quantity
  }

  return total
}



// !SECTION

// SECTION DRAW
function checkout() {
  const total = calculateCartTotal()

  window.alert(`Don't Make a Mess On My Floor!! You Owe Me $${total.toFixed(2)}`)


  clearCart()
  drawCartTotal()
  drawQuantityTotal()
  drawItemTotals()

}

function clearCart() {
  for (let i = 0; i < iceCreamOptions.length; i++) {
    const iceCreamCart = iceCreamOptions[i]
    iceCreamCart.quantity = 0
  }
}


function drawCartTotal() {
  const cartTotalElm = document.getElementById('cartList')

  const cartTotal = calculateCartTotal()

  cartTotalElm.innerText = cartTotal.toString()

}

function drawQuantityTotal() {
  const qtyTotalElem = document.getElementById('quantity')

  const qtyTotal = qtyCartTotal()

  qtyTotalElem.innerText = qtyTotal.toString()

}

function drawItemTotals() {

  let itemTotals = ''

  for (let i = 0; i < iceCreamOptions.length; i++) {
    const itemTotal = iceCreamOptions[i]

    if (itemTotal.quantity > 0) {
      itemTotals += `<li>${itemTotal.name} QTY: ${itemTotal.quantity}</li>`
    }
  }
  const itemTotalElem = document.getElementById('qtyTotal')
  itemTotalElem.innerHTML = itemTotals
}


// !SECTION

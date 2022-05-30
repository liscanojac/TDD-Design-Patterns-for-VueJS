const resistorPrice = 0.6

function resistorCost(price, amount) {

  if (amount > 50) {
    return price * amount * 0.8
  }
  return price * amount
}

export {
  resistorPrice,
  resistorCost
}
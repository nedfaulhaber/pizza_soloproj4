//business logic:
function Pizza(size, stdToppings, dlxToppings) {
  this.size = size;
  this.stdToppings = stdToppings;
  this.dlxToppings = dlxToppings;
}


Pizza.prototype.pizzaPrice = function() {
  return this.size + this.stdToppings + this.dlxToppings;

  }
}





//user interface logic:
$(document).ready(function() {
  $("#pizzas").submit(function(event) {
    event.prevent.Default();

var inputtedSize = $

  });
});

//business logic:
function Pizza(size, stdToppings, dlxToppings) {
  this.size = size;
  this.stdToppings = stdToppings;
  this.dlxToppings = dlxToppings;
}


Pizza.prototype.pizzaPrice = function() {
  return this.size + this.stdToppings + this.dlxToppings
}


//user interface logic:
$(document).ready(function() {
  $("form#pizzas").submit(function(event) {
    event.preventDefault();

    var inputtedSize = parseInt($(".sizes").val());
    var inputtedStdToppings = parseInt($(".std-toppings").val());
    var inputtedDlxToppings = parseInt($(".dlx-toppings").val());
    var newPizza = new Pizza(inputtedSize, inputtedStdToppings, inputtedDlxToppings);
    console.log(newPizza.pizzaPrice());

    $("#result").show();
    $("#finalPrice").text(newPizza.pizzaPrice());
    
  });
});

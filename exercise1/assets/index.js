var UNIT_PRICE = 11;
var TAX_RATE = 0.08;
var SHIPPING_COST = 4;
function getUnitPrice() {
  return UNIT_PRICE;
}
function getTaxes() {
  return UNIT_PRICE * TAX_RATE;
}
function getShipping() {
  return SHIPPING_COST;
}
function getNumberOfItems() {
  var quantity = document.getElementById("quantity").value;
  //we'll need to read from the HTML
  return quantity;
}
function getTotalCost() {
  var numberOfItems = getNumberOfItems();
  var totalCost =
    numberOfItems * getUnitPrice() + numberOfItems * getTaxes() + getShipping();
  //alert(totalCost);
  document.getElementById("cost").innerHTML = "Total Cost: $" + totalCost;
}

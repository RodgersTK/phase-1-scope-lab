// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase();
  }
  function setBestCustomer() {
    window.bestCustomer = 'not bob';
  }
  var bestCustomer = 'maybe bob';
  function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
  }
  const leastFavoriteCustomer = 'someone';
  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new person';
  }
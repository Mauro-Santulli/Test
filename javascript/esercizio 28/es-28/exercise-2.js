const order = {};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}

let controlCity = order?.customer?.address?.city;
console.log(controlCity);
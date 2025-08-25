// ex.03: tranfrom and iterlate with map and forEach
const prices = [10, 20, 30, 40];
let DiscountedPrices = prices.map(prices => prices * 0.8);
DiscountedPrices.forEach(prices => console.log("DiscountedPrice is: $",prices));

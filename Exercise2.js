const priceRose = 8;
var quantityRose = 70;
const priceLily = 10;
var quantityLily = 50;
const priceTulip = 2;
var quantityTulip = 120;

var totalRose = priceRose * quantityRose;
var totalLily = priceLily * quantityLily;
var totalTulip = priceTulip * quantityTulip;

var totalFlorist = totalRose + totalLily + totalTulip;

console.log("Rose - unit price: " + priceRose + ", quantity: " + quantityRose + ", value: " + totalRose);
console.log("Lily - unit price: " + priceLily + ", quantity: " + quantityLily + ", value: " + totalLily);
console.log("Tulip - unit price: " + priceTulip + ", quantity: " + quantityTulip + ", value: " + totalTulip);

console.log("Total: " + totalFlorist);


quantityRose -= 20;
quantityLily -= 30;

var totalRose = priceRose * quantityRose;
var totalLily = priceLily * quantityLily;
var totalTulip = priceTulip * quantityTulip;

var totalFlorist = totalRose + totalLily + totalTulip;

console.log("Rose - unit price: " + priceRose + ", quantity: " + quantityRose + ", value: " + totalRose);
console.log("Lily - unit price: " + priceLily + ", quantity: " + quantityLily + ", value: " + totalLily);
console.log("Tulip - unit price: " + priceTulip + ", quantity: " + quantityTulip + ", value: " + totalTulip);

console.log("Total: " + totalFlorist);

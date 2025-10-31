import { PRODUCTS } from "./data/products.js";
PRODUCTS.forEach((p) => console.log(p));

PRODUCTS.forEach((p) => console.log(p.name));

//etape4
import { isExpired } from "./utils/date.js";
const expired = PRODUCTS.filter(p => isExpired(p.expiryDate));
console.log("Produits expirés :", expired);


//etape5
const total = PRODUCTS.reduce(
    (somme, p) => somme + p.price * p.quantity, 0);
console.log("Valeur totale du stock :", total, "MAD");



//etape6
const promo = PRODUCTS.filter(p => p.tags.includes("promo"));
console.log("Produits en promo :", promo.map(p => p.name));
const sorted = [...PRODUCTS].sort((a, b) => a.price - b.price);
console.log("Tri par prix croissant :", sorted.map(p => p.name));


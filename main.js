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



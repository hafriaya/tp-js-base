import { PRODUCTS } from "./data/products.js";
PRODUCTS.forEach((p) => console.log(p));

PRODUCTS.forEach((p) => console.log(p.name));

//etape4
import { isExpired } from "./utils/date.js";
const expired = PRODUCTS.filter(p => isExpired(p.expiryDate));
console.log("Produits expirés :", expired);


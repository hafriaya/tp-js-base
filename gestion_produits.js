const produits = [
{ nom: "Pommes", prix: 4, expireLe: "2026-01-15" },
{ nom: "Bananes", prix: 3, expireLe: "2025-02-10" },
{ nom: "Oranges", prix: 5, expireLe: "2026-03-20" },
];
const aujourdHui = new Date();
const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui);
const total = valides.reduce((s, p) => s + p.prix, 0);
console.log("Produits valides :", valides);
console.log("Total :", total, "DH");




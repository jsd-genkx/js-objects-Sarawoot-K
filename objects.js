"use strict";

// Practice Object CRUD, copying, and destructuring.
let product = {
	id: 101,
	name: "Laptop",
	price: 1200,
	details: {
		brand: "TechPro",
		specs: {
			cpu: "i7",
			ram: "16GB",
		},
	},
};

let cart = {
	items: [
		{ id: 101, qty: 1 },
		{ id: 202, qty: 2 },
	],
	customer: {
		name: "Alice",
		address: { city: "Bangkok", zip: "10110" },
	},
};

// -------------------------------------------

// Task 01: CRUD on an Object (After each step, log the product object.)
// 1️⃣ C – Create (Add new property)
// 👉 Add stock: true to product.
product.inStock = true;
console.log("After Create:",product);

// 2️⃣ R – Read (Access property)
// 👉 Log product.details.brand and product.details.specs.cpu.
console.log("Brand:",product["details"]["brand"]);
console.log("cpu :",product.details.specs);

// -------------------------------------------

// 3️⃣ U – Update (Change value)
// 👉 Update product.price to 999.
product.price = 999;
console.log("After Update:",product.price);

// -------------------------------------------

// 4️⃣ D – Delete (Remove property)
// 👉 Delete product.details.specs.ram.
delete product.details.specs.ram ;
console.log("After Delete:",product.details);

// -------------------------------------------

// Task 02: Copying Objects
// 5️⃣ Shallow copy (spread operator)
// 👉 Create productCopy = { ...product }.
// Change productCopy.name = "Gaming Laptop".
// ✅ Log both product.name and productCopy.name.
const productCopy = { ...product };
productCopy.name = "Gaming Laptop";
console.log("Original name:",product.name);
console.log("Copy name:",productCopy.name);

// -------------------------------------------

// 6️⃣ Deep copy (structuredClone)
// 👉 Create cartCopy = structuredClone(cart).
// Change cartCopy.customer.address.city = "Chiang Mai".
// ✅ Log cart.customer.address.city and cartCopy.customer.address.city.
const cartCopy = structuredClone(cart);
cartCopy.customer.address.city = "Chiang Mai";
console.log("Original city:",cart.customer.address.city);
console.log("Copy city:",cartCopy.customer.address.city);

// -------------------------------------------

// Task 03: Destructuring
// 7️⃣ Basic destructuring
// 👉 Extract name and price from product into variables.
// ✅ Log name and price.
const { name, price ,id } = product;
console.log(name,price ,id);

// -------------------------------------------

// 8️⃣ Rename and default
// 👉 Destructure product so that name becomes productName.
// 👉 Also give stock a default value of false if it’s not in the object.
// ✅ Log productName and stock.
const { name : productName , inStock = false } = product;
console.log(productName, inStock);

// -------------------------------------------

// 9️⃣ Nested destructuring
// 👉 From product.details, extract brand and from product.details.specs, extract cpu in one destructuring statement.
// ✅ Log brand and cpu.
const {
	details: {brand, specs:{cpu}}
} = product;
console.log(brand, cpu);

// -------------------------------------------

// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function minQuantityProduct(inventory) {
  let minQuantity = inventory[0].quantity;
  let productName = "";
  for (let product of inventory) {
    if (product.quantity < minQuantity) {
      minQuantity = product.quantity;
      productName = product.name;
    }
  }
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${productName} ซึ่งมี ${minQuantity} ชิ้น`;
}

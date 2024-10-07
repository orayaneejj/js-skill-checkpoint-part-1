// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
  let totalPrice = 0;
  let discount = 0;
  for (let product of products) {
    totalPrice += product.price * product.quantity;
  }
  if (promotionCode === "SALE20") {
    discount = totalPrice * 0.2;
  } else if (promotionCode === "SALE50") {
    discount = totalPrice * 0.5;
  }
  return totalPrice - discount;
}

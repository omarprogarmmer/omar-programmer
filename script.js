// قائمة المنتجات
const webProducts = [
  { id: 1, name: "Web Find a doctor", link: "https://omarprogarmmer.github.io/Find-a-doctor/", description: "This website helps you search for a doctor in your country (inactive)" },
  { id: 2, name: "Web Menu", link: "https://omarprogarmmer.github.io/Menu/", description: "This web menu is for a restaurant." },
  { id: 3, name: "Web Personal Site", link: "", description: "This website shows personal works." },
];

const playProducts = [];

// دالة لعرض المنتجات بناءً على النوع
function showProducts(type) {
  const productList = document.getElementById("productList");
  const productTitle = document.getElementById("productTitle");
  const productsContainer = document.getElementById("products");
  const buttons = document.querySelectorAll(".btn");

  // إعادة تعيين ألوان الأزرار
  buttons.forEach(button => button.classList.remove("active"));

  // إضافة اللون النشط للزر المختار
  const activeButton = document.querySelector(`.btn-${type}`);
  activeButton.classList.add("active");

  // إظهار قائمة المنتجات
  productList.classList.add("visible");

  // تحديد العنوان بناءً على النوع
  productTitle.textContent = type === "web" ? "Web Products" : "Play Products";

  // تحديد المنتجات بناءً على النوع
  const products = type === "web" ? webProducts : playProducts;

  // مسح المحتوى القديم من المنتجات
  productsContainer.innerHTML = "";

  if (products.length === 0) {
    // عرض رسالة إذا لم توجد منتجات
    const noProducts = document.createElement("li");
    noProducts.textContent = "No products available.";
    noProducts.style.textAlign = "center";
    noProducts.style.color = "#f687b3";
    productsContainer.appendChild(noProducts);
    return;
  }

  // إضافة المنتجات إلى القائمة
  products.forEach((product, index) => {
    const listItem = document.createElement("li");
    listItem.style.setProperty("--i", index); // تعيين التأخير بناءً على الترتيب

    // تفاصيل المنتج
    const details = document.createElement("div");
    details.classList.add("product-details");
    details.innerHTML = `
      <span>${product.name}</span>
      <span class="description">${product.description}</span>
    `;

    // رابط للمنتج
    const link = document.createElement("a");
    link.href = product.link || "#";
    link.target = "_blank";
    link.textContent = product.link ? "Visit" : "Unavailable";

    // إضافة العناصر داخل القائمة
    listItem.appendChild(details);
    listItem.appendChild(link);

    // إضافة المنتج إلى الحاوية
    productsContainer.appendChild(listItem);
  });
}

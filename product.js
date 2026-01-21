// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products với ít nhất 6 sản phẩm thuộc tối thiểu 2 danh mục khác nhau
let products = [
    new Product(1, "iPhone 15", 25000000, 10, "Electronics", true),
    new Product(2, "Samsung Galaxy S24", 22000000, 15, "Electronics", true),
    new Product(3, "Áo thun nam", 150000, 50, "Fashion", true),
    new Product(4, "Giày thể thao", 800000, 0, "Fashion", false),
    new Product(5, "Túi xách nữ", 35000000, 5, "Accessories", true),
    new Product(6, "Dây chuyền vàng", 40000000, 2, "Accessories", true)
];

// Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
let nameAndPrice = products.map(product => {
    return {
        name: product.name,
        price: product.price
    };
});
console.log("=== CÂU 3: Name và Price ===");
console.log(nameAndPrice);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
let inStockProducts = products.filter(product => product.quantity > 0);
console.log("\n=== CÂU 4: Sản phẩm còn hàng ===");
console.log(inStockProducts);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
let hasExpensiveProduct = products.some(product => product.price > 30000000);
console.log("\n=== CÂU 5: Có sản phẩm giá trên 30 triệu? ===");
console.log(hasExpensiveProduct);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
let allAccessoriesAvailable = products
    .filter(product => product.category === "Accessories")
    .every(product => product.isAvailable === true);
console.log("\n=== CÂU 6: Tất cả Accessories đang bán? ===");
console.log(allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng (price × quantity)
let totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);
console.log("\n=== CÂU 7: Tổng giá trị kho hàng ===");
console.log(totalInventoryValue.toLocaleString('vi-VN') + " VNĐ");

// Câu 8: Dùng for...of duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("\n=== CÂU 8: Duyệt mảng bằng for...of ===");
for (let product of products) {
    let status = product.isAvailable ? "Đang bán" : "Hết hàng";
    console.log(`Tên sản phẩm: ${product.name} - Danh mục: ${product.category} - Trạng thái: ${status}`);
}

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng
console.log("\n=== CÂU 9: Dùng for...in ===");
let sampleProduct = products[0];
console.log("Tên thuộc tính:");
for (let key in sampleProduct) {
    console.log(key);
}
console.log("\nGiá trị tương ứng:");
for (let key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
let availableAndInStock = products
    .filter(product => product.isAvailable === true && product.quantity > 0)
    .map(product => product.name);
console.log("\n=== CÂU 10: Sản phẩm đang bán và còn hàng ===");
console.log(availableAndInStock);
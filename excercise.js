// Sum of Prices
const products = [
  { name: "Product 1", price: 10.99 },
  { name: "Product 2", price: 5.99 },
  { name: "Product 3", price: 7.99 },
];

let totalPrice = 0;
for (let product of products) {
  totalPrice += product.price;
}
console.log(totalPrice);


// Student Grades Average
const students = [
  { name: "John", grade: 85 },
  { name: "Jane", grade: 90 },
  { name: "Bob", grade: 78 },
];

let totalGrades = 0;
for (let student of students) {
  totalGrades += student.grade;
}
let averageGrade = totalGrades / 3;
console.log(averageGrade);


//Product Names
const productsArray = [
  { name: "Product 1", price: 10.99 },
  { name: "Product 2", price: 5.99 },
  { name: "Product 3", price: 7.99 },
];

let productNames = [];
for (let product of productsArray) {
  productNames.push(product.name);
}
console.log(productNames);


// Employee Salary sums
const employees = [
  { name: "John", salary: 50000 },
  { name: "Jane", salary: 60000 },
  { name: "Bob", salary: 40000 },
];

let totalSalary = 0;
for (let employee of employees) {
  totalSalary += employee.salary;
}
console.log(totalSalary);


//Book Authors
const books = [
  { title: "Book 1", author: "Author 1" },
  { title: "Book 2", author: "Author 2" },
  { title: "Book 3", author: "Author 3" },
];

let authors = [];
for (let book of books) {
  authors.push(book.author);
}
console.log(authors);

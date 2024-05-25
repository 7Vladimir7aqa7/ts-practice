"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getInfo() {
        return `Book name is ${this.title}, author is ${this.author}, book year is ${this.year}`;
    }
}
const book1 = new Book("Heart I give a child", "V.Suhomlinkiy", 1969);
console.log(book1.getInfo());
exports.default = Book;

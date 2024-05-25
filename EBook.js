"use strict";
const Book = require('./Book');
class ElectronBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }
    getInfo() {
        return `Book name is ${super.getInfo()} (Format: ${this.format})`;
    }
}
const EBook1 = new ElectronBook("Knut", "U.Nagibin", 1941, "PDF");
console.log(EBook1.getInfo());

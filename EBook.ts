import Book from './Book';

class ElectronBook extends Book {
 private format: string;

 constructor(title: string, author: string, year: number, format: string) {
    super(title, author, year);
    this.format = format;
 }
public getInfo(): string {
     return `Book name is ${super.getInfo()} (Format: ${this.format})`;
     }
}

const EBook1 = new ElectronBook("Knut", "U.Nagibin", 1941, "PDF");
console.log(EBook1.getInfo());


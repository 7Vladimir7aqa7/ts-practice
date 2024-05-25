class Book {
   private title: string;
   private author: string;
   private year: number;
   
   constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
   }

   getInfo(): string {
    return `Book name is ${this.title}, author is ${this.author}, book year is ${this.year}`
   }

}

const book1 = new Book("Heart I give a child", "V.Suhomlinkiy", 1969);
console.log(book1.getInfo());

export default Book;
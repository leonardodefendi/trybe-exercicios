import ConsoleNotification from "./ConsoleNotification";
import EmailNotification from "./EmailNotification";
import Notificator from "./Notificator";


// ReadingTracker.ts
type Book = {
  book: string;
  author: string;
  genre: string;
}


class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
   constructor(readingGoal: number, public notificator: Notificator = new EmailNotification('teste@teste.com')) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification('Congratulations ! You reached your reading goal')
      return;
    }
    this,this.notificator.sendNotification('There are still some books to go');
  }
}

// class BookWish {
//   private wishlist: Book[];
//   constructor(book: Book) {
//     this.wishlist = [];
//     this.wishlist.push(book);
//   }
//   addToWishList(newBook: Book) {
//     this.wishlist.push(newBook);
//   }
//   showWishList() {
//     return console.log(this.wishlist);
//   }
// }

// export default function progressNotification(message: string): void {
//   console.log(message);
// }

// const readTracker = new ReadingTracker(20);
// const bookWish = new BookWish({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
// bookWish.addToWishList({book: 'Biblioteca da meia Noite', author: 'Matt Hang', genre: 'Romance'});
// bookWish.showWishList();
const console = new ConsoleNotification('Leonardo');
const readTracker = new ReadingTracker(20, console);
readTracker.trackReadings(21)
// readTracker.addToWishlist();
// readTracker.showWishlist();
// readTracker.trackReadings(12);
// readTracker.trackReadings(9);
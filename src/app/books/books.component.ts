import { Component } from '@angular/core';
import { BookService } from '../services/books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent {
  books: any[] = [];
  constructor(private bookService: BookService) {
    this.books = bookService.getBooks();
  }

  deleteBook(book: any) {}
  saveBook(dataBook: any) {
    if (dataBook.valid) {
    }
  }
}

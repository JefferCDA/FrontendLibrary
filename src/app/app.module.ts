import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { BookService } from './services/books.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class BookService {
  private books = ['Libro de Java', 'Fundamentos DB', 'Cálculo 1'];

  addBook(titleBook: string) {
    this.books.push(titleBook);
  }
  getBooks() {
    return [...this.books];
  }
}

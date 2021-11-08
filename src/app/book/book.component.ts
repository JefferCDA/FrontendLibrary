import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() titleBook!: string;
  @Output() clickedBook = new EventEmitter();
  constructor() {}
  onClicked() {
    this.clickedBook.emit();
  }
}

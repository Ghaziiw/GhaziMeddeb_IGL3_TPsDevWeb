import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';

@Component({
    selector: 'app-book-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './book-list.html',
    styleUrls: ['./book-list.css'] 
})
export class BookList {
    @Input() books: Book[] = [];
    @Output() delete = new EventEmitter<number>();
    @Output() edit = new EventEmitter<Book>();

    trackById(index: number, book: Book): number {
        return book.id ?? index;
    }

    onEdit(book: Book) {
        this.edit.emit(book)
    }

    onDelete(book: Book) {
        this.delete.emit(book.id);
    }
}

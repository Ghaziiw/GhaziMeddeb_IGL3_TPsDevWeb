import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../models/book.model';

@Component({
    selector: 'app-book-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './book-form.html',
    styleUrls: ['./book-form.css']
})
export class BookForm implements OnChanges {
    @Input() categories: string[] = [];
    @Input() bookToEdit?: Book | null;
    @Output() bookCreated = new EventEmitter<Partial<Book>>();
    @Output() bookUpdated = new EventEmitter<Book>();

    Books: Partial<Book> = this.emptyModel();
    isEdit = false;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['bookToEdit'] && this.bookToEdit) {
            this.isEdit = true;
            this.Books = { ...this.bookToEdit };
        } else if (changes['bookToEdit'] && !this.bookToEdit) {
            this.resetModel();
        }
    }

    onSubmit(form: NgForm) {
        if (form.invalid) return;
        if (this.isEdit && this.Books.id != null) {
            this.bookUpdated.emit(this.normalizeForUpdate(this.Books));
        } else {
            this.bookCreated.emit({ ...this.Books });
        }
        form.resetForm();
        this.resetModel();
    }

    cancelEdit(form?: NgForm) {
        if (form) form.resetForm();
        this.resetModel();
    }

    private resetModel() {
        this.Books = this.emptyModel();
        this.isEdit = false;
    }

    private emptyModel(): Partial<Book> {
        return {
            title: '',
            author: '',
            publisherEmail: '',
            publisherPhone: '',
            releaseDate: '',
            category: '',
            isAvailable: false,
            stock: undefined
        };
    }

    private normalizeForUpdate(partial: Partial<Book>): Book {
        return {
            id: partial.id || 0,
            title: partial.title || '',
            author: partial.author || '',
            publisherEmail: partial.publisherEmail || '',
            publisherPhone: partial.publisherPhone ? String(partial.publisherPhone) : '',
            releaseDate: partial.releaseDate || '',
            category: partial.category || '',
            isAvailable: !!partial.isAvailable,
            stock: partial.stock === undefined ? undefined : Number(partial.stock)
        };
    }
}

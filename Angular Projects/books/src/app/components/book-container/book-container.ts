import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BookForm } from '../book-form/book-form';
import { BookList } from '../book-list/book-list';

@Component({
    selector: 'app-book-container',
    standalone: true,
    imports: [BookForm, BookList, FormsModule],
    templateUrl: './book-container.html',
    styleUrls: ['./book-container.css']
})
export class BookContainer {

    listBook: Book[] = [
        {
            id: 1,
            title: "The Silent Code",
            author: "Liam Carter",
            publisherEmail: "contact@novapress.com",
            publisherPhone: "55512078",
            releaseDate: "2021-03-12",
            category: "Histoire",
            isAvailable: true,
            stock: 12
        },
                {
            id: 2,
            title: "The witcher",
            author: "George RRmartin",
            publisherEmail: "contact@novapress.com",
            publisherPhone: "55512078",
            releaseDate: "2021-03-12",
            category: "Histoire",
            isAvailable: true,
            stock: 12
        }
    ];

    categories: string[] = [
        "Roman",
        "Science",
        "Histoire",
        "Informatique",
        "Art",
        "Autres"
    ];

    bookToEdit: Book | null = null;

    searchTerm: string = "";
    sortBy: "none" | "category" | "available" = "none";

    get totalBooks(): number {
        return this.listBook.length;
    }

    get filteredBooks(): Book[] {
        const q = this.searchTerm.trim().toLowerCase();

        let result = [...this.listBook];

        if (q.length > 0) {
            result = result.filter(b =>
                b.title.toLowerCase().includes(q) ||
                b.author.toLowerCase().includes(q) ||
                b.category.toLowerCase().includes(q)
            );
        }

        if (this.sortBy === "category") {
            result.sort((a, b) =>
                a.category.localeCompare(b.category, undefined, { sensitivity: "base" })
            );
        }

        if (this.sortBy === "available") {
            result.sort((a, b) =>
                Number(b.isAvailable) - Number(a.isAvailable)
            );
        }

        return result;
    }

    //id generator for books: max existing id + 1
    private newId(): number {
        return this.listBook.length
            ? Math.max(...this.listBook.map(b => b.id)) + 1
            : 1;
    }


    onEditRequest(book: Book) {
        this.bookToEdit = { ...book };
    }

    //manage book: add delete update
    addBook(book: Partial<Book>) {
        if (!book.title || /^\d+$/.test(book.title.trim())) {
            return;
        }

        const newId = this.newId();

        const normalized: Book = {
            id: newId,
            title: book.title || "",
            author: book.author || "",
            publisherEmail: book.publisherEmail || "",
            publisherPhone: book.publisherPhone ? String(book.publisherPhone) : "",
            releaseDate: book.releaseDate || "",
            category: book.category || "",
            isAvailable: !!book.isAvailable,
            stock: book.stock === undefined ? undefined : Number(book.stock)
        };

        this.listBook.push(normalized);
    }


    updateBook(updated: Book) {
        if (!updated.title || /^\d+$/.test(updated.title.trim())) {
            return;
        }

        this.listBook = this.listBook.map(b =>
            b.id === updated.id ? { ...updated } : b
        );

        this.bookToEdit = null;
    }

    deleteBook(id: number) {
        this.listBook = this.listBook.filter(b => b.id !== id);
    }

}

import { book,library } from "../models/index";

export class ApiResponse{
    listAvailableBooks(library: library): book[] {
        return library.livres.filter(book => book.empruteur === null);
    }

    listBorrowedBooks(library: library): book[] {
        return library.livres.filter(book => book.empruteur !== null);
    }
}
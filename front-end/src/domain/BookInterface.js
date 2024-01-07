"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
;
var Book = /** @class */ (function () {
    function Book(isbn, title, subtitle, abstract, author, publisher, price, numPages) {
        this.isbn = isbn;
        this.title = title;
        this.subtitle = subtitle;
        this.abstract = abstract;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
        this.numPages = numPages;
    }
    Book.prototype.toString = function () {
        return JSON.stringify(this);
    };
    Book.fromObject = function (obj) {
        return new Book(obj.isbn, obj.title, obj.subtitle, obj.abstract, obj.author, obj.publisher, obj.price, obj.numPages);
    };
    return Book;
}());
exports.Book = Book;

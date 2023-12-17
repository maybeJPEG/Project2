"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.postBook = exports.deleteByIsbn = exports.getByIsbn = exports.getAll = void 0;
var url = "http://localhost:4730/";
var BookInterface_1 = require("./BookInterface");
function getAll() {
    return __awaiter(this, void 0, void 0, function () {
        var response, returnText, allBooks, bookList, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch(url + "books")];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text()];
                case 2:
                    returnText = _a.sent();
                    throw new Error(returnText);
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    allBooks = _a.sent();
                    console.log(allBooks);
                    bookList = allBooks.map(function (bookData) { return BookInterface_1.Book.fromObject(bookData); });
                    return [2 /*return*/, allBooks];
                case 5:
                    error_1 = _a.sent();
                    console.error('Error:', error_1.message);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.getAll = getAll;
function getByIsbn(isbn) {
    return __awaiter(this, void 0, void 0, function () {
        var response, returnText, book, bookObject, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch(url + "books/" + isbn)];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text()];
                case 2:
                    returnText = _a.sent();
                    throw new Error(returnText);
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    book = _a.sent();
                    console.log(book);
                    bookObject = BookInterface_1.Book.fromObject(book);
                    console.log(bookObject);
                    console.log(bookObject.toString());
                    return [2 /*return*/, bookObject];
                case 5:
                    error_2 = _a.sent();
                    console.error('Error:', error_2.message);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/, undefined];
            }
        });
    });
}
exports.getByIsbn = getByIsbn;
function deleteByIsbn(isbn) {
    return __awaiter(this, void 0, void 0, function () {
        var response, returnText, book, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch(url + "books/" + isbn, { method: 'DELETE' })];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text()];
                case 2:
                    returnText = _a.sent();
                    throw new Error(returnText);
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    book = _a.sent();
                    console.log(book);
                    console.log("DELETED BOOK " + isbn);
                    return [3 /*break*/, 6];
                case 5:
                    error_3 = _a.sent();
                    console.error('Error:', error_3.message);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.deleteByIsbn = deleteByIsbn;
function postBook(book) {
    return __awaiter(this, void 0, void 0, function () {
        var response, resp, result, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch(url + "books", {
                            method: 'POST',
                            body: book.toString(),
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                        })];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text()];
                case 2:
                    resp = _a.sent();
                    console.log(resp);
                    throw new Error("Error: ".concat(response.statusText));
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 5:
                    error_4 = _a.sent();
                    console.error('Error:', error_4);
                    throw error_4;
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.postBook = postBook;
function updateBook(bookToUpdate) {
    return __awaiter(this, void 0, void 0, function () {
        var response, existingBook, updateResponse, updateResponse, updateResponse, updateResponse, updateResponse, updateResponse, updateResponse, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 20, , 21]);
                    return [4 /*yield*/, fetch(url + "books/" + bookToUpdate.isbn)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 18];
                    return [4 /*yield*/, response.json()];
                case 2:
                    existingBook = _a.sent();
                    if (!(existingBook.title !== bookToUpdate.title)) return [3 /*break*/, 4];
                    // Update the title if the ISBN matches
                    existingBook.title = bookToUpdate.title;
                    return [4 /*yield*/, fetch(url + "books/" + bookToUpdate.isbn, {
                            method: 'PUT',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(existingBook),
                        })];
                case 3:
                    updateResponse = _a.sent();
                    if (updateResponse.ok) {
                        console.log("Title updated for ISBN ".concat(bookToUpdate.isbn));
                    }
                    else {
                        console.error("Failed to update title for ISBN ".concat(bookToUpdate.isbn));
                    }
                    _a.label = 4;
                case 4:
                    if (!(existingBook.subtitle !== bookToUpdate.subtitle)) return [3 /*break*/, 6];
                    // Update the title if the ISBN matches
                    existingBook.subtitle = bookToUpdate.subtitle;
                    return [4 /*yield*/, fetch(url + "books/" + bookToUpdate.isbn, {
                            method: 'PUT',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(existingBook),
                        })];
                case 5:
                    updateResponse = _a.sent();
                    if (updateResponse.ok) {
                        console.log("Subtitle updated for ISBN ".concat(bookToUpdate.isbn));
                    }
                    else {
                        console.error("Failed to update subtitle for ISBN ".concat(bookToUpdate.isbn));
                    }
                    _a.label = 6;
                case 6:
                    if (!(existingBook.abstract !== bookToUpdate.abstract)) return [3 /*break*/, 8];
                    // Update the title if the ISBN matches
                    existingBook.abstract = bookToUpdate.abstract;
                    return [4 /*yield*/, fetch(url + "books/" + bookToUpdate.isbn, {
                            method: 'PUT',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(existingBook),
                        })];
                case 7:
                    updateResponse = _a.sent();
                    if (updateResponse.ok) {
                        console.log("Abstract updated for ISBN ".concat(bookToUpdate.isbn));
                    }
                    else {
                        console.error("Failed to update abstract for ISBN ".concat(bookToUpdate.isbn));
                    }
                    _a.label = 8;
                case 8:
                    if (!(existingBook.author !== bookToUpdate.author)) return [3 /*break*/, 10];
                    // Update the title if the ISBN matches
                    existingBook.author = bookToUpdate.author;
                    return [4 /*yield*/, fetch(url + "books/" + bookToUpdate.isbn, {
                            method: 'PUT',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(existingBook),
                        })];
                case 9:
                    updateResponse = _a.sent();
                    if (updateResponse.ok) {
                        console.log("Author updated for ISBN ".concat(bookToUpdate.isbn));
                    }
                    else {
                        console.error("Failed to update author for ISBN ".concat(bookToUpdate.isbn));
                    }
                    _a.label = 10;
                case 10:
                    if (!(existingBook.publisher !== bookToUpdate.publisher)) return [3 /*break*/, 12];
                    // Update the title if the ISBN matches
                    existingBook.publisher = bookToUpdate.publisher;
                    return [4 /*yield*/, fetch(url + "books/" + bookToUpdate.isbn, {
                            method: 'PUT',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(existingBook),
                        })];
                case 11:
                    updateResponse = _a.sent();
                    if (updateResponse.ok) {
                        console.log("Publisher updated for ISBN ".concat(bookToUpdate.isbn));
                    }
                    else {
                        console.error("Failed to update publisher for ISBN ".concat(bookToUpdate.isbn));
                    }
                    _a.label = 12;
                case 12:
                    if (!(existingBook.price !== bookToUpdate.price)) return [3 /*break*/, 14];
                    // Update the title if the ISBN matches
                    existingBook.price = bookToUpdate.price;
                    return [4 /*yield*/, fetch(url + "books/" + bookToUpdate.isbn, {
                            method: 'PUT',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(existingBook),
                        })];
                case 13:
                    updateResponse = _a.sent();
                    if (updateResponse.ok) {
                        console.log("Price updated for ISBN ".concat(bookToUpdate.isbn));
                    }
                    else {
                        console.error("Failed to update price for ISBN ".concat(bookToUpdate.isbn));
                    }
                    _a.label = 14;
                case 14:
                    if (!(existingBook.numPages !== bookToUpdate.numPages)) return [3 /*break*/, 16];
                    // Update the title if the ISBN matches
                    existingBook.numPages = bookToUpdate.numPages;
                    return [4 /*yield*/, fetch(url + "books/" + bookToUpdate.isbn, {
                            method: 'PUT',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(existingBook),
                        })];
                case 15:
                    updateResponse = _a.sent();
                    if (updateResponse.ok) {
                        console.log("Number of pages updated for ISBN ".concat(bookToUpdate.isbn));
                    }
                    else {
                        console.error("Failed to update number of pages for ISBN ".concat(bookToUpdate.isbn));
                    }
                    return [3 /*break*/, 17];
                case 16:
                    console.log("The provided book has the same data as the existing one with ISBN ".concat(bookToUpdate.isbn));
                    _a.label = 17;
                case 17: return [3 /*break*/, 19];
                case 18:
                    console.log("No book found with ISBN ".concat(bookToUpdate.isbn));
                    _a.label = 19;
                case 19: return [3 /*break*/, 21];
                case 20:
                    error_5 = _a.sent();
                    console.error('Error during updateTitle:', error_5);
                    return [3 /*break*/, 21];
                case 21: return [2 /*return*/];
            }
        });
    });
}
exports.updateBook = updateBook;



interface BookI {
    isbn: string;
    title: string;
    subtitle: string;
    abstract: string;
    author: string;
    publisher: string;
    price: number;
    numPages: number;
    cover?: string;
    //    cover: `http://localhost:4730/covers/${isbn}.png`,
};

class Book implements BookI {
    public isbn: string
    public title: string;
    public subtitle: string;
    public abstract: string;
    public author: string;
    public publisher: string;
    public price: number;
    public numPages: number;
    public cover?: string;

    constructor(isbn: string, title: string, subtitle: string, abstract: string, author: string, publisher: string, price: number, numPages: number, cover?: string) {
        this.isbn = isbn;
        this.title = title;
        this.subtitle = subtitle;
        this.abstract = abstract;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
        this.numPages = numPages;
        this.cover = cover || `http://localhost:4730/covers/${isbn}.png`;
    }

    toString(): string {
        return JSON.stringify(this)
    }

    static fromObject(obj: BookI) {
        return new Book(
            obj.isbn,
            obj.title,
            obj.subtitle,
            obj.abstract,
            obj.author,
            obj.publisher,
            obj.price,
            obj.numPages,
            obj.cover
        )
    }
}

export { Book};
export type {BookI};
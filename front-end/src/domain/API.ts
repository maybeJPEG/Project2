import { Book, BookI } from "./BookInterface";
const url: string = "http://localhost:4730/";

async function getAll(): Promise<Book[] | undefined> {

  try {
    const response: Response = await fetch(url + "books");

    if (!response.ok) {
      const returnText: string = await response.text();
      throw new Error(returnText);
    }

    const allBooks: BookI[] = await response.json();

    const bookList: Book[] = allBooks.map((bookData) => Book.fromObject(bookData));

    return bookList;

  }


  catch (error: any) {

    console.error('Error:', error.message);
    throw new Error(error.message);
  }

}

async function getByIsbn(isbn: string): Promise<Book | undefined> {
  try {
    const response: Response = await fetch(url + "books/" + isbn);

    if (!response.ok) {
      const returnText: string = await response.text();
      throw new Error(returnText);
    }

    const book: BookI = await response.json();
    console.log(book);
    const bookObject = Book.fromObject(book)
    console.log(bookObject)
    console.log(bookObject.toString())
    return bookObject
  }

  catch (error: any) {

    console.error('Error:', error.message);

  }
  return undefined
}

async function deleteByIsbn(isbn: number) {

  try {
    const response: Response = await fetch(url + "books/" + isbn, { method: 'DELETE' });

    if (!response.ok) {
      const returnText: string = await response.text();
      throw new Error(returnText);
    }

    const book: Book = await response.json();
    console.log(book);
    console.log("DELETED BOOK " + isbn)
  }

  catch (error: any) {

    console.error('Error:', error.message);

  }

}

async function postBook(book: Book) {

  try {

    if (book.isbn == '') {
      book.isbn = generateRandomIsbn();
    }

    console.log(Book)
    
    const response = await fetch(url + "books", {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });


    if (!response.ok) {
      let resp = await response.text()
      console.log(resp)
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

function generateRandomIsbn(): string {
  let isbn = '978';
  for (let i = 0; i < 10; i++) {
    isbn += Math.floor(Math.random() * 10);
  }
  return isbn;
}


async function updateBook(bookToUpdate: Book) {

  try {
    const response = await fetch(url + "books/" + bookToUpdate.isbn);
    if (response.ok) {
      const existingBook = await response.json();

      if (existingBook.title !== bookToUpdate.title) {
        // Update the title if the ISBN matches
        existingBook.title = bookToUpdate.title;

        // Perform PUT request to update the book in the API
        const updateResponse = await fetch(url + "books/" + bookToUpdate.isbn, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(existingBook),
        });

        if (updateResponse.ok) {
          console.log(`Title updated for ISBN ${bookToUpdate.isbn}`);
        } else {
          console.error(`Failed to update title for ISBN ${bookToUpdate.isbn}`);
        }
      }

      if (existingBook.subtitle !== bookToUpdate.subtitle) {
        // Update the title if the ISBN matches
        existingBook.subtitle = bookToUpdate.subtitle;

        // Perform PUT request to update the book in the API
        const updateResponse = await fetch(url + "books/" + bookToUpdate.isbn, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(existingBook),
        });

        if (updateResponse.ok) {
          console.log(`Subtitle updated for ISBN ${bookToUpdate.isbn}`);
        } else {
          console.error(`Failed to update subtitle for ISBN ${bookToUpdate.isbn}`);
        }
      }

      if (existingBook.abstract !== bookToUpdate.abstract) {
        // Update the title if the ISBN matches
        existingBook.abstract = bookToUpdate.abstract;

        // Perform PUT request to update the book in the API
        const updateResponse = await fetch(url + "books/" + bookToUpdate.isbn, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(existingBook),
        });

        if (updateResponse.ok) {
          console.log(`Abstract updated for ISBN ${bookToUpdate.isbn}`);
        } else {
          console.error(`Failed to update abstract for ISBN ${bookToUpdate.isbn}`);
        }
      }

      if (existingBook.author !== bookToUpdate.author) {
        // Update the title if the ISBN matches
        existingBook.author = bookToUpdate.author;

        // Perform PUT request to update the book in the API
        const updateResponse = await fetch(url + "books/" + bookToUpdate.isbn, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(existingBook),
        });

        if (updateResponse.ok) {
          console.log(`Author updated for ISBN ${bookToUpdate.isbn}`);
        } else {
          console.error(`Failed to update author for ISBN ${bookToUpdate.isbn}`);
        }
      }

      if (existingBook.publisher !== bookToUpdate.publisher) {
        // Update the title if the ISBN matches
        existingBook.publisher = bookToUpdate.publisher;

        // Perform PUT request to update the book in the API
        const updateResponse = await fetch(url + "books/" + bookToUpdate.isbn, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(existingBook),
        });

        if (updateResponse.ok) {
          console.log(`Publisher updated for ISBN ${bookToUpdate.isbn}`);
        } else {
          console.error(`Failed to update publisher for ISBN ${bookToUpdate.isbn}`);
        }
      }

      if (existingBook.price !== bookToUpdate.price) {
        // Update the title if the ISBN matches
        existingBook.price = bookToUpdate.price;

        // Perform PUT request to update the book in the API
        const updateResponse = await fetch(url + "books/" + bookToUpdate.isbn, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(existingBook),
        });

        if (updateResponse.ok) {
          console.log(`Price updated for ISBN ${bookToUpdate.isbn}`);
        } else {
          console.error(`Failed to update price for ISBN ${bookToUpdate.isbn}`);
        }
      }

      if (existingBook.numPages !== bookToUpdate.numPages) {
        // Update the title if the ISBN matches
        existingBook.numPages = bookToUpdate.numPages;

        // Perform PUT request to update the book in the API
        const updateResponse = await fetch(url + "books/" + bookToUpdate.isbn, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(existingBook),
        });

        if (updateResponse.ok) {
          console.log(`Number of pages updated for ISBN ${bookToUpdate.isbn}`);
        } else {
          console.error(`Failed to update number of pages for ISBN ${bookToUpdate.isbn}`);
        }
      }

      else {
        console.log(`The provided book has the same data as the existing one with ISBN ${bookToUpdate.isbn}`);
      }
    } else {
      console.log(`No book found with ISBN ${bookToUpdate.isbn}`);
    }
  } catch (error) {
    console.error('Error during updateTitle:', error);
  }

}

export {
  getAll,
  getByIsbn,
  deleteByIsbn,
  postBook,
  updateBook,
}
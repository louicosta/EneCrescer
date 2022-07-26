const Book = require('../src/models/bookModel')

describe("Testing book schema", () => {
  const books = new Book({
    id: "7",
    title: "Book test",
    author: "The author",
    publishing: "The publisher",
    pageNumber: 500,
    ageRating: "Age",
    description: "Description of the book"
  });

  it("Title", () => {
    expect(books.title).toBe("Book test");
  });
  it("Author", () => {
    expect(books.author).toBe("The author");
  });
  it("Publishing", () => {
    expect(books.publishing).toBe("The publisher");
  });
  it("Page Number", () => {
    expect(books.pageNumber).toStrictEqual(500);
  });
  it("Age Rating", () => {
    expect(books.ageRating).toBe("Age");
  });
  it("Description", () => {
    expect(books.description).toBe("Description of the book");
  });
  it("New book on database", () => {
    books.save().then((register) => {
      expect(register.title).toBe(" ");
    });
  });
});

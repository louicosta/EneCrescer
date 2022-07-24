const Movie = require('../src/models/movieModel')

describe("Testing movie schema", () => {
  const movies = new Movie({
  id: "15",
  title: "The Movie",
  director: "The director",
  producer: "The real director",
  duration: 180,
  whereWatch: "Cinema",
  ageRating: "Age",
  synopsis: "A bad movie synopsis"
  });

  it("Title", () => {
    expect(movies.title).toBe("The Movie");
  });
  it("Director", () => {
    expect(movies.director).toBe("The director");
  });
  it("Producer", () => {
    expect(movies.producer).toBe("The real director");
  });
  it("Duration Episode", () => {
    expect(movies.duration).toStrictEqual(180);
  });
  it("Where Watch", () => {
    expect(movies.whereWatch).toBe("Cinema");
  });
  it("Age Rating", () => {
    expect(movies.ageRating).toBe("Age");
  });
  it("Synopsis", () => {
    expect(movies.synopsis).toBe("A bad movie synopsis");
  });
  it("New movie on database", () => {
    movies.save().then((register) => {
      expect(register.title).toBe(" ");
    });
  });
});

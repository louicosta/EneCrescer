const Serie = require('../src/models/seriesModel')

describe("Testing serie schema", () => {
  const series = new Serie({
  id: "62ddd316e95f300b7e3acbd6",
  title: "The Serie",
  producer: "The producer",
  originalBroadcaster: "The real original broadcaster",
  durationEpisode: 30,
  whereWatch: "Anywhere",
  ageRating: "Age",
  genre: "No genre here",
  synopsis: "The serie synopsis"
  });

  it("Title", () => {
    expect(series.title).toBe("The Serie");
  });
  it("Producer", () => {
    expect(series.producer).toBe("The producer");
  });
  it("Orginal Broadcaster", () => {
    expect(series.originalBroadcaster).toBe("The real original broadcaster");
  });
  it("Duration Episode", () => {
    expect(series.durationEpisode).toStrictEqual(30);
  });
  it("where Watch", () => {
    expect(series.whereWatch).toBe("Anywhere");
  });
  it("Age Rating", () => {
    expect(series.ageRating).toBe("Age");
  });
  it("Genre", () => {
    expect(series.genre).toBe("No genre here");
  });
  it("Synopsis", () => {
    expect(series.synopsis).toBe("The serie synopsis");
  });
  it("New serie on database", () => {
    series.save().then((register) => {
      expect(register.title).toBe(" ");
    });
  });
});

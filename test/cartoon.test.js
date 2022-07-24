const Cartoon = require('../src/models/cartoonModel')

describe("Testing cartoon schema", () => {
  const cartoons = new Cartoon({
  id: "30",
  title: "The Cartoon",
  creator: "The creator",
  originalBroadcaster: "The original broadcaster",
  durationEpisode: 15,
  whereWatch: "On16",
  ageRating: "Age",
  synopsis: "The cartoon synopsis"
  });

  it("Title", () => {
    expect(cartoons.title).toBe("The Cartoon");
  });
  it("Creator", () => {
    expect(cartoons.creator).toBe("The creator");
  });
  it("Orginal Broadcaster", () => {
    expect(cartoons.originalBroadcaster).toBe("The original broadcaster");
  });
  it("Duration Episode", () => {
    expect(cartoons.durationEpisode).toStrictEqual(15);
  });
  it("where Watch", () => {
    expect(cartoons.whereWatch).toBe("On16");
  });
  it("Age Rating", () => {
    expect(cartoons.ageRating).toBe("Age");
  });
  it("Synopsis", () => {
    expect(cartoons.synopsis).toBe("The cartoon synopsis");
  });
  it("New cartoon on database", () => {
    cartoons.save().then((register) => {
      expect(register.title).toBe(" ");
    });
  });
});

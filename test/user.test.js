const User = require('../src/models/userModel')

describe("Testing user schema", () => {
  const users = new User({
    id: "62ddd316e95f300b7e3acbd6",
    name: "Test Driver",
    email: "testdriver@email.com",
    password: "testpassword"
  });

  it("Name", () => {
    expect(users.name).toBe("Test Driver");
  });
  it("Email", () => {
    expect(users.email).toBe("testdriver@email.com");
  });
  it("Password", () => {
    expect(users.password).toBe("testpassword");
  });
  it("New user on database", () => {
    users.save().then((register) => {
      expect(register.title).toBe(" ");
    });
  });
});

const supertest = require("supertest");
const app = require("../api.js");
const api = supertest(app);

describe("When requesting books", () => {
  test("Server gets all books", async () => {
    const res = await api.get("/api/books");
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(5);
  });
});

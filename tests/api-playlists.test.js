const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const apiTest = supertest(app);

test("should return 200 OK", async () => {
  await apiTest.get("/api/playlists").expect(200);
});

afterAll(async () => {
  await mongoose.connection.close();
});

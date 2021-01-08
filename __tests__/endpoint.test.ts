import app from "../src/index";
import supertest from "supertest";

const request = supertest(app);
it("Checking endpoint basic access", async (done) => {
  const res = await request.get("/");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Hello world!");
  done();
});

// Check 404 error code
it("Checking that entering undefined endpoint gives 404", async (done) => {});
// Test successful post

// Test unsuccessful post (image not found)

const assert = require("node:assert");
const { test, after, beforeEach } = require("node:test");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const helper = require("./test_helper");
const Blog = require("../models/blog");

const api = supertest(app);

beforeEach(async () => {
  await Blog.deleteMany({});
  await Blog.insertMany(helper.initialBlogs);
});

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("all blogs are returned", async () => {
  const blogs = await helper.blogInDb();

  assert.strictEqual(blogs.length, helper.initialBlogs.length);
});

test('checking that unique identifier is "id" instead of "_id"', async () => {
  const blogs = await helper.blogInDb();

  assert.ok(blogs[0].id);
  assert.ok(!blogs[0]._id);
});

after(async () => {
  await mongoose.connection.close();
});

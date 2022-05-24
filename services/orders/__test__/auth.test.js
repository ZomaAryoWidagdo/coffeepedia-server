const request = require("supertest");
const app = require("../app");
const { createToken } = require("../helpers/jwt");
const auth = require("../middlewares/auth");
const { User } = require("../models/index");

let accesstoken;

const userData = {
  email: "admin@gmail.com",
  password: "admin",
  username: "admin",
  phoneNumber: "088888888888",
  address: "Bandung",
  balance: 0,
};

beforeAll(async () => {
  const user = await User.create(userData);

  const payload = {
    id: user.id,
    email: user.email,
  };

  accesstoken = createToken(payload);
}, 30000);

afterAll(async () => {
  await User.truncate({
    cascade: true,
    restartIdentity: true,
  });
}, 30000);

describe("Auth Test", () => {
  it("should return invalid accesstoken error", async () => {
    const res = await request(app).get("/orders").expect(401);
    expect(res.body).toEqual(expect.any(Object));
    expect(res.body.message).toBe(`Unauthorized`);
  });
});

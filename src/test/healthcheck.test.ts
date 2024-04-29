import supertest from "supertest";
import { describe, expect, test, beforeAll } from "@jest/globals";
import { userApp } from "../user/user.app";
import dbInit from "../songs/infraestructure/db/mongo";

dbInit().then();

const usersAPI = supertest(userApp);
let token = "";

describe("API Health tests: ", () => {
  describe("Conectivity check:", () => {
    test("Users Route Alive!:", async () => {
      const loginTask = await usersAPI.post("/login").send({
        email: "testo@gmail.com",
        password: "12345678Kh!",
      });
      expect(loginTask.body?.token).toBeDefined();
    });
  });
});

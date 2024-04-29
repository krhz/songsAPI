import supertest from "supertest";
import { describe, afterAll, test, beforeAll } from "@jest/globals";
import { songApp } from "../songs/song.app";
import { userApp } from "../user/user.app";
import dbInit from "../songs/infraestructure/db/mongo";

dbInit().then();

const songsAPI = supertest(songApp);
const usersAPI = supertest(userApp);
let token = "";

beforeAll(async () => {
  const loginTask = await usersAPI.post("/login").send({
    email: "testo@gmail.com",
    password: "12345678Kh!",
  });

  token = loginTask.body?.token;
});

describe("Songs API tests bundle: ", () => {
  describe("Get songs:", () => {
    test("no token given to /getMySongs returns code 403:", async () => {
      await songsAPI.get("/getMySongs").expect(403);
    });
    test("no token given to /getSongs returns 403: ", async () => {
      await songsAPI.get("/getSongs").expect(403);
    });
    test("Getting All Songs", async () => {
      await songsAPI
        .get("/getSongs")
        .set("Content-Type", `application/json`)
        .set("authorization", `Bearer ${token}`)
        .expect(200);
    });
    test("Getting All My Songs", async () => {
      await songsAPI
        .get("/getMySongs")
        .set("Content-Type", `application/json`)
        .set("authorization", `Bearer ${token}`)
        .expect(200);
    });
  });

  describe("Create Songs route", () => {
    test("Create song:", async () => {
      await songsAPI
        .post("/createSong")
        .set("Content-Type", `application/json`)
        .set("authorization", `Bearer ${token}`)
        .send({
          author: "Dj Testo",
          title: "Un testeo hasta el piso!",
          description: "Mi test album en la música llegará!!",
        })
        .expect(200);
    });
  });
});

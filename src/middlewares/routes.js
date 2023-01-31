import { Database } from "../database.js";
import { randomUUID } from "node:crypto";
import { buildRoutePath } from "../utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath(""),
    handler: (req, res) => {},
  },
  {
    method: "POST",
    path: buildRoutePath(""),
    handler: (req, res) => {},
  },
  {
    method: "DELETE",
    path: buildRoutePath(""),
    handler: (req, res) => {},
  },
  {
    method: "PUT",
    path: buildRoutePath(""),
    handler: (req, res) => {},
  },
  {
    method: "PATCH",
    path: buildRoutePath(""),
    handler: (req, res) => {},
  },
];

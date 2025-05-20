import { text } from "body-parser";
import express from "express";

const app = express();

// your routes will go here...

app.listen(8080, function () {
  console.log("Server is listening on port 8080...");
});

app.get("/messages", function (request, response) {
  response.json({ message: "Hello, World!" });
});

app.get("/people", function (request, response) {
  response.json({
    who: [
      { name: "Ryan", gender: "boy" },
      { name: "Emily", gender: "girl" },
    ],
  });
});

app.post("/messages", function (request, response) {
  response.json({ message: "Hello, World!" });
});
app.use(express.json());

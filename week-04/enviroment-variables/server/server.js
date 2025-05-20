import express from "express";

const app = express();

app.use(express.json());

app.listen(8080, function () {
  console.log("server is running in port 8080");
});

app.get("/", function (request, response) {
  response.json({ message: "welcome to my server" });
});

// ===============================================================

//import dotenv
import dotenv from "dotenv";
//configure the dotenv package to initialise our .env file
dotenv.config();

//import pg
import pg from "pg";

const db = new pg.Pool({
  connectionString: process.env.DB_URL,
});

// console.log(db);

//GET --> READ data from the database
app.get("/people", async function (request, response) {
  //read the staff data in our database
  const query = await db.query(`SELECT * FROM people;`);
  //this is a Response object
  //parse the data into JSON and wrangle the data to just be the rows property
  const data = response.json(query.rows);
  //   console.log(data); //this is our wrangled data in JSON format
});

//data is now shown on localhost:8080/people

//POST --> CREATE new data in the database
app.post("/newPeople", function (request, response) {
  //create a new entry in the staff table
  //object that contains our new data --> body
  const body = request.body;
  //   console.log(body);
  //a database query to create new data into our table
  const query = db.query(
    `INSERT INTO people (name, gender, smelly) VALUES($1, $2, $3)`,
    [body.name, body.gender, body.smelly]
  );
  // const data = response.json(query);
  // this is not necessary, just in case you want to see your query in the console
});

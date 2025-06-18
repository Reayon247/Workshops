// /app/posts/new/page.js
import pg from "pg";

export default function NewPostPage() {
  async function handleSavePost(formData) {
    "use server"; // makes this function run _on the server_, as if by magic API.
    console.log("Saving post to the database...");

    // connect to our database (make sure there is a DATABASE_URL in your .env.local)
    const db = new pg.Pool({ connectionString: process.env.NEXT_POSTGRES });

    // get the form data from the formData object next provdides
    const name = formData.get("name");
    const gender = formData.get("gender");
    const smelly = formData.get("smelly");

    // insert the data into postgres
    await db.query(
      `INSERT INTO people (name, gender, smelly) VALUES ($1, $2, $3)`,
      [name, gender, smelly]
    );
    console.log("person saved!");
  }

  return (
    <form action={handleSavePost}>
      <label htmlFor="name">name</label>
      <input id="name" name="name" type="text" />
      <label htmlFor="gender">gender</label>
      <textarea id="gender" name="gender" />
      <label htmlFor="smelly">smelly</label>
      <input id="smelly" name="smelly" type="boolean" />
      <button type="submit">Save</button>
    </form>
  );
}

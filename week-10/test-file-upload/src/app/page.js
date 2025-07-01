import { FileUpload } from "@/components/FileUpload";
import { db } from "@/utils/dbConnection";
import Image from "next/image";

export default async function Home() {
  const query = await db.query(
    "SELECT * from storage.objects where bucket_id = 'sd19moodboard'"
  );
  const data = query.rows;
  console.log(data);

  return (
    <>
      <h1>Image TESTING</h1>
      <FileUpload />
      {data.map((image) => (
        <div key={image.id}>
          <Image
            src={`https://ppbjgjqzxjcwfujewhzx.supabase.co/storage/v1/object/public/sd19moodboard/${image.name}`}
            alt={image.name}
            width={300}
            height={200}
          />
        </div>
      ))}
    </>
  );
}

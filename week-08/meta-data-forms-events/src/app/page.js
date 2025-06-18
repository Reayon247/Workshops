import Image from "next/image";
import happy from "@/../public/happy.jpg";

export const metadata = {
  title: "Posts - Next.js",
  description: "A simple blog built with Next.js",
};

export default function Home() {
  return (
    <>
      <h1 className="m-[5px] bg-sky-400 p-[10px] hover:bg-amber-400 w-fit">
        Hello!
      </h1>
      <Image src={happy} alt="happy happy cat" width={300} />
    </>
  );
}

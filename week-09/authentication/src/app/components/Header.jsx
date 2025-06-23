import Link from "next/link";

import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

//this auth object contains the users' data
import { auth } from "@clerk/nextjs/server";

export default async function Header() {
  //destructure the userId from the auth object
  //you can use userId to match users and their own data by sotring the userId in the database
  //you will use SQL to build a relationship between the clerk Id (userId) and a user's data
  //auth is async!
  const { userId } = await auth();

  return (
    <>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/secret"}>secret</Link>
      </nav>
      <SignedIn>
        {/* these components will render when the user is signed-in */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* these components will render when the user is signed-out */}
        <SignInButton mode="modal" />
        <SignUpButton mode="modal" />
      </SignedOut>
      {/* <p>{userId}</p> this is for reference, don't reveal the userId */}
    </>
  );
}

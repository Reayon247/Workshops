import { Hello } from "./Hello";

export default function Home() {
  return (
    <>
      <h1>home</h1>
      <Hello name="World" age={23} />
    </>
  );
}

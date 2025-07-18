export default function NavBar() {
  return (
    <nav className="flex justify-center">
      <a
        href="#"
        className="-2 rounded-2xl border-2 border-indigo-800 bg-sky-400 p-4 hover:bg-amber-400"
      >
        Home
      </a>
      <a
        href="#"
        className="-2 rounded-2xl border-2 border-indigo-800 bg-sky-400 p-4 hover:bg-amber-400"
      >
        About
      </a>
      <a
        href="#"
        className="-2 rounded-2xl border-2 border-indigo-800 bg-sky-400 p-4 hover:bg-amber-400"
      >
        Contact
      </a>
      <button onClick={() => console.log("Clicked button!")}>Click me!</button>
    </nav>
  );
}

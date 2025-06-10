import { Routes, Route, Link } from "react-router";
import About from "./components/About.jsx";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";

export default function app() {
  return (
    <>
      <h1>Welcome to my react app</h1>
      <Link to="/hello">Hello</Link>
      <Link to="/about">About</Link>
      <Link to="/">Go Home</Link>
      <Routes>
        <Route path="/hello" element={<h2>Hello</h2>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

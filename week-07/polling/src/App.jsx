import { useState, useEffect } from "react";

export default function App() {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    async function fetchFox() {
      const res = await fetch("https://randomfox.ca/floof/");
      const data = await res.json();
      setImgUrl(data.image);
    }

    fetchFox();

    const intervalId = setInterval(fetchFox, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Our Fleet of Foxes</h2>
      <img src={imgUrl} />
    </div>
  );
}

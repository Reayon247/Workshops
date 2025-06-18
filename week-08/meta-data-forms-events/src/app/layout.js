import { Rowdies } from "next/font/google";
import "./globals.css";

const Rowdiesfont = Rowdies({
  weight: "300",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Blog",
  description: "A simple blog built with Next.js",
  openGraph: {
    title: "Next.js Blog",
    description: "A simple blog built with Next.js",
    type: "website",
    url: "https://next-comments-postgres.vercel.app/",
    images: ["https://next-comments-postgres.vercel.app/og-image.png"], // add an appropriate image to your public folder - need to be in an array
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Rowdiesfont.className}>{children}</body>
    </html>
  );
}

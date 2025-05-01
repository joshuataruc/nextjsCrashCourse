import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Link href="/articles/news-123?lang=en" className="bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 m-5 mb-5 rounded-lg">Read in English</Link>
      <Link href="/articles/news-123?lang=es" className="bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 m-5 mb-5 rounded-lg">Read in Spanish</Link>
      <Link href="/articles/news-123?lang=fr" className="bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 m-5 mb-5 rounded-lg">Read in French</Link>

    </div>
  );
}

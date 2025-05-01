import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Link href="/blog" className="bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 mx-2 my-2 rounded-lg">Blog</Link>
      <Link href="/products" className="bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 m-5 mb-5 rounded-lg">Products</Link>
    </div>
  );
}

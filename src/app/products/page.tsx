import Link from "next/link"
export default function Products() {
    const productId = 100;
    return (
        <>
            {/* <Link href="/" className="bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 m-5 mb-5 rounded-lg">Home</Link> */}
            <h1>Products</h1>
            <h2>
                <Link href="/products/1" className="underline decoration-blue-500 underline-offset-2">Products 1</Link>
            </h2>
            <h2>
                <Link href="/products/2" className="underline decoration-blue-500 underline-offset-2">Products 2</Link>
            </h2>
            <h2>
                {/* The 'replace' attribute prevents adding a new history entry when navigating to this link. Instead, it replaces the current history state, keeping the browser's back button behavior clean. */}
                <Link href="/products/3" className="underline decoration-blue-500 underline-offset-2" replace>Products 3</Link>
            </h2>
            <h2>
                <Link href={`/products/${productId}`} className="underline decoration-blue-500 underline-offset-2">Product {productId}</Link>
            </h2>
        </>
    )
}
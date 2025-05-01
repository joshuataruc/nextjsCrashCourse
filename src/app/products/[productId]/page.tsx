import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string }>
}

export const generateMetadata = async ({
     params,
    } : Props) : Promise<Metadata> => {
    const id = (await params).productId;
    return {
        title : `Product ${id}`
    }
}

// Dynamic routing in Next.js: params are retrieved based on the folder name [productId].
// Example URL: http://localhost:3000/products/10000
// 'products' is the main route folder, and '10000' is the dynamic segment passed as 'productId'.
export default async function ProductDetails({params}: Props) {
    // Extracting 'productId' from the params object to display specific product details.
    const productId = (await params).productId;
    return <h1>Details about product {productId}</h1>;
}

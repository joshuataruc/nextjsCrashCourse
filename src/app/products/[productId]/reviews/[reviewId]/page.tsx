import { notFound } from "next/navigation";
export default async function ProductReview({
    // Dynamic routing in Next.js: the 'params' object contains route parameters
    // based on the folder structure and URL. For example:
    // URL: http://localhost:3000/products/10000/reviews/500
    // Here, '10000' is the productId, and '500' is the reviewId, 
    // which are retrieved dynamically as part of 'params'.
    params,
}: {
    params: Promise<{
        productId: string; // The dynamic product ID segment from the URL
        reviewId: string;  // The dynamic review ID segment from the URL
    }>;
}) {
    // Extracting 'productId' and 'reviewId' from the 'params' object.
    const { productId, reviewId } = await params;
    if (parseInt(reviewId) > 1000){
        notFound();
    }
    // Returning a React component that displays the product and review details.
    return (
        <div>
            <h1>Review {reviewId} for product {productId}</h1>
        </div>
    );
}

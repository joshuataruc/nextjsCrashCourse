export default async function Docs({
    // This function handles dynamic routing in Next.js for documentation pages.
    // The 'params' object contains dynamic route parameters provided by Next.js.
    params,
}: {
    params: Promise<{ slug: string[] }>; // 'slug' is an array of strings representing parts of the dynamic route.
}) {
    // Extracting the 'slug' array from the 'params' object using destructuring and await.
    const { slug } = await params;

    // The optional chaining operator (?.) ensures no errors occur if 'slug' is null or undefined.
    // It safely accesses 'length', and if 'slug' is not defined, the condition evaluates to false.
    if (slug?.length === 2) {
        // If the 'slug' array has exactly two segments, render a paragraph with both the feature and concept.
        return (
            <p>viewing docs for feature {slug[0]} and concept {slug[1]}</p>
        );
    } else if (slug?.length === 1) {
        // If the 'slug' array has exactly one segment, render a paragraph showing just the feature.
        return (
            <p>viewing docs for feature {slug[0]}</p>
        );
    }

    // If the 'slug' array is empty or undefined, render the home page for the documentation.
    return <h1>Docs Home Page</h1>;
}

import Link from "next/link"
export default async function NewsArticle({params, searchParams} :{
    params : Promise <{ articleId: string}>;
    searchParams : Promise<{lang? : "en" | "es" | "fr"}>
}) {
    const {articleId} = await params;
    const {lang = "en"} = await searchParams;
    const linkStyle = "font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2";
    return (
        <div>
            <h1>News {articleId}</h1>
            <p>Reading in {lang}</p>
            <div>
                <Link href={`/articles/${articleId}?lang=en`} className={linkStyle}>English</Link>
                <Link href={`/articles/${articleId}?lang=es`} className={linkStyle}>Spanish</Link>
               <Link href={`/articles/${articleId}?lang=fr`} className={linkStyle}>French</Link>
            </div>
        </div>
    )
}
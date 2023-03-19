import Head from "next/head"

export default function Header({
    title = "Yori",
    metaTitle = "",
    metaDescription = "",
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="author" content="MDIA 2109" />
            <meta property="title"  content={metaTitle} />
            <meta property="description"  content={metaDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet"></link>
            <link rel="icon" href="/site-logo.png" />
        </Head>
    )
}
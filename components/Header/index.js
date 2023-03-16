import Head from "next/head"

export default function Header({
    title = "",
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
            <link rel="icon" href="" />
        </Head>
    )
}
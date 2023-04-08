import Head from "next/head"

export default function Header({
    title,
    metaTitle = process.env.NEXT_PUBLIC_TITLE,
    metaDescription = "YORI is a mobile web application cook book that promotes a variety of healthy, affordable meals, with an additional interactive game feature.",
}) {
    const envTitle = process.env.NEXT_PUBLIC_TITLE;

    return (
        <Head>
            <title>{`${envTitle} ${title ? `- ${title}` : ''}`}</title>
            <meta name="author" content="MDIA 2109" />
            <meta property="title"  content={`${envTitle} ${metaTitle ? `- ${metaTitle}` : ''}`} />
            <meta property="description"  content={metaDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logos/tab-logo.svg" />
        </Head>
    )
}
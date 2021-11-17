import Head from 'next/head'

export default function blogPostList({blogList}) {
    return (
        <div>
            <Head>
                <title>Blog Posts</title>
                <meta name="description" content="Hello :)" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div id="frontpage" className="px-10 min-h-screen bg-gray-700 py-6 flex flex-col justify-center sm:py-12">
                {blogList.map((element) => <a className="text-gray-400 block" href={"./" + element.slug}>{element.title}</a>)}
            </div>
        </div>
        
    )
}

export function getStaticProps() {
    const fs = require("fs")
    const blogList = fs.readdirSync("data/blog/posts/").map((element) => {
        const bPost = fs.readFileSync("data/blog/posts/" + element).toString().split("@==contentstartshere==@")
        console.log(bPost)
        const metadata = JSON.parse(bPost[0])
        
        const sentences = bPost[1].split(".")
        let excerpt = sentences[0]
        let i = 1
        while (excerpt.length < 180) {
            excerpt += ". "+sentences[i]
            i += 1
        }
        return {
            ...metadata,
            excerpt: excerpt,
            slug: element.split(".")[0]
        }
    })
    return {
        props: {
            blogList
        }
    }
}
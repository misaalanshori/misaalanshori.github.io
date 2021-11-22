import Head from 'next/head'
import Link from 'next/link'


export const config = {
    unstable_runtimeJS: false
  };


function PostItem({data}) {
    
    return (
        <div className="mb-4 pb-4 w-full md:w-7/12 self-center border-b-2 border-gray-500">
            <a href={"./" + data.slug} className="text-gray-100">
                <h2 className="text-2xl font-semibold text-gray-50 mb-1">{data.title}</h2> 
                <span className="text-gray-900 font-semibold px-2 py-0 border-2 border-gray-500 bg-gray-100 rounded-md block text-center sm:inline-block">{data.language}</span> <span className="opacity-60 text-sm">by {data.writer}, {data.publishedDate}</span>
                <p className="text-xl">{data.excerpt}</p>
            </a>  
        </div>
    )
    
}


export default function blogPostList({blogList}) {
    return (
        <div>
            <Head>
                <title>Blog Posts</title>
                <meta name="description" content="Hello :)" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="bloglist" className="px-10 min-h-screen bg-gray-700 py-6 flex flex-col justify-center sm:py-12">
                <div className="w-full md:w-7/12 self-center opacity-60">
                    <Link href="/">Back to Homepage</Link>
                </div>
                
                <h1 className="text-gray-100 text-8xl text-center mb-8">Blog Posts</h1>
                {blogList.map((element) => <PostItem key={element.slug} data={element}/>)}
            </div>
        </div>
        
    )
}

export async function getStaticProps() {
    const fs = require("fs")
    const blogList = fs.readdirSync("data/blog/posts/").map((element) => {
        const bPost = fs.readFileSync("data/blog/posts/" + element).toString().split("@==contentstartshere==@")
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
            excerpt: excerpt + "...",
            slug: element.split(".")[0]
        }
    })
    return {
        props: {
            blogList
        }
    }
}
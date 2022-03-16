import Head from 'next/head'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'


export const config = {
    unstable_runtimeJS: false
  };


export default function blogPost({postMetadata, postContents}) {
    return (
        <div>
            <Head>
                <title>{postMetadata.title}</title>
                <meta name="description" content="Hello :)" />
                <link rel="icon" type="image/png" href="/favicon.png"/>
            </Head>
            <div id="blogpost" className="px-10 min-h-screen bg-gray-700 py-6 flex flex-col justify-center sm:py-12">
                <div className="w-5/6 md:w-7/12 self-center opacity-60">
                    <Link href="/posts">Back to Blog Posts</Link>
                </div>
                <div className="w-5/6 md:w-7/12 self-center">
                    <div className="prose markdown self-center w-auto">
                        <ReactMarkdown className="text-gray-200 self-center " rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
                            {`# ${postMetadata.title}
                            
                            ${postContents}`}
                        </ReactMarkdown>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const fs = require("fs")
    const paths = fs.readdirSync("data/blog/posts").map(
            (element) => ({
                    params: {
                        post: element.split(".")[0]
                    }
                })
        )
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const fs = require("fs")
    let blogFiles = fs.readdirSync("data/blog/posts")
    let postdata
    if (blogFiles.includes(`${params.post}.pinned.md`)) {
        postdata = fs.readFileSync(`data/blog/posts/${params.post}.pinned.md`)
        
    } else if (blogFiles.includes(`${params.post}.md`)) {
        postdata = fs.readFileSync(`data/blog/posts/${params.post}.md`)
        
    }
    postdata = postdata.toString().split("@==contentstartshere==@")
    let postMetadata = JSON.parse(postdata[0])
    let postContents = postdata[1]

    return {
        props: {
            postMetadata,
            postContents
        }
    }
}
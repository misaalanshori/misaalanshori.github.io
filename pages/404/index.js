import Head from 'next/head'

export default function Fourofour() {
    return (
        <>
            <Head>
                <title>Oops, 404!</title>
                <meta name="description" content="Hello :)" />
                <link rel="icon" type="image/png" href="/favicon.png"/>
            </Head>
            <div id="404" className="px-10 min-h-screen bg-gray-700 py-6 flex flex-col justify-center items-center text-center sm:py-12">
                <h1 className="text-gray-300 text-4xl sm:text-8xl font-bold pb-1">Oh Hello!</h1>
                <h1 className="text-gray-300 text-2xl sm:text-6xl font-bold pb-4">You have reached the 404 page</h1>
                <a className='pb-1'>
                    <img className="rounded-2xl" src='https://source.unsplash.com/640x360?funny-animals' alt="Image of a funny animal"></img>
                </a>
                <p className='text-gray-400'>Image randomly sourced from <a href="https://unsplash.com/" target="_blank" rel="noreferrer">unsplash.com</a></p>
            </div>
        </>
        
    )
    
}
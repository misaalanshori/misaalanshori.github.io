import Head from 'next/head'

function LinkButtons(props) {
  return (
    <a href={props.url} target={props.newtab ? "_blank" : ""} rel="noreferrer" className="text-gray-500 inline-block bg-gray-300 hover:bg-gray-600 filter drop-shadow-lg hover:text-gray-200 rounded font-semibold px-2 py-1 mt-2 mr-2 w-auto">
      {props.text}
    </a>
  )
}


export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome!</title>
        <meta name="description" content="Hello :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-10 min-h-screen bg-gray-700 py-6 flex flex-col justify-center sm:py-12">
        <div>


          <p className="text-gray-400 text-sm">Hello! I am</p>
          <p className="text-3xl font-bold mb-1 mt-1 text-gray-300 filter drop-shadow-2xl">Muhammad Isa Al Anshori</p>
          <p className="text-gray-400 text-sm">Software Engineering Student</p>
          <LinkButtons url="https://github.com/misaalanshori" newtab="1" text="Github"/>
          <LinkButtons url="https://www.linkedin.com/in/muhammad-isa-al-anshori-876ba5193" newtab="1" text="LinkedIn"/>
          <LinkButtons url="https://instagram.com/misaalanshori" newtab="1" text="Instagram"/>
          <LinkButtons url="https://twitter.com/misaalanshori03" newtab="1" text="Twitter"/>
          <LinkButtons url="https://www.youtube.com/misaalanshori" newtab="1" text="Youtube"/>
        </div>
        
      </div>


    </div>
  )
}

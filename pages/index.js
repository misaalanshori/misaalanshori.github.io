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
        <div className="">
          <p className="text-gray-400 sm:text-xl lg:text-2xl">Hello! I am</p>
          <p className="text-2xl sm:text-4xl lg:text-7xl font-bold mb-1 mt-1 text-gray-300 filter drop-shadow-2xl">Muhammad Isa Al Anshori</p>
          <p className="text-gray-400 sm:text-xl lg:text-2xl">Software Engineering Student</p>
          <LinkButtons url="https://github.com/misaalanshori" newtab="1" text="Github"/>
          <LinkButtons url="https://www.linkedin.com/in/muhammad-isa-al-anshori-876ba5193" newtab="1" text="LinkedIn"/>
          <LinkButtons url="https://instagram.com/misaalanshori" newtab="1" text="Instagram"/>
          <LinkButtons url="https://twitter.com/misaalanshori03" newtab="1" text="Twitter"/>
          <LinkButtons url="https://www.youtube.com/misaalanshori" newtab="1" text="Youtube"/>
        </div>
        
      </div>
      <div className="px-10 min-h-screen bg-gray-700 py-6 flex flex-col sm:flex-row-reverse justify-center sm:py-12">

          <div className="flex flex-col justify-center text-center sm:text-right w-full">
            <p className="text-4xl font-bold mb-1 mt-1 text-gray-300 filter drop-shadow-2xl">I love making things</p>
            <p className="text-gray-400 text-xl">From software to hardware</p>
          </div>
          <div className="flex flex-col justify-center w-full">
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

import Head from 'next/head'
import TrackVisibility from 'react-on-screen'
import { useEffect, useState } from 'react'

function LinkButtons({url, newtab, text, hide, unhideDelay}) {
  return (
    <a 
    href={url} 
    target={newtab ? "_blank" : ""} 
    rel="noreferrer" 
    style={{transitionDelay: unhideDelay + "ms"}} 
    className={`transition duration-500 ease-in-out transform ${hide ? "-translate-y-32 opacity-0" : ""} text-gray-500 inline-block bg-gray-300 hover:bg-gray-600 filter drop-shadow-lg hover:text-gray-200 rounded font-semibold px-2 py-1 mt-2 mr-2 w-auto`}
    >
      {text}
    </a>
  )
}

function LinkActionButtons({url, action, newtab, text, unhideDelay, isVisible}) {
  return (
    <a 
    href={url} 
    target={newtab ? "_blank" : ""} 
    rel="noreferrer" 
    style={{transitionDelay: unhideDelay + "ms"}} 
    className={`transition duration-500 ease-in-out transform ${!isVisible ? "-translate-y-32 opacity-0" : ""} text-gray-500 inline-block bg-gray-300 hover:bg-gray-600 filter drop-shadow-lg hover:text-gray-200 rounded font-semibold px-2 py-1 mt-2 mr-2 w-full sm:w-3/4 md:w-5/6 sm:text-lg`}
    >
      {text}
    </a>
  )
}


export default function Home({featuredProjects}) {
  const [hideComponents, setHideComponents] = useState(true)
  useEffect(
    () => {
      setHideComponents(false)
      return () => {
        setHideComponents(true)
      }
    }
  )
  return (
    <div>
      <Head>
        <title>Welcome!</title>
        <meta name="description" content="Hello :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="frontpage" className="px-10 min-h-screen bg-gray-700 py-6 flex flex-col justify-center sm:py-12">
        <div className="">
          <p className={`transition duration-1000 ease-in-out delay-100 transform ${hideComponents ? "-translate-y-48 opacity-0" : ""} text-gray-400 sm:text-xl lg:text-2xl`}>Hello! I am</p>
          <p className={`transition duration-1000 ease-in-out delay-150 transform ${hideComponents ? "-translate-y-48 opacity-0" : ""} text-2xl sm:text-4xl lg:text-7xl font-bold mb-1 text-gray-300 filter drop-shadow-2xl`}>Muhammad Isa Al Anshori</p>
          <p className={`transition duration-1000 ease-in-out delay-200 transform ${hideComponents ? "-translate-y-48 opacity-0" : ""}  text-gray-400 sm:text-xl lg:text-2xl`}>Software Engineering Student</p>
          <LinkButtons hide={hideComponents} unhideDelay={200} url="https://github.com/misaalanshori" newtab="1" text="Github"/>
          <LinkButtons hide={hideComponents} unhideDelay={300} url="https://www.linkedin.com/in/muhammad-isa-al-anshori-876ba5193" newtab="1" text="LinkedIn"/>
          <LinkButtons hide={hideComponents} unhideDelay={400} url="https://instagram.com/misaalanshori" newtab="1" text="Instagram"/>
          <LinkButtons hide={hideComponents} unhideDelay={500} url="https://twitter.com/misaalanshori03" newtab="1" text="Twitter"/>
          <LinkButtons hide={hideComponents} unhideDelay={600} url="https://www.youtube.com/misaalanshori" newtab="1" text="Youtube"/>
        </div>
        
      </div>
      <div id="myprojects" className="px-10 min-h-screen bg-gray-700 py-6 flex flex-col sm:flex-row-reverse justify-center sm:py-12">

          <div className="flex flex-col justify-center text-center sm:text-right w-full">
            <p className="text-4xl lg:text-6xl font-bold mb-1 mt-1 text-gray-300 filter drop-shadow-2xl">I love making things</p>
            <p className="text-gray-400 text-xl lg:text-2xl">From software to hardware</p>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <TrackVisibility once>
              {featuredProjects.map(
                (element, index) => 
                <LinkActionButtons 
                key={element.key}
                url={element.url}
                action={""}
                text={element.title}
                unhideDelay={index * 50}/>
                )}
            </TrackVisibility>
            
          </div>
          

        
      </div>


    </div>
  )
}

export async function getStaticProps() {
  const fs = require("fs")

  // getting featured project
  let projectsJSON = JSON.parse(fs.readFileSync("data/projects.json"))
  let featuredProjects = []
  projectsJSON.featured.forEach(element => {
    featuredProjects.push(projectsJSON.projects[element])
  });

  return {
    props: {
      featuredProjects
    }
  }
}
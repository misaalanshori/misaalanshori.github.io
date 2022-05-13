import Head from 'next/head'
import { list } from 'postcss';
import { useEffect, useState } from 'react';

function TodoList() {
    const [input, setInput] = useState("")
    const [tList, settList] = useState([])
    useEffect(() => {
        if (localStorage.getItem("TodoList") == null || localStorage.getItem("TodoList") == "") {
            localStorage.setItem("TodoList", "[]")
        }
        settList(JSON.parse((localStorage.getItem("TodoList"))))
    }, [])
    useEffect(() => {
        localStorage.setItem("TodoList", JSON.stringify(tList))
    })
    function addTodo(text) {
        settList(tList.concat([{
            text: text,
            state: false
        }]))
        localStorage.setItem("TodoList", JSON.stringify(tList))
        
    }
    function removeTodo(index) {
        settList(tList.filter((v,i) => i != index))
        localStorage.setItem("TodoList", JSON.stringify(tList))
    }
    function updateTodo(index, text, state) {
        let listCopy = [...tList]
        listCopy[index] = {
            text: text,
            state: state
        }
        settList(listCopy)
        localStorage.setItem("TodoList", JSON.stringify(tList))
        
    }
    
    return (
        <div className='w-3/5 self-center grid'>

                <form className="flex items-center" onSubmit={(e) => {e.preventDefault(); addTodo(input); setInput("")}}>
                    <input value={input} onInput={(i) => setInput(i.target.value)} type="text" placeholder="What to do?" className='w-64 flex-1 basis-11/12 rounded-full p-1 px-2.5 transition-transform hover:scale-125 focus:scale-125 hover:translate-x-9 focus:translate-x-9'></input>
                    <button type="submit" className='flex-none border-2 rounded-full w-12 m-2 hover:bg-slate-100 text-gray-100  hover:text-gray-500 transition-colors'><span className='text-2xl relative font-extrabold bottom-0.5 '>+</span></button>
                </form>

                <div className='flex flex-col items-center my-2 transition-all'>
                    {tList.map((val,ind) =>(
    
                        <div key={ind} className='flex flex-row items-center w-full transition-all py-1 rounded-lg hover:bg-gray-200/10  hover:scale-105'>
                            <input type="checkbox" checked={val.state} onChange={() => updateTodo(ind, val.text, !val.state)} className='flex-none mx-2 w-6 h-6 rounded-lg'></input>
                            <span className={`flex-1 text-gray-100 ${val.state ? "line-through decoration-red-400 decoration-2":""}` }>{val.text}</span>
                            {console.log(val)}
                            <button type="button" onClick={() => removeTodo(ind)} className='flex-none border-2 rounded-full w-12 mx-2  hover:bg-slate-100 text-gray-100  hover:text-gray-500 transition-colors'><span className='text-xl relative font-medium bottom-0.5'>x</span></button>
                        </div>
                    ))}
                    
                </div>

        </div>
    )
}

export default function TodoListPage() {
    return (
        <div>
            <Head>
                <title>Todo List</title>
                <meta name="description" content="Hello :)" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="px-10 min-h-screen bg-gray-700 py-6 flex flex-col justify-center sm:py-12">
                <h1 className="text-gray-300 font-semibold text-center text-5xl mb-6">Todo List</h1>
                <TodoList></TodoList>
            </div>
        </div>
    )
}
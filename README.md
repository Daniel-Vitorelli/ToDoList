Explique o erro:

// App.jsx
import { useState } from 'react'
import Tasks from './components/tasks'

function App() {

  const [list, setList] = useState([
    {
      id : 1,
      title : 'Ler a bíblia',
      description : 'Você esta em Deuteronômio 7',
      isCompleted : false
    },
    {
      id : 2,
      title : 'Estudar para a OBMEP',
      description : 'Parar de ser vagabundo e vai logo',
      isCompleted : false
    },
    {
      id : 3,
      title : 'Estudar programação',
      description : 'Você esta fazendo isso agora',
      isCompleted : false
    }
  ])


  return (
    <div className='flex flex-col items-center bg-teal-300 h-screen w-screen gap-5'>
      <h1 className='text-4xl text-white font-bold drop-shadow-lg h-min'>Lista de Tarefas</h1>
      <Tasks list={list} setList={setList}/>
    </div>
  )
}

export default App







// components/Tasks.jsx
import { ChevronRight } from "lucide-react";
import { Trash } from "lucide-react";

function Tasks({list, setList}) {
    return (
        <ul className="bg-slate-100 p-4 rounded-md min-w-[500px] space-y-2">
            {list.map((item, index) => (
                <li className="flex gap-1">
                    <button className={
                    `bg-teal-600 w-full text-white p-1 rounded shadow-md text-left hover:bg-teal-700 
                    ${list[index].isCompleted ? 'line-through bg-teal-900 text-gray-400' : ''}`}
                    onClick={() => {
                        setList(
                            list.map((item2, index2) => {
                                if (index2 === index){
                                    return (...item2, isCompleted : !list[index].isCompleted)
                                }
                                return index2;
                            })
                        )
                    }}>
                        {list[index].title}
                    </button>
                    <button className="bg-lime-600 rounded hover:bg-lime-700 px-1 shadow-md">
                        <ChevronRight />
                    </button>
                    <button className="bg-red-600 rounded hover:bg-red-700 px-1 shadow-md">
                        <Trash />
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks;
import { useEffect, useState } from 'react'
import Tasks from './components/tasks'
import Adder from './components/Adder'
import { Routes, Route } from 'react-router-dom'
import TaskDescription from './pages/TaskDescription'

function App() {

  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")) || [])

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  //     const data = await response.json();

  //     setList(data);
  //   })()
  // }, [])   Para chamar API`s

  return (
    <div className='flex flex-col items-center bg-teal-300 h-dvh w-screen gap-5 relative'>
      <Routes>
        <Route path='/' element={<>
          <h1 className='text-4xl text-white font-bold drop-shadow-lg h-min'>Lista de Tarefas</h1>
          <Adder list={list} setList={setList} />
          <Tasks list={list} setList={setList} />
        </>} />
        <Route path='/taskDescription' element={<TaskDescription />} />
      </Routes>

    </div>
  )
}

export default App

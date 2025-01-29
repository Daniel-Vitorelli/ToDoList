import { ChevronLeft } from "lucide-react";
import { useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"

function TaskDescription () {

    const [SearchParams] = useSearchParams();
    const title = SearchParams.get("title")
    const description = SearchParams.get("description")

    return (
        <>  
            <Link to='/' className="bg-red-600 rounded hover:bg-red-700 p-1 shadow-md absolute top-1 left-1">
                <ChevronLeft/>
            </Link>
            <h1 className='text-4xl text-white font-bold drop-shadow-lg h-min'>Descrição da Tarefa</h1>
            <div className="bg-slate-100 p-4 rounded-md min-w-[500px] flex flex-col gap-2">
                <h1 className="font-bold text-xl">{title}</h1>
                <p>{description}</p>
            </div>
        </>
    )
}

export default TaskDescription
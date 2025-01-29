import { ChevronRight } from "lucide-react";
import { Trash } from "lucide-react";
import { Link } from "react-router-dom"

function Tasks({ list, setList }) {
    return (
        <ul className={`bg-slate-100 p-0 rounded-md min-w-0 flex flex-col gap-2 ${list.length > 0 ? 'p-4 min-w-[500px]' : ''}`}>
            {list.map((item, index) => (
                <li className={`flex gap-1 ${item.isCompleted ? 'order-2' : 'order-1'}`}>
                    <button
                        className={`bg-teal-600 w-full text-white p-1 rounded shadow-md text-left hover:bg-teal-700 
                            ${item.isCompleted ? 'line-through bg-teal-900 text-gray-400' : ''}`}
                        onClick={() => {
                            setList(
                                list.map((item2, index2) => {
                                    if (index2 === index) {
                                        return { ...item2, isCompleted: !item2.isCompleted };
                                    }
                                    return item2;
                                })
                            );
                        }}
                    >
                        {item.title}
                    </button>
                    <Link to={`/taskDescription?title=${item.title}&description=${item.description}`} className='bg-lime-600 rounded hover:bg-lime-700 px-1 shadow-md flex items-center'>
                        <ChevronRight />
                    </Link>
                    <button
                        className="bg-red-600 rounded hover:bg-red-700 px-1 shadow-md"
                        onClick={() => {
                            setList(list.filter((item2) => item2 !== item));
                        }}
                    >
                        <Trash />
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;

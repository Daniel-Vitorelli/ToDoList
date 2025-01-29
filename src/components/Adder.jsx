import { useState } from "react";

function Adder ({list, setList}) {

    const [Titulo, SetTitulo] = useState('')
    const [AddDescription, SetAddDescription] = useState('')

    return(
        <form 
            className="bg-slate-100 p-4 rounded-md min-w-[500px] flex flex-col gap-2"
            onSubmit={(e) => {
                e.preventDefault();
                if (Titulo.trim() != '' && AddDescription.trim() != ''){
                    setList([...list, {
                    id : list.length + 1 ,
                    title : Titulo,
                    description : AddDescription,
                    isCompleted : false
                  }])
                  SetTitulo('');
                  SetAddDescription('');
                }
            }}
        >
            <input 
                type="text" 
                placeholder="Titulo" 
                value={Titulo} 
                onChange={(e) => SetTitulo(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Descrição" 
                value={AddDescription}
                onChange={(e) => SetAddDescription(e.target.value)}
            />
            <button type="submit" className="bg-lime-600 rounded hover:bg-lime-700 p-1 shadow-md text-white">
                Adicionar Tarefa
            </button>
        </form>
    )
}


export default Adder;
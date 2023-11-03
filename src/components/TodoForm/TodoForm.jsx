import { useState } from 'react'
import './todoForm.css'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("");

    const handleMissingCategory = () => {
        alert("Você esqueceu de selecionar a categoria da tarefa!");
    }

    const handleMissingValue = () => {
        alert("Você esqueceu de digitar o título da tarefa!");
    }

    const handleMissingColor = () => {
        alert("Você esqueceu de selecionar a cor!");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!value) {
            handleMissingValue();
            return;
        }
        if(!category) {
            handleMissingCategory();
            return;
        }
        if(!backgroundColor) {
            handleMissingColor();
            return;
        }
        
        addTodo(value, category, backgroundColor);
        setValue("");
        setCategory("");
        setBackgroundColor("");
    }
    const selectBackgroundColor = (e, color) => {
        e.preventDefault();
        setBackgroundColor(color);
    }
    return (
        <div>
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="" id=""
                    placeholder='Digite o título'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <select
                    name=""
                    id=""
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <div className='colors'>
                    <p className='colors_text'>Cor: </p>
                    <div className='colors_options'>
                        <button className='color' style={{backgroundColor: "#77172E"}} onClick={(e) => selectBackgroundColor(e, "#77172E")}></button>
                        <button className='color' style={{backgroundColor: "#692B17"}} onClick={(e) => selectBackgroundColor(e, "#692B17")}></button>
                        <button className='color' style={{backgroundColor: "#7C4A03"}} onClick={(e) => selectBackgroundColor(e, "#7C4A03")}></button>
                        <button className='color' style={{backgroundColor: "#264D3B"}} onClick={(e) => selectBackgroundColor(e, "#264D3B")}></button>
                        <button className='color' style={{backgroundColor: "#256377"}} onClick={(e) => selectBackgroundColor(e, "#256377")}></button>
                    </div>
                </div>
                <button type='submit'>Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm
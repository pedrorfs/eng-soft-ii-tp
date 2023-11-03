import './todo.css';

const Todo = ({ todo, removeTodo, completeTodo, color }) => {
    return (
        <div 
            className="todo" 
            key={todo.id} 
            style={{textDecoration: todo.isCompleted ? "line-through" : "", backgroundColor: `${color}`}}
        >
            <div className='content'>
                <p>{todo.text}</p>
                <p className="category">{todo.category}</p>
            </div>
            <div>
                <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
            </div>
        </div>
    )
}

export default Todo
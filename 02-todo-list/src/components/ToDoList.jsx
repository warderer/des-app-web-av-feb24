import { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  const [inputValue, setInputValue] = useState('')

  // Añadir un nuevo estado para guardar las tareas
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    // console.log('Agregando tarea:', inputValue)
    setTodos([...todos, inputValue]) // traigo todas las tareas y agrego la nueva
    setInputValue('') // limpio el input
  }

  const handleDelete = (index) => {
    // console.log('Eliminando tarea:', index)
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button onClick={handleAdd}>Agregar</button>
      <ul>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </ul>
    </div>
  )
}
export default ToDoList

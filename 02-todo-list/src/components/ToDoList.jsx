import { useState } from 'react'

const ToDoList = () => {
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    console.log('Agregando tarea:', inputValue)
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
        <li>tarea 1<button>Eliminar</button></li>
        <li>tarea 2<button>Eliminar</button></li>
        <li>tarea 3<button>Eliminar</button></li>
      </ul>
    </div>
  )
}
export default ToDoList

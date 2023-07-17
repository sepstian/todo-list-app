import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const[ value, setValue ] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)

        setValue("")

    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value = {value} placeholder='Tugas apa hari ini?' onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Tambah Tugas!</button>
    </form>
  )
}

export default TodoForm

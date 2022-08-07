
const Todo = ({ todo, toggleTodo }) => {
  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo.id)} />
        </label>
        {todo.name}
    </div>
  )
}

export default Todo
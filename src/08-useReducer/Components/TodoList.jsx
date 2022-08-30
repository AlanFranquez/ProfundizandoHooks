import { TodoItem } from "./TodoItem"


export const TodoList = ({todos = []}) => {
  return (
    <ul className="list-group">
      {
        todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id}/>
        })
      }

    </ul>
  )
}

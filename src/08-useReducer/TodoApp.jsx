import { useEffect } from "react"
import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"
import { useTodos } from "./useTodos"



export const TodoApp = () => {


    const{todos, handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodos();
    

    return (


        <>
        
            <h1>TodoApp 10, <small>pendientes: 2 </small></h1>
            <hr />


            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={ id => handleDeleteTodo(id)}
                        onToggleTodo = { handleToggleTodo }
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={todo=>handleNewTodo(todo)} />

                </div>
            </div>

        
        </>
    )
}

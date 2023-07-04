import {useReducer} from 'react';

/*

     todo = {id,title,completed}
     todos = [todo]

 */

const todosReducer = (state = [], action) => {
    let {type, payload} = action;
    switch (type) {
        case 'ADD_TODO': {
            let {title} = payload;
            let id = state.length + 1;
            return [...state, {id, title, completed: false}];
        }
        case 'TOGGLE_TODO': {
            let {id} = payload;
            return state.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        }
        case 'DELETE': {
            let {id} = payload;
            return state.filter(todo => todo.id !== id);
        }
        default:
            return state;
    }
}

function Todos() {
    console.log('useReducerHook:render');
    const [todos, dispatch] = useReducer(todosReducer, [
        {id: 1, title: 'todo 1', completed: true},
        {id: 2, title: 'todo 2', completed: false},
        {id: 3, title: 'todo 3', completed: false},
    ]);

    const renderTodos = () => {
        return todos.map(todo => {
            return (
                <li key={todo.id} className={`list-group-item ${todo.completed ? 'bg-success' : ''}`}>
                    <div className={`d-flex justify-content-around`}>
                        <div>
                            <input type={"checkbox"}
                                   checked={todo.completed}
                                   onChange={e => dispatch({
                                       type: "TOGGLE_TODO",
                                       payload: {id: todo.id}
                                   })}/>
                        </div>
                        <div>{todo.title}</div>
                        <button className={"btn btn-danger"}
                                onClick={() => dispatch({type: 'DELETE', payload: {id: todo.id}})}>
                            delete
                        </button>
                    </div>
                </li>
            )
        })
    }

    return (
        <div className={"card"}>
            <div className={"card-header"}>useReducer : Todos Management</div>
            <div className={"card-body"}>
                <ul className={"list-group"}>
                    {
                        renderTodos()
                    }
                </ul>
            </div>
        </div>
    )
}


export default Todos;
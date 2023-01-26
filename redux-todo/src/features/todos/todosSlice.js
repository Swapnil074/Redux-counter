const initialState ={
    todos:[{
    id: 0,
    text: 'First Post!',
    completed: false,
    priority:'red'
},
{
    id: 1,
    text: 'Second Post',
    completed: true,
    priority:'green'
},
{
    id: 2,
    text: 'Third Post',
    completed: false,
    priority:'yellow'
}
],
}

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }

export default function todoReducers(state=initialState,action){
    switch(action.type){

        case 'todos/todoAdded':
            return [
                ...state,
                {
                    id:nextTodoId(state),
                    text:action.payload,
                    completed:false,
                    priority:'red'
                }
            ]
        case 'todos/todoToggled':
            return state.map(todo=>{
                if(todo.id!==action.payload){
                    return todo;
                }
                return {
                    ...todo,
                    completed:!todo.completed
                }
            })
        default:
            return state;
    }
}
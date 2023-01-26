const initialState={
    status:'All',
    priorities:[]
}

export default function filtersReducer(state=initialState,action){
    switch(action.type){
        case 'filters/statusFilterChanged':
            return{
                ...state,
                status:action.payload
            }
        case 'filters/priorityFilterChanged':
            let { priority, changeType } = action.payload
            const { priorities } = state
      
            switch (changeType) {
              case 'added': {
                if (priorities.includes(priority)) {
                  // This priority already is set as a filter. Don't change the state.
                  return state
                }
      
                return {
                  ...state,
                  priorities: state.priorities.concat(priority),
                }
              }
              case 'removed': {
                return {
                  ...state,
                  priorities: state.priorities.filter(
                    (existingPriorities) => existingPriorities !== priority
                  ),
                }
              }
            }
              default:
                return state
    }
}
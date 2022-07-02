import React, { useReducer } from 'react'
import Filter from '../pure/Filter'
import Task from '../pure/Task'
import TaskForm from '../pure/TaskForm'

// Actions
export const ADD_TASK = 'ADD_TASK'
export const ELIMINATE_TASK = 'ELIMINATE_TASK'
export const FILTER_TASK = 'FILTER_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'

// Filters
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_ACTIVE = 'SHOW_aCTIVE'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'

// Initial State
const initialState = {
    tasks: [],
    filter: SHOW_ALL
}

// ids
let ids = 0

// Reducer
const taskReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: ids ++,
                        taskName: action.payload.taskName,
                        completed: false
                    }
                ]
            }

        case ELIMINATE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload.id)
            }

        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    (task.id === action.payload.id)
                    ?
                    {
                        ...task,
                        completed: !task.completed
                    }
                    :
                    task
                )
            }

        case FILTER_TASK:
            return {
                ...state,
                filter: action.payload.filter
            }
    
        default:
            return state
    }
}

const filterAction = (filter, tasks) => {
    switch(filter) {
        case SHOW_ALL:
            return tasks

        case SHOW_ACTIVE:
            return tasks.filter(task => !task.completed)

        case SHOW_COMPLETED:
            return tasks.filter(task => task.completed)
        
        default:
            return tasks    
    }
}

const TaskList = () => {

    // Combine taskReducer and initialState
    const [state, dispatch] = useReducer(taskReducer, initialState)

    // Context
    const stateCtx = React.createContext(null)

    return (
        <div>
            <h1>Task List</h1>
            {
                filterAction(state.filter, state.tasks).map((task, index) => (
                    <stateCtx.Provider key={ index } value={ task }>
                        <Task 
                            key={ index }
                            ctx={ stateCtx }
                            toggle={ dispatch }
                            eliminate={ dispatch }
                        />
                    </stateCtx.Provider>
                ))
            }
            <TaskForm 
                addTask={ dispatch }
            />
            <stateCtx.Provider value={ state.filter }>
                <Filter 
                    ctx={ stateCtx }
                    setFilter={ dispatch }
                />
            </stateCtx.Provider>
        </div>
    )
}

export default TaskList

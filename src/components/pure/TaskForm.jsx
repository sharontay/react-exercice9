import React, { useState } from 'react'
import { ADD_TASK } from '../container/TaskList'

const TaskForm = ({ addTask }) => {

    const [taskName, setTaskName] = useState('')

    const submit = (e) => {
        e.preventDefault()
        addTask(
            {
                type: ADD_TASK,
                payload: {
                    taskName: taskName
                }
            }
        )
        
    }

    return (
        <div className='App'>
            <form onSubmit={ submit }>
                <input 
                    type='text'
                    onChange={ (e) => setTaskName(e.currentTarget.value) }
                />
                <button>
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default TaskForm

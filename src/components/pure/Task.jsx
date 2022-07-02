import React, { useContext } from 'react'
import { ELIMINATE_TASK, TOGGLE_TASK } from '../container/TaskList'

const Task = ({ toggle, eliminate, ctx }) => {

    const task = useContext(ctx)

    const activeStyle = {
        textDecoration: 'none',
        color: 'black',
        marginRight: '2rem',
        cursor: 'pointer'
    }

    const completedStyle = {
        textDecoration: 'line-through',
        color: 'green',
        marginRight: '2rem',
        cursor: 'pointer'
    }

    return (
        <div>
            <p>
                <span
                    onClick={ () => toggle({
                        type: TOGGLE_TASK,
                        payload: {
                            id: task.id
                        }
                    }) }
                    style={
                    task.completed ?
                    completedStyle
                    :
                    activeStyle
                }
                >
                    { task.id } - { task.taskName }
                </span>
                <span
                    onClick={ () => eliminate({
                        type: ELIMINATE_TASK,
                        payload: {
                            id: task.id
                        }
                    }) }
                    style={{
                        border: '2px solid black',
                        padding: '.1rem .5rem',
                        cursor: 'pointer'
                    }}
                >
                    X
                </span>
            </p>
        </div>
    )
}

export default Task

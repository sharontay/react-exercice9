import React, { useContext } from 'react'
import FilterOption from './FilterOption'
import { FILTER_TASK } from '../container/TaskList'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../container/TaskList'

const Filter = ({ setFilter, ctx }) => {

    const filter = useContext(ctx)

    return (
        <div>
            <FilterOption
                activate={ () => setFilter({type:FILTER_TASK, payload: {filter: SHOW_ALL}}) }
                active={ filter === SHOW_ALL }
            >
                ALL
            </FilterOption>

            <FilterOption
                activate={ () => setFilter({type:FILTER_TASK, payload: {filter: SHOW_ACTIVE}}) }
                active={ filter === SHOW_ACTIVE }
            >
                ACTIVE
            </FilterOption>

            <FilterOption
                activate={ () => setFilter({type:FILTER_TASK, payload: {filter: SHOW_COMPLETED}}) }
                active={ filter === SHOW_COMPLETED }
            >
                COMPLETED
            </FilterOption>
        </div>
    )
}

export default Filter

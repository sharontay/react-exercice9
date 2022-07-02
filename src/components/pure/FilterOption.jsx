import React from 'react'

const FilterOption = ({ children, activate, active }) => {
    return (
        <span style={{margin: '1rem'}}>
            { 
                active ?
                (
                    <span>
                        { children }
                    </span>
                )
                :
                (
                    <button onClick={ activate }>
                        { children }
                    </button>
                )
            }
        </span>
    )
}

export default FilterOption

import React from 'react'

function SecondaryButton({ label, onClick }) {
    return (
        <button onClick={onClick} className='SecondaryButton'>
            { label }
        </button>
    )
}

export default SecondaryButton
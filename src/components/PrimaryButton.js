import React from 'react'


function PrimaryButton({ label, onClick }) {
    return (
        <button onClick={onClick} className='Buttons PrimaryButton'>
            { label }
        </button>
    )
}

export default PrimaryButton
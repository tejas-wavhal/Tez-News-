import React from 'react'
import Loading from './Loading.gif'
import "./Spinner.css";

const Spinner = () => {
    return (
        <div className='spinnerEdit'>
            <img src={Loading} alt="Loading" style={{ height: '50px' }} />
        </div>
    )
}

export default Spinner
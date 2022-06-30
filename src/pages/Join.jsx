import React from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
    return (
        <div className='join_container'>
            <div className="join">
                <Link to={'/home'}>
                    <button className='join_cta'>Join Society</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
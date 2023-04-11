import React, {memo} from 'react'

import './button.css'

const Button = ({title, onClick}) => {
    return (
        <div className='filter-button' onClick={onClick}>
            {title}
        </div>
    )
}

export default memo(Button)
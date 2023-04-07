import React, {memo} from "react"

import './button.css'

const Button = ({title, onClick}) => {
    return (
        <div className='button' onClick={onClick}>
            {title}
        </div>
    )
}

export default memo(Button)
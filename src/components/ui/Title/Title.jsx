import React, {memo} from 'react'

import './title.css'

const Title = ({ children }) => {
    return <h1 className='main-title'>{children}</h1>
}

export default memo(Title)
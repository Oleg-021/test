import React, {memo} from 'react'

import './achievement-list-item.css'

const AchievementListItem = ({title, place, date, bgColor}) => {
    return (
        <div className='card' style={{backgroundColor: bgColor}}>
            <div>
                <h3 className='title'>{title}</h3>
                <p className='place'>{place}</p>
            </div>
            <div className='flx'>
                <span className='date'>{date}</span>
                <button className='view-btn'>Перейти</button>
            </div>
        </div>
    )
}

export default memo(AchievementListItem)
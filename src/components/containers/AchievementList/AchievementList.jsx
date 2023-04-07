import React, {memo} from 'react'

import AchievementListItem from './AchievementListItem'

const AchievementList = ({ achievements }) => {
    return (
        <div>
            {achievements.map(({id, title, place, date, bgColor}) =>
                <AchievementListItem key={id}
                                     title={title}
                                     place={place}
                                     date={date}
                                     bgColor={bgColor} />
            )}
        </div>
    )
}

export default memo(AchievementList)
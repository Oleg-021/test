import React, {memo, useCallback} from 'react'

import Button from '../../ui/Button'

import './filter-panel.css'

const FilterPanel = ({ setFilter }) => {
    const handleNoneFilter = useCallback(() => setFilter('none'), [setFilter])
    const handlePlaceFilter = useCallback(() => setFilter('place'), [setFilter])
    const handleDateFilter = useCallback(() => setFilter('date'), [setFilter])

    return (
        <div className='filter-panel'>
            <Button title='Без фильтра' onClick={handleNoneFilter} />
            <Button title='По месту' onClick={handlePlaceFilter} />
            <Button title='По дате' onClick={handleDateFilter} />
        </div>
    )
}

export default memo(FilterPanel)
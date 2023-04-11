import React, {memo, useCallback} from 'react'

import Button from '../../ui/Button'
import {FILTER} from "../../../constants/FILTER";

import './filter-panel.css'

const FilterPanel = ({ setFilter }) => {
    const handleNoneFilter = useCallback(() => setFilter(FILTER.NONE), [setFilter])
    const handlePlaceFilter = useCallback(() => setFilter(FILTER.BY_PLACE), [setFilter])
    const handleDateFilter = useCallback(() => setFilter(FILTER.BY_DATE), [setFilter])

    return (
        <div className='filter-panel'>
            <Button title='Без фильтра' onClick={handleNoneFilter} />
            <Button title='По месту' onClick={handlePlaceFilter} />
            <Button title='По дате' onClick={handleDateFilter} />
        </div>
    )
}

export default memo(FilterPanel)
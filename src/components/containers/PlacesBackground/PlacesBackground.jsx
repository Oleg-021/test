import React, {memo, useEffect, useMemo, useState} from "react"


import './places-background.css'
import AchievementList from "../AchievementList";
import FilterPanel from "../FilterPanel";
import {filterAchievements} from "../../../utils/filterAchievements";

const items = [
    {
        id: '01',
        title: 'Съел 10 пирожков',
        place: 'Кафе',
        date: '10.02.2023',
    },
    {
        id: '02',
        title: 'Забил шайбу',
        place: 'Каток',
        date: '12.03.2023',
    },
    {
        id: '03',
        title: 'Эффективно написал код',
        place: 'Работа',
        date: '24.04.2023',
    },
    {
        id: '04',
        title: 'Выгрузил грузовик камней',
        place: 'Каменный карьер',
        date: '25.05.2023',
    },
    {
        id: '05',
        title: 'Выучил стихотворение',
        place: 'Школа',
        date: '07.10.2022',
    },
    {
        id: '06',
        title: 'Выпил 10 л. пива за раз',
        place: 'Кафе',
        date: '08.12.2021',
    },
    {
        id: '07',
        title: 'Занял 1 место на хакатоне',
        place: 'Хакатон',
        date: '21.05.2022',
    },
    {
        id: '08',
        title: 'Забил гол',
        place: 'Футбольное поле',
        date: '01.01.2022',
    }
]

const bgColors = [
    '#F0FAFF',
    '#F7FDFA',
    '#F5F2FF',
    '#FFF1F1',
    '#FEFFED',
]

function PlacesBackground() {
    const [filter, setFilter] = useState('none');
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        setAchievements(items.map( (item, index) => {
            const bgColorIndex = index % bgColors.length
            return {...item, bgColor: bgColors[bgColorIndex]}
        }))
    }, [])

    const filteredAchievements = useMemo(() => filterAchievements(achievements, filter), [achievements, filter])

    return (
        <div className='container'>
            <h1 className='main-title'>Достижения людей</h1>

            <FilterPanel setFilter={setFilter} />

            <AchievementList achievements={filteredAchievements} />
        </div>
    )
}

export default memo(PlacesBackground);

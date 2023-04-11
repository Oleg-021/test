import {FILTER} from '../constants/FILTER'

export const filterAchievements = (achievements, filter) => {
    const resultList = achievements.map(item => ({...item}))

    if (filter === FILTER.PLACE) {
        resultList.sort((next, prev) => {
            const nextPlace = next.place.toLowerCase()
            const prevPlace = prev.place.toLowerCase()
            return (prevPlace > nextPlace) ? -1 : (prevPlace < nextPlace) ? 1 : 0
        })
    } else if (filter === FILTER.DATE) {
        resultList.sort((next, prev) => {
            const nextDateTokens = next.date.split('.')
            const nextDate = new Date(`${nextDateTokens[1]}.${nextDateTokens[0]}.${nextDateTokens[2]}`)
            const prevDateTokens = prev.date.split('.')
            const prevDate = new Date(`${prevDateTokens[1]}.${prevDateTokens[0]}.${prevDateTokens[2]}`)
            return nextDate - prevDate
        })
    }

    return resultList
}
function getSleepHours(day){
    switch (day){
        case 'sunday':
            return 6
            break
        case 'monday':
            return 7
            break
        case 'tuesday':
            return 7
            break
        case 'wendesday':
            return 7
            break
        case 'thursday':
            return 8
            break
        case 'friday':
            return 6
            break
        default:
            return 8        
    }
}

const getActualSleepHours = () => getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wendesday') + getSleepHours('thursday') + getSleepHours('friday') + (getSleepHours('saturnday'))

const getIdealSleepHours = (idaelHours) => idaelHours * 7

const sleepdebt = (idealSleepHours, actualSleepHours) => idealSleepHours - actualSleepHours
const sleepcredit = (actualSleepHours, idealSleepHours) => actualSleepHours - idealSleepHours

function sleepSituation(){
    let idealSleepHours = getIdealSleepHours(7)
    let actualSleepHours = getActualSleepHours()

    if (actualSleepHours < idealSleepHours){
        return `Your sleep situation isn't good. You have a ${sleepdebt(idealSleepHours, actualSleepHours)} sleep debt.`
    } else if (actualSleepHours > idealSleepHours) {
        return `You have a ${sleepcredit(actualSleepHours, idealSleepHours)} sleep credit. Don't sleep so much!`
    } else {
        return 'Your sleep situation is good!'
    }
}

console.log(sleepSituation())
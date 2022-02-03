import moment from 'moment'

function getDate(datetime: Date): string {
    return moment(datetime).format('DD.MM.YYYY');
}

export {
    getDate
}
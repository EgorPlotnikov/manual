export function GetDate(x) {
    let array = x.split('/')
    let convert = {
        '1': 'января', '2': 'февраля', '3': 'марта', '4': 'апреля', '5': 'мая', '6': 'июня',
        '7': 'июля', '8': 'августа', '9': 'сенятбря', '10': 'октября', '11': 'ноября', '12': 'декабря'
    }

    let result = array[0] + ' ' + convert[array[1]] + ' ' + array[2];

    return result;
}
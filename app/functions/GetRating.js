export function GetRating(x, y) {
    let res = [];

    if (Number(x) == 0 && Number(y) == 0) {
        res.push('0');
    } else {res.push(Math.round((Number(x) / (Number(x) + Number(y))) * 100) + '')}

    let color = "--text-green";
    if (res[0] < 50) {
        if (res[0] == 0) {
            color = "--secondary-text"
        } else {color = "--text-red"}
    }

    res.push(color);
    res.push(Number(x) + Number(y))

    return res;
}
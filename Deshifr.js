const obj = {
    "Б": "Щ",
    "В": "Ш",
    "Г": "Ч",
    "Д": "Ц",
    "Ж": "Х",
    "З": "Ф",
    "К": "Т",
    "Л": "С",
    "М": "Р",
    "Н": "П"
}
Object.keys(obj).forEach((key) => obj[obj[key]] = key)
function deShifr(str) {
    let keys = str.split('');
    return keys.reduce((previousValue, currentValue) => {
        previousValue += obj[currentValue] || currentValue
        return previousValue
    }, '')
}
[
    "НМОСОЧ",
    "ТШАФАМ",
    "СИПУТЛ",
    "ЛАКУМП",
    "НСУКОП",
    "ЛТМЕКГ",
    "ФШЕФЦА",
    "ЛКМИРЕМ"
].forEach((str) => console.log("%c++","background:green", deShifr(str)))

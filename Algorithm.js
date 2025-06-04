function algorithm(x) {
    let number = x
    if( x % 2 === 0 ) {
        number /= 2
    } else {
        number += 3
    }

    if( number < 4 ) {
        number += 5
    } else {
        number -= 2
    }

    return number
}

console.log("%c++","background:green",
    algorithm(0),
    algorithm(3),
    algorithm(4),
    algorithm(5),
    algorithm(6),
    algorithm(8)
    )

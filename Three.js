function three( number, str ) {
    let commands = str.split('')
    return commands.reduce((previous, current) => {
        if(current === '2') {
            previous *= 3
        }else if(current === '1') {
            previous -= 3
        }
        return previous
    }, number)
}

console.log("%c++","background:green",
    three(12, '111211'),
    three(12, '11222'),
    three(12, '12121'),
    three(12, '22111'),
    three(12, '11211'),
    three(12, '21211'))

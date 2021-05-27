function abbrevName(name) {
    let abbreviation = name[0];
    for (let i = 1; i < name.length; i++) {
        if (name[i] === name[i].toUpperCase() && name[i] !== ' ') {
            abbreviation += '.' + name[i];
        }
    }
    return abbreviation
}
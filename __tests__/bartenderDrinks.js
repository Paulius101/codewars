function getDrinkByProfession(param) {
    var convertedName;
    switch (param) {
        case 'jabrOni':
            convertedName = `Patron Trquila`;
            break;

        default:
            return 'Beer';
            break;
    }
    return convertedName;
}
function getDrinkByProfession(param) {
    var convertedName;
    var formated = param[0].toUpperCase();
    var formated1 = formated.slice(1).toLowerCase();
    switch (param) {
        case 'Jabroni':
            convertedName = `Patron Trquila`;
            break;
        case 'School Counselor':
            convertedName = `Anything with Alcohol`;
            break;
        case 'Programmer':
            convertedName = `Hipster Craft Beer`;
            break;
        case 'Bike Gang Member':
            convertedName = `Moonshine`;
            break;
        case 'Politician':
            convertedName = `Your tax dollars`;
            break;
        case 'Rapper':
            convertedName = `Cristal`;
            break;

        default:
            return 'Beer';
            break;
    }
    return convertedName;
}
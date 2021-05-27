function getDrinkByProfession(param) {
    switch (param.toLowerCase()) {
        case 'jabroni':
            convertedName = `Patron Tequila`;
            break;
        case 'school counselor':
            convertedName = `Anything with Alcohol`;
            break;
        case 'programmer':
            convertedName = `Hipster Craft Beer`;
            break;
        case 'bike gang member':
            convertedName = `Moonshine`;
            break;
        case 'politician':
            convertedName = `Your tax dollars`;
            break;
        case 'rapper':
            convertedName = `Cristal`;
            break;

        default:
            return 'Beer';
            break;
    }
    return convertedName;
}
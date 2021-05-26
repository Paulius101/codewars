function countSheeps(arrayOfSheep) {

    let esancios = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        const ivestis = arrayOfSheep[i];
        if (ivestis === true) {
            esancios++
        }
    }
    return esancios
}


test('aviu skaiciavimas', () => {
    expect(countSheeps([true, true, true, false,
        true, true, true, true,
        true, false, true, false,
        true, false, false, true,
        true, true, true, true,
        false, false, true, true])).toBe('There are 17 sheeps in total')
})
function asteriscIt(n) {
    const convert = n.map(item => '')
    let result = ''
    for (let i = 0; i < convert.length; i++) {
        if (convert[i] && convert[i++] / 2) {
            result += convert[i] + convert[i++]
        }
        return result

    }
};
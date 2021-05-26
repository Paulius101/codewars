function past(h, m, s) {
    const valandos = h * 3600000;
    const minutes = m * 60000;
    const sekundes = s * 1000;
    let suma = valandos + minutes + sekundes;
    return suma;
}
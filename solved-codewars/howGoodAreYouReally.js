function betterThanAverage(classPoints, yourPoints) {
    let suma = 0
    for (let i = 0; i < classPoints.length; i++) {
        const pazymys = classPoints[i];
        suma += pazymys;
    }
    const vidurkis = (suma + yourPoints) / (classPoints.length + 1)
    return (yourPoints > vidurkis)
}
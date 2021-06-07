const flip = (d, a) => {
    if (d === 'R') {
        return a.sort((b, c) => b - c);
    }
    else if (d === 'L') {
        return a.sort((b, c) => c - b);
    }
}
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const leftBlue = blueStart - bluePulled;
    const leftRed = redStart - redPulled;
    const totalLeft = leftBlue + leftRed;
    const probability = leftBlue / totalLeft;
    return probability
}
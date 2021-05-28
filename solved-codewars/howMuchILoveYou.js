function howMuchILoveYou(nbPetals) {
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    for (let i = 0; i <= nbPetals; i++) {
        arr.push(arr[i]);
    }
    return arr[nbPetals - 1];
}

/*
sukuriam array ir cikla, kuris sukasi iki duoto skaiciaus (nbPetals)
tada i gala to arejaus vis pridedam po i
returninam ta plataus arejaus viena is poziciju, kuria nbPetals - 1 skaicius nurodo.

Kitas labiau suprantams var:

function howMuchILoveYou(nbPetals) {
  if (nbPetals > 6) {

    if(nbPetals%6 === 1) {
      return "I love you"
    }else if(nbPetals%6 === 2) {
      return "a little"
    }else if(nbPetals%6 === 3) {
      return "a lot"
    }else if(nbPetals%6 === 4) {
      return "passionately"
    }else if(nbPetals%6 === 5) {
      return "madly"
    }else if(nbPetals%6 === 0) {
      return "not at all"
    }
  }else if(nbPetals === 1) {
      return "I love you"
  }else if(nbPetals === 2) {
      return "a little"
  }else if(nbPetals === 3) {
      return "a lot"
  }else if(nbPetals === 4) {
      return "passionately"
  }else if(nbPetals === 5) {
      return "madly"
  }else if(nbPetals === 6) {
      return "not at all"

  }
}

*/
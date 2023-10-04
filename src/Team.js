export default class Team {
  constructor(arrayCharacters) {
    this.constCharacters = arrayCharacters.length;
    for (let i = 0; i < this.constCharacters; i += 1) {
      this[i] = { ...arrayCharacters[i] };
    }
  }

  [Symbol.iterator]() {
    let current = -1;
    return {
      next: () => {
        current += 1;
        if (current >= this.constCharacters) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: this[current],
          done: false,
        };
      },
    };
  }
}

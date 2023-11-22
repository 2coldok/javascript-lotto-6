class Lotto {
  #numbers;

  // [1,2,3,4,5,6]
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR]');
    }
  }
  // 11
  validateBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error('[ERROR]');
    }
  }

  #getCoincideCount(userLottoNumbers) {
    const coincideNumbers = [];
    
    this.#numbers.forEach((element) => {
      if (userLottoNumbers.includes(element)) {
        coincideNumbers.push(element);
      }
    });

    return coincideNumbers.length;
  }

  getRank(userLottoNumbers, bonusNumber) {
    const count = this.#getCoincideCount(userLottoNumbers);

    if (count === 6) return 1;
    if (count === 5 && userLottoNumbers.includes(bonusNumber)) return 2;
    if (count === 5) return 3;
    if (count === 4) return 4;
    if (count === 3) return 5;

    return 0;
  }
}

export default Lotto;

/*
const lotto = new Lotto([1,2,3,4,5,6]);

lotto.validateBonusNumber(31);

const k = lotto.getRank([11,12,13,14,15,16], 31);
console.log(k);
*/


export const LOTTO_PRIZE = [
  [1, 2000000000],
  [2, 30000000],
  [3, 1500000],
  [4, 50000],
  [5, 5000],
];

class LottoRankBoard {
  #template = {
    prize : 0,
    count : 0,
    updatePrize(prize) {this.prize = prize},
    updateCount() {this.count += 1},
    totalPrize() {return this.prize * this.count},
  };

  #rankBoard = new Map();
  
  constructor() {
    this.#setRankBoard();
  }

  #setRankBoard() {
    LOTTO_PRIZE.forEach((element) => {
      const [rank, prize] = element;
      const copy = Object.assign({}, this.#template);
      copy.updatePrize(prize);
      this.#rankBoard.set(rank, copy);
    });
  }

  updateRank(rankArray) {
    rankArray.forEach((element) => {
      this.#rankBoard.get(element).updateCount();
    });
  }
  // 1등부터 순서대로 count 배열을 반환
  getRankCount() {
    return Array.from(this.#rankBoard).map((element) => {
      const [_, board] = element;
      return board.count;
    });
  }
  
  #getTotalPrize() {
    return Array.from(this.#rankBoard).reduce((acc, cur) => {
      const [_, board] = cur;
      return acc + board.totalPrize();
    }, 0);
  }
  
  getProfit(perchaseAmount) {
    const profitNumber = (this.#getTotalPrize() / perchaseAmount) * 100;
    return profitNumber.toFixed(1);
  }
}

export default LottoRankBoard;
/*
const a = new LottoRankBoard;
a.updateRank([5]);
console.log(a.getRankCount());
console.log(a.getProfit(8000));*/

import { Random } from "@woowacourse/mission-utils";

class LotteryMachine {
  #issuanceCount;

  constructor(purchaseAmountString) {
    this.#validator(purchaseAmountString);
    this.#issuanceCount = Number(purchaseAmountString) / 1000;
  }

  #validator(purchaseAmountStiring) {
    const purchaseAmount = Number(purchaseAmountStiring);

    if (Number.isNaN(purchaseAmount) || purchaseAmount % 1000 !== 0) {
      throw new Error('[ERROR]');
    }
  }

  getTicket() {
    return Array.from({ length : this.#issuanceCount }, () => {
      return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    });
  }

  getPurchaseAmount() {
    return this.#issuanceCount * 1000;
  }
}

export default LotteryMachine;

import LotteryMachine from "../domain/LotteryMachine.js";
import Lotto from "../domain/Lotto.js";
import LottoRankBoard from "../domain/LottoRankBoard.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class LottoController {

  ticket;

  lotto;
  
  async start() {
    await this.getPurchaseAmount();
    await this.getLuckyNumbers();
    const bonusNumber = await this.getBonusNumber();
    this.result(bonusNumber);
  }

  
  async getPurchaseAmount() {
    try {
      const amount = await InputView.getPurchaseAmount()
      const lotteryMachine = new LotteryMachine(amount)
      this.ticket = lotteryMachine.getTicket();

      OutputView.printLottoTicket(this.ticket);

    } catch (error) {
      OutputView.printErrorMesseeage(error);
      await this.getPurchaseAmount();
    }
  }

  async getLuckyNumbers() {
    try {
      const luckyNumbers = await InputView.getLuckyNumbers();
      this.lotto = new Lotto(luckyNumbers.split(',').map(Number));
      OutputView.blank();

    } catch (error) {
      OutputView.printErrorMesseeage(error);
      await this.getLuckyNumbers();
    }
  }

  async getBonusNumber() {
    try {
      const bonusNumber = await InputView.getBonusNumber();
      this.lotto.validateBonusNumber(Number(bonusNumber));
      OutputView.blank();
      return Number(bonusNumber);

    } catch (error) {
      OutputView.printErrorMesseeage(error);
      await this.getBonusNumber();
    }
  }

  result(bonusNumber) {
    const rankArary = [];
    this.ticket.forEach((element) => {
      const rank = this.lotto.getRank(element, bonusNumber)
      if (rank !== 0) {
        rankArary.push(rank);
      }
    });

    const lottoRankBoard = new LottoRankBoard();
    lottoRankBoard.updateRank(rankArary);
    OutputView.printStatistics(lottoRankBoard.getRankCount(), lottoRankBoard.getProfit(this.ticket.length * 1000));
  }
}

export default LottoController;
/*
const a = new LottoController;
a.start();*/
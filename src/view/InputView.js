import { Console } from "@woowacourse/mission-utils"
import { QUESTION } from "../constants/Messeage.js"

const InputView = {
  async getPurchaseAmount() {
    return await Console.readLineAsync(`${QUESTION.purchaseAmount}\n`);
  },

  async getLuckyNumbers() {
    return await Console.readLineAsync(`${QUESTION.luckyNumber}\n`);
  },

  async getBonusNumber() {
    return await Console.readLineAsync(`${QUESTION.bonusNumber}\n`);
  },
};

export default InputView;
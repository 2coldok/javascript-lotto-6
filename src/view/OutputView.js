import { Console } from "@woowacourse/mission-utils";
import { ANSWER } from "../constants/Messeage.js";

const OutputView = {
  printLottoTicket(lottoTicket) {
    Console.print('');

    Console.print(ANSWER.amount(lottoTicket.length));
    lottoTicket.forEach((element) => {
      Console.print(`[${element.join(', ')}]`);
    });

    Console.print('');
  },

  printStatistics(rankCountArray, profit) {
    Console.print(ANSWER.statisticsProlog);
    
    ANSWER.statistics(rankCountArray, profit).forEach((element) => {
      Console.print(element);
    });
  },

  blank() {
    Console.print('');
  },

  printErrorMesseeage(messeage) {
    Console.print(`${messeage}`);
  },
}

export default OutputView;
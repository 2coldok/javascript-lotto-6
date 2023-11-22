export const numberFilter = (number) => new Intl.NumberFormat('ko-KR').format(number);

export const QUESTION = Object.freeze({
  purchaseAmount : '구입금액을 입력해 주세요.',
  luckyNumber : '당첨 번호를 입력해 주세요.',
  bonusNumber : '보너스 번호를 입력해 주세요.',
});

export const ANSWER = Object.freeze({
  amount : (number) => `${number}개를 구매했습니다.`,
  statisticsProlog : `당첨 통계\n---`,
  statistics : (rankCountArray, profit) => {
    return [
      `3개 일치 (5,000원) - ${rankCountArray[4]}개`,
      `4개 일치 (50,000원) - ${rankCountArray[3]}개`,
      `5개 일치 (1,500,000원) - ${rankCountArray[2]}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCountArray[1]}개`,
      `6개 일치 (2,000,000,000원) - ${rankCountArray[0]}개`,
      `총 수익률은 ${numberFilter(profit)}%입니다.`
    ];
  }
});
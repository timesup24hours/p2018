import { getSummaryData } from '../util';

describe('Chart util functions', () => {
  it('Should be return as expect', () => {
    const data = [
      { interestPaid: 1, principlePaid: 1 },
      { interestPaid: 1, principlePaid: 1 }
    ];
    const expectData = {
      totalInterestPaid: 2,
      totalPrinciplePaid: 2
    };
    expect(getSummaryData({ paymentDataArray: data })).toEqual(expectData);
  });
});

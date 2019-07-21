import { PaymentArray } from './index';

interface SummaryData {
  totalInterestPaid: number;
  totalPrinciplePaid: number;
}

interface GetSummaryDataProps {
  paymentDataArray: PaymentArray[];
}

export const getSummaryData = ({
  paymentDataArray
}: GetSummaryDataProps): SummaryData => {
  return paymentDataArray.reduce(
    (accumulator, currentValue): SummaryData => {
      return {
        totalInterestPaid:
          accumulator.totalInterestPaid + currentValue.interestPaid,
        totalPrinciplePaid:
          accumulator.totalInterestPaid + currentValue.principlePaid
      };
    },
    {
      totalInterestPaid: 0,
      totalPrinciplePaid: 0
    }
  );
};

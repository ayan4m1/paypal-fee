import { deprecate } from 'util';

export enum PaymentType {
  Checkout,
  GuestCheckout,
  QRCode,
  ThirdPartyQRCode,
  Venmo,
  GoodsAndServices,
  StandardCreditDebit,
  Other
}

export function calculateRate(value: number, paymentType: PaymentType): number {
  switch (paymentType) {
    case PaymentType.ThirdPartyQRCode:
      return 0.0229;
    case PaymentType.QRCode:
      return value <= 10 ? 0.024 : 0.019;
    case PaymentType.GoodsAndServices:
    case PaymentType.StandardCreditDebit:
      return 0.0299;
    default:
      return 0.0349;
  }
}

export function calculateFixedFee(
  value: number,
  paymentType: PaymentType
): number {
  switch (paymentType) {
    case PaymentType.ThirdPartyQRCode:
      return 0.09;
    case PaymentType.QRCode:
      return value <= 10 ? 0.05 : 0.1;
    case PaymentType.GoodsAndServices:
      return 0;
    default:
      return 0.49;
  }
}

export const calculateFee = deprecate(
  (
    value: number,
    paymentType: PaymentType,
    international: boolean = false
  ): number => {
    const rate = calculateRate(value, paymentType);
    const fixedFee = calculateFixedFee(value, paymentType);

    let result: number = value * rate + fixedFee;

    if (international) {
      result += value * 0.015;
    }

    return result;
  },
  'PayPal changed its fee structure, do not rely on this output!'
);

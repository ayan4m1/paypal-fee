import { PaymentType, calculateFee } from './index';

describe('calculateFee', () => {
  it('calculates PayPal Checkout fees', () => {
    expect(calculateFee(10, PaymentType.Checkout)).toBeCloseTo(0.839, 3);
  });
  it('calculates PayPal Guest Checkout fees', () => {
    expect(calculateFee(10, PaymentType.GuestCheckout)).toBeCloseTo(0.839, 3);
  });
  it('calculates QR code fees < $10', () => {
    expect(calculateFee(5, PaymentType.QRCode)).toBeCloseTo(0.17);
  });
  it('calculates QR code fees >= $10', () => {
    expect(calculateFee(10.01, PaymentType.QRCode)).toBeCloseTo(0.29019, 5);
    expect(calculateFee(50, PaymentType.QRCode)).toBeCloseTo(1.05);
  });
  it('calculates third-party QR code fees', () => {
    expect(calculateFee(10, PaymentType.ThirdPartyQRCode)).toBeCloseTo(
      0.319,
      3
    );
  });
  it('calculates Venmo fees', () => {
    expect(calculateFee(10, PaymentType.Venmo)).toBeCloseTo(0.839, 3);
  });
  it('calculates Goods and Services fees', () => {
    expect(calculateFee(10, PaymentType.GoodsAndServices)).toBeCloseTo(
      0.299,
      3
    );
  });
  it('calculates Credit and Debit fees', () => {
    expect(calculateFee(10, PaymentType.StandardCreditDebit)).toBeCloseTo(
      0.789,
      3
    );
  });
  it('calculates Other fees', () => {
    expect(calculateFee(10, PaymentType.Other)).toBeCloseTo(0.839, 3);
  });
  it('calculates international fees', () => {
    expect(calculateFee(10, PaymentType.Other, true)).toBeCloseTo(0.989, 3);
  });
});

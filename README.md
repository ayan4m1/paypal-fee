# paypal-fee

[![Package Version](https://badge.fury.io/js/paypal-fee.svg)](https://www.npmjs.com/package/paypal-fee)
[![Code Coverage](https://codecov.io/gh/ayan4m1/paypal-fee/graph/badge.svg?token=IjghFTPyZf)](https://codecov.io/gh/ayan4m1/paypal-fee)

**NOTE**: Most recent audit of PayPal fees was done in September 2023. Fees are subject to change at any time, and this is not an official PayPal module. All use is at your own risk.

## features

- Written in TypeScript
- Less than 2kB of code
- No runtime dependencies
- Supports ESM and CommonJS
- Comprehensive integration tests

## requirements

- Node 16+

## usage

To use this module, simply install it using your favorite package manager and then import the `calculateFee` function.

`calculateFee` takes a payment value in USD and a `PaymentType`, and returns a fee amount in USD.

Payment types are as follows:

## example

```ts
import { calculateFee, PaymentType } from 'paypal-fee';

const fee = calculateFee(100, PaymentType.GoodsAndServices);

console.log(fee);
```

will output `3.98`.

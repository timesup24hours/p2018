import React from 'react';

const code = `const paymentMethods = [
  {
    supportedMethods: ['basic-card'],
    data: {
      suppportedNetworks: ['visa', 'mastercard']
    }
  },
  {
    supportedMethods: ['https://google.com/pay'],
    data: {
      merchantID: '12345'
    }
  }
];`;

const code1 = `const txInfo = {
  total: {
    label: 'Toal',
    amount: { currency: 'USD', value: '50.00' }
  },
  displayItems: [
    {
      label: 'Subtoal',
      amount: { currency: 'USD', value: '50.00' }
    }
  ]
};`;

const code2 = `txInfo.shippingOptions = [
  {
    id: 'standard',
    label: 'Standard shipping',
    amount: { currnecy: 'USD', value: '10.00' },
    selected: true
  },
  {
    id: 'express',
    label: 'Express Shipping',
    amount: { curreny: 'USD', value: '20.00' }
  }
];`;

const code3 = `const options = {
  requestShipping: true,
  requestPayerEmail: true,
  requestPayerPhone: true,
  requestPayerName: true,
  shippingType: 'shipping'
};`;

const code4 = `const pr = new PaymentRequest(paymentMethods, txInfo, options);`;

const code5 = `pr.show().then(paymentResponse => {
  // send paymentResponse to payment processor
  return collectPayment(paymentResponse)
    .then(res => {
      paymentResponse.complete('success');
    })
    .catch(err => {
      paymentResponse.complete('fail');
    })
});`;

const code6 = `// Sample change handler
request.addEventListener('shippingaddresschange', evt => {
  evt.updateWith(
    new Promise(resolve => {
      let newInfo = getNewInfo(request.shippingaddress);
      resolve(newInfo);
    })
  )
})`;

export default {
  id: '6ddc944b-1bae-42a2-b710-c4a64f6f7bd4',
  title: 'Web Payments API',
  subTitle: 'https://www.w3.org/TR/payment-request/',
  article: [
    { title: 'Web Payments API' },
    { subTitle: 'https://www.w3.org/TR/payment-request/' },
    { content: 'Payment Methods' },
    { code: code },
    { html: ({ index }) => <br key={index} /> },
    { content: 'Transaction Details' },
    { code: code1 },
    { html: ({ index }) => <br key={index} /> },
    { content: 'Optional: Shipping Methods' },
    { code: code2 },
    { html: ({ index }) => <br key={index} /> },
    { content: 'Optional: Extra Info' },
    { code: code3 },
    { html: ({ index }) => <br key={index} /> },
    { content: 'Create the paymentRequest' },
    { code: code4 },
    { html: ({ index }) => <br key={index} /> },
    { content: 'Show the Payment Request Interface' },
    { code: code5 },
    { html: ({ index }) => <br key={index} /> },
    { content: '3. Collect payment' },
    { text: 'Change events' },
    { text: '1. shipping address change' },
    { text: '2. shipping option change' },
    { text: '3. payment method change' },
    { code: code6 }
  ],
  createdAt: '2017-09-20T19:25:09.623Z'
};

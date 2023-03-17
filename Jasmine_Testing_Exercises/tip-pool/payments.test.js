describe('Payments test (with setup and tear-down', function() {
  beforeEach(function() {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  });

  it('should add a curPayment object to allPayment in submitPaymentInfo()', function() {
    submitPaymentInfo();

    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
  });

  it('should create a new payment to allPayment in createCurPayment', function() {
    createCurPayment();

    expect(billAmt.value).toBeGreaterThan(0);
    expect(tipAmt.value).toBeGreaterThanOrEqual(0);
    
  })

  afterEach(function() {
    allPayments = {};
    paymentId = 0;
    billAmtInput.value = 0;
    tipAmtInput.value = 0;
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
  });

});
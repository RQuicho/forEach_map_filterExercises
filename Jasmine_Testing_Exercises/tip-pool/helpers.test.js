describe("Helpers test (with setup and tear-down)", function() {
  beforeEach(function() {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it('should sum all tips in sumPaymentTotal()', function() {
    expect(sumPaymentTotal('tipAmt')).toEqual(20);

    billAmtInput.value = 100;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(60);
  })

  it('should sum all bills in sumPaymentTotal()', function() {
    expect(sumPaymentTotal('billAmt')).toEqual(100);

    billAmtInput.value = 100;
    tipAmtInput.value = 30;

    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(200);
  })

  it('should sum all tipPercent in sumPaymentTotal()', function() {
    expect(sumPaymentTotal('tipPercent')).toEqual(20);

    billAmtInput.value = 150;
    tipAmtInput.value = 20;
    submitPaymentInfo();

    calculateTipPercent(billAmt, tipAmt)
    expect(sumPaymentTotal('tipPercent')).toEqual(33);
  })

  it('should create a td and append it to tr in appendTd()', function() {
    let newTr = document.createElement('tr');
    appendTd(newTr, 'example');

    expect(newTr.firstChild.innerHTML).toEqual('example');
  });

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    total = 0;
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerText = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
  });

})
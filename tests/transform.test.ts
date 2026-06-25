describe("transformDealToInvoice", () => {

  it("creates valid invoice payload", () => {
    expect(transformDealToInvoice(validDeal))
      .toBeDefined();
  });

  it("fails when company is missing", () => {
    expect(() =>
      transformDealToInvoice(deal, items, null)
    ).toThrow();
  });

  it("rejects unsupported currency", () => {
    expect(() =>
      transformDealToInvoice(invalidCurrencyDeal)
    ).toThrow();
  });

});

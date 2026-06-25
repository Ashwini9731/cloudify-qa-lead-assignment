describe("CEL Filter", () => {

  it("returns true for matching deal", () => {
    expect(evaluateFilter(validDeal))
      .toBe(true);
  });

  it("rejects wrong stage", () => {
    expect(evaluateFilter(openDeal))
      .toBe(false);
  });

  it("rejects empty line items", () => {
    expect(evaluateFilter(emptyItemsDeal))
      .toBe(false);
  });

  it("rejects non-European region", () => {
    expect(evaluateFilter(nonEuropeanDeal))
      .toBe(false);
  });

});

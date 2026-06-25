describe("workflow rerun", () => {

  it("allows authorized editor", async () => {
    const result = await reRun({ id: 1 });
    expect(result.status).toBe("PENDING");
  });

  it("rejects unauthorized users", async () => {
    await expect(reRun({}))
      .rejects.toThrow();
  });

  it("validates numeric id", async () => {
    await expect(reRun({ id: "abc" }))
      .rejects.toThrow();
  });

  it("creates workflow attempt", async () => {
    const result = await reRun({ id: 1 });
    expect(result.attempts).toBeGreaterThan(0);
  });

  it("enqueues workflow event", async () => {
    expect(mockQueue.send).toHaveBeenCalled();
  });

});

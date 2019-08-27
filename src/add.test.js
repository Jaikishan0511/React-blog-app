const add = (a, b) => {
  return a + b;
};

describe("add", () => {
  it("should add two positive numbers", () => {
    const output = add(1, 2);
    expect(output).toBe(3);
  });

  it("should a positive and a negative number", () => {
    const output = add(-1, 2);
    expect(output).toBe(1);
  });

  it("should add a string and a number", () => {
    const output = add("jaifa", 2);
    expect(output).toBe("jaifa2");
  });

  it("should add two negative numbers", () => {
    const output = add(-1, -2);
    expect(output).toBe(-3);
  });
});

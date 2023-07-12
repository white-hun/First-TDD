const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccess when predicate is when true", () => {
    check(() => true, onSuccess, onFail);

    expect(onSuccess.mock.calls.length).toBe(1);
  });
});

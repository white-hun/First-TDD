const check = require("../check");

describe("check", () => {
  let onSuccess; // mock 함수 변수
  let onFail; // mock 함수 변수

  beforeEach(() => {
    onSuccess = jest.fn(); // mock 함수 선언
    onFail = jest.fn(); // mock 함수 선언
  });

  it("should call onSuccess when predicate is when true", () => {
    check(() => true, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes");
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it("should call onSuccess when predicate is when false", () => {
    check(() => false, onSuccess, onFail);

    // expect(onFail.mock.calls.length).toBe(1);
    expect(onFail).toHaveBeenCalledTimes(1);
    // expect(onFail.mock.calls[0][0]).toBe("yes");
    expect(onFail).toHaveBeenCalledWith("no");
    // expect(onSuccess.mock.calls.length).toBe(0);
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});

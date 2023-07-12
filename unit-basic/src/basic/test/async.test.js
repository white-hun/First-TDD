const fetchProduct = require("../async");

describe("Async", () => {
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async - await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({ item: "Milk", price: 200 });
  });

  it("async - reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});

// promise는 비동기적으로 동작하기 때문에 fetchProduct를 호출해두고 성공인지 아닌지 결과가 나왔는지 아닌지
// 상관하지 않고 함수를호출하고난 뒤 it내부 코드블록은 끝난다
// jest입장에서는 별도의 에러가 없이 expect를 거치지 않고 끝난 것이다

// async 를 test 할 때 done보다 return을 사용하는 편이 속도나 가독성에 있어서 더 좋다.

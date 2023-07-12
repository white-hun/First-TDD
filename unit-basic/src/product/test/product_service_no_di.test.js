// 나쁜 예제(mock을 남용하는 사례)
const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");
jest.mock("../product_client"); // ProductClient는 mock을 사용한다(가짜 데이터)

// 테스트하고자 하는 것: ProductService
describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "🥛", available: true },
    { item: "🍌", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems: fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    // mock 수동 초기화
    // fetchItems.mockClear();
    // ProductClient.mockClear();
  });

  it("shouldfilter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});

// 단위테스트는 서로 모듈간의 상호작용을 테스트하면 안 되고
// 단위 하나만 테스트 해야한다
// ProductService 안에서 ProductClient의 fetchItems함수도 모르게 내부적으로 사용할 수 있다
// 혹시나 ProductClient에서 환경적인 요인(함수가 실패하거나 데이터를 받아오지못하거나 또는 네트워크에 일시적으로 문제)이 생긴다면
// ProductService 테스트 코드는 당연히 실패하게 된다
// 이렇게 네트워크 상태에 의존하는 코드는 좋지 않다
// ProductClient와 별개로 독립적으로 의존하지 않도록 작성하기 위해서는
// ProductClient 자체를 mock하면된다

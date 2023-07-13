const ProductService = require("../product_service");
const StubProductClient = require("./stub_product_client");

describe("ProductService - Stub", () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("shouldfilter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });
});

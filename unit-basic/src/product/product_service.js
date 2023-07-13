class ProductService {
  constructor(productClient) {
    this.productClient = productClient;
  }

  // 테스트할 부분
  fetchAvailableItems() {
    return this.productClient //
      .fetchItems() //
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;

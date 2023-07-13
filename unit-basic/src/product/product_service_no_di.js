// // 나쁜 예제(mock을 남용하는 사례)
// const ProductClient = require("./product_client");
// class ProductService {
//   constructor() {
//     this.productClient = new ProductClient();
//   }

//   // 테스트할 부분
//   fetchAvailableItems() {
//     return this.productClient.fetchItems().then((items) => items.filter((item) => item.available));
//   } // 서버에 있는 데이터를 다 받아와서 그 아이템들 중 available 상태인 것들만 필터링해서 보여준다
// }

// module.exports = ProductService;

//-----------------------------------------------------------------------------------------------------
// stub
const ProductClient = require("./product_client");
class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  // 테스트할 부분
  fetchAvailableItems() {
    return this.productClient //
      .fetchItems() //
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;

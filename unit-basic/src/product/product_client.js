class ProductClient {
  fetchItems() {
    return fetch("http://example.com/login/id+password").then((response) => response.json());
  } // 서버에서 데이터를 받아와 json으로 바꿔주는 임의의 코드 예시
}

module.exports = ProductClient;

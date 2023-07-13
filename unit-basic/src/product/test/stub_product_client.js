// 테스트용으로만 사용할 것이기 때문에 test 폴더에 작성
// 배포할 때는 test에 있는 파일들을 제외하고 배포

class StubProductClient {
  async fetchItems() {
    return [
      { item: "🥛", available: true },
      { item: "🍌", available: false },
    ];
  }
}

module.exports = StubProductClient;

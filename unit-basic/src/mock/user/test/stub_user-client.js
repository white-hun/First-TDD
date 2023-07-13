class StubUserClient {
  async fetchItems() {
    return; // <--
  }
}

module.exports = StubUserClient;

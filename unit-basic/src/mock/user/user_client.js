class UserClient {
  login(id, password) {
    return fetch("http://example.com/login/id_password") //
      .then((response) => response.json());
  }
}

module.exports = UserClient;

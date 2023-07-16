class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  } // 처음에만 로그인 false

  login(id, password) {
    if (!this.isLogedIn) {
      return this.userClient
        .login(id, password) //
        .then((data) => (this.isLogedIn = true));
    } // 두번째 부터는 client에서 로그인 요청을 하지않는다
  }
}

module.exports = UserService;

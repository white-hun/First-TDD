// 특정한 상황에 했는지 안했는지 행동을 검사하려면 mock을 사용해야한다
const UserService = require("../user_service");
const UserClient = require("../user_client");
jest.mock("../user_client");

describe("UserService", () => {
  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });
  let userService;

  // test가 수행되기 전에 호출되는 BeforeEach, 딱 한번만 호출되는 beforeAll
  beforeEach(() => {
    userService = new UserService(new UserClient());
    // login.mockClear();
    // UserClient.mockClear();
  });

  it("Calls login() on UserClient when tries to login", async () => {
    await userService.login("abc", "abc");
    expect(login.mock.calls.length).toBe(1);
  });

  // 로그인한 다음 또 다시 로그인을 할 때도 login client는 한번만 호출 되야 한다
  it("should not call login() on UserClient again ig already logged in", async () => {
    await userService.login("abc", "abc");
    await userService.login("abc", "abc");
    expect(login.mock.calls.length).toBe(1);
  });
});

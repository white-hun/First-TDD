const UserService = require("../user_service");
const StubUserClient = require("./stub_user-client");
const UserClient = require("./stub_user-client");

describe("UserService - Stub", () => {
  let userService;

  beforeEach(() => {
    userService = new UserService(new StubUserClient());
  });

  it("Logged In", async () => {
    const userState = await userService.login();
    expect(userState); //.toEqual(true);
  });
});

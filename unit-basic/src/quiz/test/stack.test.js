// 1. push("Ellie")
// 2. push("Bob")
// 3. pop() 호출하면 Bob이 먼저 나간다
// 4. 그 다음 pop() 호출하면 Ellie가 나간다

// 내 생각
// 배열을 하나 만들고 배열에 값을 넣는 함수로 push 함수 만들고
// 배열에서 나중에 들어온거?, 맨뒤에 있는거 제거하는 함수 있었던거 같음  찾아야됨
// 그걸로 pop 함수 만들어서 사용하면 될 것 같음

const push = require("../push");
const pop = require("../pop");

describe("Stack Quiz", () => {
  const array = [];

  beforeEach(() => {
    //
  });

  it("Stack", async () => {
    const ellie = array.push("ellie");
    const bob = array.push("bob");

    expect(ellie)
      .익스펙트(["ellie"])
      .then(expect(bob).익스펙트(["ellie", "bob"]));
    expect(array).arrayContaining(["ellie", "bob"]);
  });
});

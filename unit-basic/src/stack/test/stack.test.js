// 1. push("Ellie")
// 2. push("Bob")
// 3. pop() 호출하면 Bob이 먼저 나간다
// 4. 그 다음 pop() 호출하면 Ellie가 나간다

// 내 생각
// 배열을 하나 만들고 배열에 값을 넣는 함수로 push 함수 만들고
// 배열에서 나중에 들어온거?, 맨뒤에 있는거 제거하는 함수 있었던거 같음 찾아야됨
// 그걸로 pop 함수 만들어서 사용하면 될 것 같음

// const pushFn = require("../push");
// const popFn = require("../pop");

// describe("Stack Quiz", () => {
//   const stackArray = [];

//   beforeEach(() => {
//     //
//   });

//   it("Stack", async () => {
//     const ellie = pushFn(stackArray, "ellie");
//     const bob = pushFn(stackArray, "bob");

//     expect(ellie).arrayContaining(["ellie"]);
//     expect(bob).arrayContaining(["ellie", "bob"]);
//     expect(stackArray).arrayContaining(["ellie", "bob"]);
//   });
// });

//-------------------------------------------------------------------
// Stack에 있는 api를 통해 test를 하는데
// stack을 다른 브라우저에서 ui에서 stack을 이용해서 개발을 해나간다던지
// 백엔드에서 stack을 이용해서 비지니스 로직을 구현하던지
// 사용할 곳에서 stack을 어떻게 사용할 것인가에 대해서 조금더 집중해서 test를 작성할 수 있다
// test를 먼저 작성하면 좋은 점은
// stack의 api, 인터페이스 어떻게 사용할 것인가에 대해 좀 더 고민해볼 수 있다

const Stack = require("../stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack(); // stack은 항상 새로운 Stack을 만든다
  });

  // stack은 처음에 만들어졌을 때 항상 비어있는 상태가 되어야 한다
  it("is created empty", () => {
    expect(stack.size()).toBe(0); // size api
  });

  it("allows to push item", () => {
    stack.push("banana");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    it("throws an error if stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty");
    });

    it("returns the last pushed item and removes it from the stack", () => {
      stack.push("banana");
      stack.push("apple");

      expect(stack.pop()).toBe("apple");
      expect(stack.size()).toBe(1);
    });
  });
  describe("peek", () => {
    it("throws an error if stack is empty", () => {
      expect(() => {
        stack.peek();
      }).toThrow("Stack is empty");
    });
    it("returns the last pushed item byt keeps it in the stack", () => {
      stack.push("banana");
      stack.push("apple");

      expect(stack.peek()).toBe("apple");
      expect(stack.size()).toBe(2);
    });
  });
});

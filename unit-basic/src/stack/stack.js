class Stack {
  // 생성자 안에서 stack이 초기화 될 때 배열을 빈배열로 초기화
  constructor() {
    this.array = [];
  }
  size() {
    return this.array.length;
  }

  push(item) {
    this.array.push(item);
  }

  pop() {
    if (this.array.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.array.pop();
  }

  peek() {
    if (this.array.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.array.pop();
  }
}

module.exports = Stack;

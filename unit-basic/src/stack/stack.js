// class Stack {
//   // 생성자 안에서 stack이 초기화 될 때 배열을 빈배열로 초기화
//   constructor() {
//     this.array = [];
//   }
//   size() {
//     return this.array.length;
//   }

//   push(item) {
//     this.array.push(item);
//   }

//   pop() {
//     if (this.array.length === 0) {
//       throw new Error("Stack is empty");
//     }
//     return this.array.pop();
//   }

//   peek() {
//     if (this.array.length === 0) {
//       throw new Error("Stack is empty");
//     }
//     return this.array[this.size() - 1]();
//   }
// }

// module.exports = Stack;

//--------------------------------------------------------------------
// 내부 구성 사항 리펙토링
class Stack {
  // 생성자 안에서 stack이 초기화 될 때 배열을 빈배열로 초기화
  constructor() {
    this._size = 0;
    this.head = null;
  }
  size() {
    return this._size;
  }

  push(item) {
    const node = { item, next: this.head };
    this.head = node;
    this._size++;
  }

  pop() {
    if (this.head === null) {
      throw new Error("Stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
  }

  peek() {
    if (this.head === null) {
      throw new Error("Stack is empty");
    }
    return this.head.item;
  }
}

module.exports = Stack;

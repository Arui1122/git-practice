// stack.js
export default class Stack {
  // # 符號表示這是一個私有字段，只能在類內部訪問
  #items;

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素
  push(element) {
    this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.#items.pop();
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.#items[this.#items.length - 1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return this.#items.length === 0;
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length;
  }

  // 清空 stack 
  clear() {
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    console.log(this.#items.toString());
  }
}

export default class LocalStorage {
  constructor() {
    this.taskArray = [];
  }

  getItem(key) {
    return this.taskArray[key];
  }

  setItem(value) {
    // this.taskArray[key] = [...this.taskArray, value];
    this.taskArray.push(value);
  }

  clearItems() {
    this.taskArray = [];
  }

  getAllItems() {
    return this.taskArray;
  }
}

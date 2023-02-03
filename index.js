class LocalStorage1 {
  constructor() {
    this.map = new Map();
  }
  setItem(key, value) {
    if(typeof value !== 'string') {
        return this.map.set(key, JSON.stringify(value));
    }
    this.map.set(key, value);
  }
  getItem(key) {
    console.log(this.map.get(key));
  }
  removeItem(key) {
    if(this.map.has(key)) {
      this.map.delete(key);
      console.log("the element is delete");
    } else {
      console.log("This key is not exist in localStorage");
    }
  }
  clear() {
    this.map.clear();
  }
  legth() {
    console.log(this.map.size);
  }
}
let arr = new LocalStorage1();
arr.setItem("name", "Kaif");
arr.setItem("age", 21);
arr.setItem("city", "Jaipur");
// arr.getItem("name");
// arr.removeItem("name")
// arr.clear();
arr.removeItem("state")
arr.legth();
console.log(arr);

class LocalStorage {
  constructor() {
    this.map = new Map();
  }
  setItem(key, value) {
    if (typeof value !== "string") {
      return this.map.set(key, JSON.stringify(value));
    }
    this.map.set(key, value);
  }
  getItem(key) {
    if (this.map.has(key)) {
      console.log(this.map.get(key));
    }else{
        console.log("The key is not Defined")
    }
  }
  removeItem(key) {
    if (this.map.has(key)) {
      this.map.delete(key);
      console.log("the element is delete");
    } else {
      console.log("This key is not exist in localStorage");
    }
  }
  clear() {
    if (this.map.size) {
      this.map.clear();
    } else {
      console.log("Data not found");
    }
  }
  legth() {
    console.log(`Total Element in the localstorage - ${this.map.size}`);
  }
}
let arr = new LocalStorage();
arr.setItem("name", "Kaif");
arr.setItem("age", 21);
arr.setItem("city", "Jaipur");
arr.getItem("jome");
arr.removeItem("name")
arr.clear();
arr.removeItem("state");
arr.legth();
console.log(arr);

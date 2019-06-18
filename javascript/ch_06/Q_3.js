class Group {
  constructor(){
    this.list = [];
  }
  add(x){
    if(!this.has(x))
      this.list.push(x);
  }
  delete(z){
    if(this.has(z)){
      var index = this.list.indexOf(z);
      this.list.splice(index, 1);
    }
  }
  has(y){
    return this.list.includes(y);
  }
  static from(arr) {
    let group = new Group;
    for (let value of arr) {
      group.add(value);
    }
    return group;
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}
class GroupIterator{
  constructor(group){
    this.group = group;
    this.position = 0;
  }
  next(){
    if (this.position >= this.group.list.length) {
      return {done: true};
    }
    else {
      let result = {value: this.group.list[this.position],done: false};
      this.position++;
      return result;
    }
  }
}
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

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
}
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));

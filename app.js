function identify(){
    
    return this.name.toUpperCase()
}

var me = {
    name:'kyle'
}
console.log(typeof me)

console.log(identify.call(me))
var arr = [10,1,2,3,-5]
arr.sort((a,b)=> a-b)
console.log(arr)
var x = "hinktank"
console.log(x.split('').join(''));
var x = [1,2];
var y = [4,2];
console.log(x.concat(y))
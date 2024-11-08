function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    }
}

console.log(add(4)(5)(6)());

let res = add(4);
// res will be the function returned
// then you call it with 5 it returns add(4+5)
// then you call it with 6 it returns add(9+6)
// for the last one the if condition turns out false hence it returns a which is 15
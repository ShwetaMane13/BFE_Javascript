/* Currying is a useful technique used in JavaScript applications.

Please implement a curry() function, which accepts a function and return a curried one. 

example:

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(1)(2, 3) // '1_2_3'
curriedJoin(1, 2)(3) // '1_2_3'

*/

function curry(fn) {
    return function curriedFunction(...args){
      if(fn.length <= args.length){
        return fn(...args);
      } else {
        return function(...moreargs){
          return curriedFunction(...args, moreargs);
        }
      }
    }
  }
  
  const join = (a, b, c) => {
     return `${a}_${b}_${c}`
  }
  
  const curriedJoin = curry(join);
  
  console.log(curriedJoin(1, 2)(3));
  


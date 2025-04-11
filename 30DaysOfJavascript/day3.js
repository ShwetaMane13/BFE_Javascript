// Topic: Arrow Functions vs Normal Functions
// Theme: Output prediction based on this, arguments, and constructor behavior

const user = {
    name: "Shweta",
    greet: () => {
      console.log(`Hello, ${this.name}`);
    }
  };
  
  user.greet(); // What will this output and why?
  //output: "Hello, undefined"
  //why? Arrow functions don't have their own this. They inherit it lexically. 
  //Here, this refers to the global object, not user.
  //So this.name is undefined (unless name is defined globally).


  function normalFunc() {
    console.log(arguments);
  }
  
  const arrowFunc = () => {
    console.log(arguments);
  };
  
  normalFunc(1, 2, 3);
  arrowFunc(4, 5, 6); // What happens here and why?
  // output: normalFunc logs an array-like object [1, 2, 3]
  // output: arrowFuncwill throw Reference error: arguments is not defined
  // why? Arrow functions don't have their own arguments. They inherit it from the normal function 
  // that is wrapping it. Here there is none hence it can't find it and throw an error.


  const Person = (name) => {
    this.name = name;
  };
  
  const p = new Person("Shweta"); // What happens here?
  // output: TypeError: Person is not a constructor
  // why? Arrow functions cannot be used as constructors, they don't have the [[constructor]] method.
  // The new keyword expects a constructor function, so this line fails right away.


  const show = () => {
    console.log(this.name);
  };
  
  show.call({ name: "Shweta" }); // What's the output here and why?
    // output: undefined
    // Arrow function does not use the context passed by .call() and .bind().
    // this here refers to the outer lexical scope(window or undefined in strict mode),
    // so this.name is undefined.
  
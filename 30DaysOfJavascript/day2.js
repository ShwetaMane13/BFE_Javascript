// Topic: Variables & Scoping
// Problem: What will the following code output and why?

console.log("test scope with var")
function testScopeWithVar() {
    var x = 1;
    if (true) {
      var x = 2; // same x
      console.log("Inside if:", x);
    }
    console.log("Outside if:", x);
  }
  testScopeWithVar(); // 2 and 2
  
  console.log("test scope with let")
  function testScopeWithLet() {
    let x = 1;
    if (true) {
      let x = 2; // new block-level x
      console.log("Inside if:", x);
    }
    console.log("Outside if:", x);
  }
  testScopeWithLet(); // 2 and 1
  
  console.log("test scope with const")
  function testScopeWithConst() {
    const x = 1;
    if (true) {
      const x = 2; // new block-level x
      console.log("Inside if:", x);
    }
    console.log("Outside if:", x);
  }
  testScopeWithConst(); // 2 and 1

  // observations to be noted 

  // when i redeclare a function(with different function content) with the same name, the original one also gets changed. 
  // e.g testScope had one func declaration. when i copy pasted and made changes in the copy pasted function and ran the code, 
  // both functions gave the same answer on calling. so the value of 'testScope' was replaced with the new declaration in memory.

  // also var follows no rules when it comes to block scope or functional scope, etc. var x outside and var x inside are the same 
  // variable. hence it got redeclared and reinitialized. for let and const, var x is different inside and outside.
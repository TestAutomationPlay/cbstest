// https://github.com/TestAutomationPlay/cbstest.git

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // Implement your solution here
  
  // inititialise found B to false a default
  let foundCharB = false

  for(let i=0;i<S.length;i++){
      
      // just b should retun true
      if(S[i] === 'b'){
          foundCharB = true
      }
      // or with b followed by a to be false
      else if(S[i] === 'a' && foundCharB){
          return false
      }
  }
  // a is followed by b then true
  return true
}

console.log(solution('aaabb'));
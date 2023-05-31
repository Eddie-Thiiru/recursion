// Using iteration to get array
let iterationArray = [];

function fibs(num) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < num; i++) {
    if (iterationArray.length === num) {
      return;
    } else {
      iterationArray.push(a);

      const temp = b;
      b = a + b;
      a = temp;
    }
  }
}
fibs(8);
console.log(iterationArray);

// Using recursion to get
function fibsRec(num) {
  if (num < 2) {
    return num;
  } else {
    return fibsRec(num - 1) + fibsRec(num - 2);
  }
}

console.log(fibsRec(8));

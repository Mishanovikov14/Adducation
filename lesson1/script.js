function chess(row, col, sim) {
    let arrRow = [];
    let arrCol = [];
    let res = "";

    sim = sim ? sim : "*";

    if (row < 2 || col < 2) {
        res = "Number of Rows and Columns should be more than 2!";
    } else {
        for (let i = 0; i < row; i++) {
            arrCol = [];
            for (let j = 0; j < col; j++) {
                if (j % 2) {
                    arrCol.push(sim);
                } else {
                    arrCol.push("@");
                }
            }
            let str = arrCol.join("");
            arrRow.push(str);
        }
        res = arrRow.join("\n");
    }
    return res;
}

console.log(chess(4, 6, "%"));
console.log(chess(1, 1));
console.log(chess(2, 2, "#"));
console.log(chess(10, 7));
console.log("--------------------------------------------------------------------------------");

//-------------------------------------------------------------------------------

function bitCounter(n) {
    const res = [];
    n = n.toString(2).split("");
    n.forEach(element => {
        if (+element === 1) res.push(element);
    });
    return(res.length);
}

console.log(bitCounter(-5));
console.log(bitCounter(-1234));
console.log(bitCounter(1234));
console.log(bitCounter(20));
console.log("--------------------------------------------------------------------------------");

//--------------------------------------------------------------------------------

function fizzBuzz(n) {
    if (n < 1) return "N can`t be less than 1.";

    const arr = [];

    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    const res = arr.map(element => { 
        if (element % 3 === 0 && element % 5 === 0) return "fizzBuzz";
        if (element % 3 === 0) return "Fizz";
        if (element % 5 === 0) return "Buzz";
        return element;
    });

    return res;
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(-15));
console.log("--------------------------------------------------------------------------------");

//--------------------------------------------------------------------------------

function multiple(n) {
    const res = [];
    let arr = [];

    if (n.toString().length <= 1) return [];

    while (n.toString().length > 1) {
        n = n.toString().split("");
        arr = n.reduce((acc, rec) => acc * rec);
        res.push(arr);
        n = arr;
    }
    return res;
}

console.log(multiple(10));
console.log(multiple(69));
console.log(multiple(277777788888899));
console.log("--------------------------------------------------------------------------------");

//--------------------------------------------------------------------------------

function deepEqual(a, b){
    let res;
    if (typeof a === "object" && typeof b === "object" && a !== null && b !== null) {
      const keys1 = Object.keys(a);
      const keys2 = Object.keys(b);
      if (keys1.length !== keys2.length) return false;
      
      for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if (keys2.indexOf(key) >= 0) {
          if (!deepEqual(a[key], b[key])) {
            res = false;
            break;
          } else {
            res = true;
          }
        } else {
          res = false;
        }
      }
      return res;
    } else {
      return a === b
    }
  }
  
  const Obj1 = {
    firstName: "John",
    lastName: "Doe",
  }
  
  const Obj2 = {
    firstName: "John",
    lastName: "Doe",
  }

  const Obj3 = {
    firstName: "Peet",
    lastName: "Doe",
  }
  
  console.log(deepEqual(Obj1, Obj2));
  console.log(deepEqual(Obj1, Obj3));
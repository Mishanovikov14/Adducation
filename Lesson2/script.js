// Task 1 

function fiveLine(s) {
    let res = "";
    let str = "";

    s = s.trim();

    for (let i = 1; i < 6; i++) {
        str = `${s.repeat(i)}\n`;
        res += str;
    }

    return res;
}

console.log(fiveLine("  a"));
console.log(fiveLine(" xy "));


//Task 2

function calc(s) {
    const arr1 = s.split("");

    const arr2 = arr1.map(e => {
        return e.charCodeAt();
    });
    
    let total1 = arr2.join("");
    let total2 = total1.replaceAll(7,1);

    const sum1 = total1.split("").reduce((acc, rec) => Number(acc) + Number(rec));
    const sum2 = total2.split("").reduce((acc, rec) => Number(acc) + Number(rec));

    return sum1 - sum2;
}

console.log(calc("ABC"));
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
console.log("----------------------------------------------");

//Task 3

function alienLanguage(str) {
    let arr = str.split(" ").map(e => {
        return e.toUpperCase();
    });

    arr = arr.map(e => {
        var lastIndex = e.length - 1;
        e = e.replace(e[lastIndex], e[lastIndex].toLowerCase());
        return e;
    });

    return arr.join(" ");
}

console.log(alienLanguage("My name is John"));
console.log("----------------------------------------------");

// Task 4

function automorphic(n) {
    let nPow = Math.pow(n, 2);

    nPow = nPow.toString();
    n = n.toString();

    const nPowLength = nPow.length;
    const nLength = n.length;

    nPow = nPowLength < 2 ? nPow : nPow.slice(nPowLength - nLength);
    const res = Number(n) === Number(nPow) ? "Automorphic" :  "Not!!";

    return res;
}

console.log(automorphic(1));
console.log(automorphic(3));
console.log(automorphic(25));
console.log(automorphic(225));
console.log("----------------------------------------------");

// Task 7

function buildFun(n){

	const res = [];
  
	for (var i = 0; i < n; i++){
        let fun = function(i) {
			    return i;
		    };
		res.push(fun.bind(null, i));
	}
	return res
}


console.log(buildFun(10));

//Task 8 

var name = '';
var greet_abe = function() {
    name = 'Abe';
    return "Hello, " + name + '!';
};


var greet_ben = function() {
    name = 'Ben';
    return "Hello, " + name + '!';
};

// Ошибка была из-за того, что происходило замыкание, функция не находила переменную в своей области видимости
// и шла к глобальной области видимости

console.log(greet_abe());
console.log(greet_ben());

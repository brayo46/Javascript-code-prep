function checkPermute(stringOne,stringTwo) {

	if(stringOne.length !== stringTwo.length ) {
		return false;
	}

	else {
		var sortedStringOne = stringOne.split("").sort().join("")
		var sortedStringTwo = stringTwo.split("").sort().join("")
		return sortedStringOne === sortedStringTwo;
	}
};

console.log(checkPermute('aba','abc'))
console.log(checkPermute('abc','cab'))






//steps

//1.compare lengths of two strings,if not the same,return false
//2.if lengths are same;
//a; split the string
//b;sort it(organise letters in ascending order)
//c;join them back into a string
//d;compare them,if same its a permutation,if not its not

function sumDigits(number) {

	return Math.abs(number).toString().split("").reduce(function(a,b) {return +a + +b}, 0);
	
}

/*
Explanation

Math.abs(number) - get absolute value of number
toString().split("") : Convert number to string and then split it

reduce(function(a,b): Compare first number to second number

{return +a + +b}: Use unary(+) operator to convert elements to the right into numbers

After conversion, get sum of the these two numbers












*/


console.log(sumDigits(10));
console.log(sumDigits(99));
///find index of capitals
//append to array
//sort it


/*var str = 'abc'
var ind = str.indexOf('c')
console.log(ind)*/

var capitals = function (word) {
	// Write your code here
  var WordCount = [];

  for(var i =0; i < word.length; i++) {
  	if(word[i].toUpperCase() === word[i]) WordCount.push(i)
  		//if  letter converted to uppercase is same as letter in word...
  		//append it to our Caps array
  }
  return WordCount
};

console.log(capitals('WorD'));
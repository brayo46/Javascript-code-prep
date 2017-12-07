//task: Replace letters with alphabetical position i.e a = 1,b=2...

/*
steps

1.split text into array
2.Create an alphabet array
3.Loop thru getting the letter at each position in an array and convert it to lowercase
4.if the letter has an index in the alphabet array greater than -1 then push it into new array
5.Join the array to convert it back to a string

*/
function alphabetPosition(text) {
	test.split();
	var char = "";
	var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

	for (var i = 0;i < text.length;i++) {
		char = text.charAt(i).toLowerCase();

		if(alphabet.indexOf(char) > -1) {
			arr.push(alphabet.indexOf(char) + 1);
			var arr2 = arr.join("");
		}
	}
	return arr2;
}





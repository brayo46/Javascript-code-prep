//task: Create a function/method so that it returns the url with 
//anything after the anchor (#) removed.

function RemoveAnchor(url) {
	return url.split('#')[0];

	//how the method works

	/*
	url = "http://www.url.com/hey.html#end";
	url.split('#') === ["http://www.url.com/hey.html", "end"];
	url.split('#')[0] === "http://www.url.com/hey.html"

	*/

	/*
	1.split the string from # creating new array with two strings in the process i.e ["http://www.url.com/hey.html", "end"];
	2.Access the first element of the array and return it i.e http://www.url.com/hey.html

	*/

}

//Alternative way of completing the task

function removeAnchor(url) {
	return url.replace(/#.*/gi,"");

	//explanation

	//replace all characters after # with empty space and return the new string

}
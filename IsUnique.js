function IsUnique(string) {

	var isUniq = "string is unique";
	var isNotUniq = "string is not unique";

	//for each element,check remaining elements for duplicates

	for(var i = 0; i < string.length; i++) { //first element
		for (var j = i + 1; j < string.length; j++ ){ //second element

		
			if (string[i] === string[j]) {
				return isNotUniq;
			}
		}
	};
	//after looping thru all elements,if no match,return isUniq
	return isUniq;


};

console.log(IsUnique('baac'));
console.log(IsUnique('abcd'));
function lostSheep(friday, saturday, total) {

	//var remainder = [];
	var friCount = 0;
	var satCount = 0;
	var lost;
	
	for (var i in friday) {
		friCount += friday[i];
	}
	for (var i in saturday) {
		satCount += saturday[i];
	}

	var totalCount = friCount + satCount;

	lost = total - totalCount;

	return lost;

}

console.log(lostSheep([1, 2],[3, 4] ,15));
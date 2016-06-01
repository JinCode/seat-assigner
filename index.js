function seatAssign(numberOfPeople){
	//create new Array
	var people = [];
	for(var i = 0; i < numberOfPeople; i++){
		people.push(i + 1);
	}

	var middle = Math.floor(numberOfPeople / 2)
	var left = people.slice(0, middle)
	var right = people.slice(middle)
	console.log("Day: 1")
	console.log(left)
	console.log(right)	
	for(var i = 1; i < numberOfPeople - 1; i++){
		var leftlast = left.pop()

		left = left.slice(0,1).concat(right[0]).concat(left.slice(1))

		right = right.slice(1)
		right.push(leftlast)

		console.log("Day: " + (i + 1))
		console.log(left)
		console.log(right)
	}
}

module.exports = seatAssign;


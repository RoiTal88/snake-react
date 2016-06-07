var consts = require('../consts.js');
var utils= require('../utils/utils.js')
module.exports = function(state = null, action){
	if(action.type == consts.MOVMENT){
		var newBoard = JSON.parse(JSON.stringify(state))
		var lastPosition = action.payload.coords;
		var position = utils.newPosition(JSON.parse(JSON.stringify(action.payload.coords)), action.payload.direction)
		const direction = action.payload.direction
		const size = consts.BOARD_SIZE
		//var newArray = createNewArray(size)
		newBoard[lastPosition.y][lastPosition.x] = {color : 'orange'}
		newBoard[position.y][position.x].color = 'black'

		return newBoard
	}

	if(!state || action.type == consts.RESET_GAME){
		const size = consts.BOARD_SIZE;
		var a = createNewArray(size)
		placeFood(a)
		a[size/2][size/2].color = 'black'
		return a;
	}

	return state;
}

function placeFood(array){

	var food = []
	
	for (var i = 0; i < 20; i++) {
		const x=  getRandom(array.length), y = getRandom(array.length)
		food.push({x, y})
	};
	food.forEach((elem)=>{
		array[elem.y][elem.x].color = 'pink'
		array[elem.y][elem.x].type = 'food'
	})

}

function getRandom(size){
	return Math.floor((Math.random() * size))
}

function createNewArray(size){
	var a = new Array(size);
	for (var i = 0; i < size ; i++) {
		a[i] = new Array(size);
		for(var j = 0 ; j < a[i].length ; j++)
			a[i][j] = {color: 'orange'}
	};
	return a;
}
var consts = require('../consts.js');
var utils = require('../utils/utils.js')
const size = consts.BOARD_SIZE
const initialPosition = {x: size/2, y: size/2}
module.exports = function(state = initialPosition, action){
	if(action.type == consts.MOVMENT){
		return utils.newPosition(action.payload.coords, action.payload.direction )
	}

	if(action.type == consts.RESET_GAME){
		return initialPosition
	}

	return state
}
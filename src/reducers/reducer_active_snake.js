var consts =require('../consts.js')

module.exports = function(state=true, action){
	const type = action.type
	if(type == consts.STOP_PRESSED){
		if(action.payload) return false;
		return true
	}

	if(type == consts.RESET_GAME){
		return true
	}

	return state
}
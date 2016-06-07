var consts = require('../consts.js');

module.exports = function(state=0, action){
	var type = action.type
	switch (type){
		case (consts.FOOD_EATED):
			return (state + 1)

		case (consts.RESET_GAME):
			return 0;
	}
	return state;
} 
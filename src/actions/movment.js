var consts = require('../consts.js')
module.exports = function(direction){
	return {
		type : consts.MOVMENT,
		payload : direction
	}
}
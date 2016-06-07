var consts = require('../consts.js')

module.exports = function(isActive){
	return {
		type : consts.STOP_PRESSED,
		payload : isActive
	}
}
module.exports = {
	newPosition :  function(position , direction){
		if(onBounds(position, direction)){
			return position
		}

		switch (direction) {
			case 'right':
					position.y = position.y + 1	
				break;
			case 'left':
					position.y = position.y - 1	
				break;
			case 'up':
					position.x = position.x - 1	
				break;
			case 'down':
					position.x = position.x + 1	
				break;
			default:
				
				break;
		}
		return position;
	}
}


function onBounds(position, direction){

	if  (
			(direction == 'up' && position.x == 0) ||
			(direction == 'down' && position.x >= 29) ||
			(direction == 'left' && position.y == 0) || 
			(direction == 'right' && position.y >= 29) 
		) { return true}
	else {return false}
}
import { combineReducers } from 'redux';
var boardState = require('./reducer_board_state.js')
var snakePosition = require('./reducer_snake_position.js')
var score = require('./reducer_score.js');
const rootReducer = combineReducers({
  boardState : boardState,
  snakePosition : snakePosition,
  score : score
});

export default rootReducer;

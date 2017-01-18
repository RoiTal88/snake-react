var React = require('react');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;
var consts = require('../consts.js');
var bindActionCreators = Redux.bindActionCreators

var movment = require('../actions/movment.js')
var updateScore = require('../actions/updatescore.js')


var Row = require('../components/Row.js')

var Board = React.createClass({
	getInitialState: function() {
		return {
			direction: !this.props.activeSnake ? 'nodirection':'up',
		};
	},
	render: function() {
		return (
			<div style={this.getStyle()} onKeyPress={this.keyPressed}>
				{this.createRows()}
			</div>
		);
	},
	createRows: function(){
		var size = consts.BOARD_SIZE, rows = [];
		for (var i = 0; i < size; i++) {
			rows.push(<Row rowidx={i} key={i} rowInfo={this.props.boardState[i]}/>)
		};

		return rows;
	},
	getStyle: function(){
		return {
			display : 'flex',
		}
	},
/*	componentWillReceiveProps:function(nextProps) {
	
				
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		
	},*/
	componentWillMount: function() {
		if(!this.props.activeSnake) {
			return
		}

		window.addEventListener('keydown', this.keyPressed)
		this.interval = setInterval(()=>{
			if(this.props.activeSnake)this.props.movment({direction: this.state.direction, coords:this.props.snakePosition})
			if(this.toUpdateScore(this.props.snakePosition)) {
				this.props.updateScore()
			}
		}, 100)
	},
	componentWillUnmount: function() {
		//if(!this.props.activeSnake) return;
		clearInterval(this.interval)
	},
	keyPressed : function(event){
		if(!this.props.activeSnake) return;
		var direction = event.keyCode;
		switch (direction){
			case 37:
				direction = 'left'
			break;
			case 38:
				direction = 'up'
			break;
			case 39:
				direction = 'right'
			break;
			case 40:
				direction = 'down'
			break;
		}

		this.setState({direction});
	},
	toUpdateScore: function(position){
		const x = position.x;
		const y = position.y;
		var toreturn = (this.props.boardState[y][x].type == 'food')

		return toreturn
	}

});

function mapActionToProps(dispatch){
	return bindActionCreators({movment, updateScore}, dispatch);
}

function mapStateToProps(state){
	return {
		boardState: state.boardState,
		snakePosition : state.snakePosition,
		activeSnake : state.activeSnake
	}
}

module.exports = connect(mapStateToProps, mapActionToProps)(Board);
var React = require('react');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;
var consts = require('../consts.js');
var bindActionCreators = Redux.bindActionCreators

var movment = require('../actions/movment.js')

var Row = require('../components/Row.js')

var Board = React.createClass({
	getInitialState: function() {
		return {
			direction: 'up',
			coords : this.props.snakePosition

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
	componentWillMount: function() {
		window.addEventListener('keydown', this.keyPressed)
		this.interval = setInterval(()=>{
			this.props.movment({direction: this.state.direction, coords:this.state.coords})
			if(this.toUpdateScore(this.state.coords)) {}
		}, 100)
	},
	componentWillUnmount: function() {
		clearInterval(this.interval)
	},
	keyPressed : function(event){
		this.setState({direction : event.keyIdentifier.toLowerCase()})
		this.componentWillMount()
	},
	toUpdateScore: function(position){
		const x = position.x;
		const y = position.y
		var toreturn = (this.props.boardState[y][x].color == consts.FOOD_COLOR)

		if(toreturn){console.log(toreturn, this.props.boardState[y][x].color, this.props.boardState[x])}
		this.componentWillUnmount()
		return toreturn
	}

});

function mapActionToProps(dispatch){
	return bindActionCreators({movment}, dispatch)
}

function mapStateToProps(state){
	return {
		boardState: state.boardState,
		snakePosition : state.snakePosition,
	}
}

module.exports = connect(mapStateToProps, mapActionToProps)(Board);
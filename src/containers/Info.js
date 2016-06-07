var React = require('react');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;
var bindActionCreators = Redux.bindActionCreators
var stopPressed = require('../actions/stoppressed.js')
var resetGame = require('../actions/resetgame.js')

var Info = React.createClass({

	render: function() {
		return (
			<div style={this.getParentStyle()}>	
				<div style={this.getStyle()}>
					<span>Score: </span>
					<br/>
					<span>{this.props.score}</span>
				</div>
				<div style={this.getButtonStyle()}>
					<button className="btn btn-primary" onClick={this.stopPressed}>{this.props.activeSnake ? "Stop" : "Resume"}</button>
					<br />
					<button className="btn btn-secondery btn-danger" onClick={this.resetPressed}>Reset Game</button>
				</div>
			</div>
		);
	},
	getStyle :  function(){
		return {
			height : '150px',
			fontSize : "36px",
			border : "5px orange solid",
			borderRadius : "5px",
			textAlign : 'center',
			padding: '20px',
			marginBottom : '50px',
			color : 'orange',
			backgroundColor : 'black'
		}
	},
	getButtonStyle: function(){
		return {
			display : "flex",
			flexDirection : 'column',
			justifyContent : 'center'
		}
	},
	getParentStyle:  function(){
		return {
			marginLeft : '50px',
			marginTop : '50px'
		}
	},
	stopPressed:function(e){
		this.props.stopPressed(this.props.activeSnake);
	},
	resetPressed: function (e) {
		 this.props.resetGame()
	}

});

function mapActionToProps(dispatcher){
	return bindActionCreators({stopPressed, resetGame}, dispatcher)
}

function mapStateToProps(state){
	return  { 
		score : state.score,
		activeSnake: state.activeSnake
	}
}


module.exports = connect(mapStateToProps, mapActionToProps)(Info);
var React = require('react');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;
var bindActionCreators = Redux.bindActionCreators
var Info = React.createClass({

	render: function() {
		console.log(this.props)
		return (
			<div>
				<span>Score: </span>
				<span>{this.props.score}</span>
			</div>
		);
	}

});

function mapStateToProps(state){
	return  { 
		score : state.score
	}
}


module.exports = connect(mapStateToProps,null)(Info);
var React = require('react');

var Cell = React.createClass({
	shouldComponentUpdate: function(nextProps, nextState) {
	 	return nextProps.cellInfo.color != this.props.cellInfo.color;
	},
	render: function() {
		console.log('render')
		return (
			<div style={this.getStyle()} />
		);
	},
	getStyle: function(){
		return{
			backgroundColor: this.getBackgroundColor(),
			width: "25px",
			height: "25px",
			border : "1px grey solid",
			borderRadius : "5px"
		}
	},
	getBackgroundColor: function(){
		return this.props.cellInfo.color
	}

});

module.exports = Cell;
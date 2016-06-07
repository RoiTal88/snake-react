var React = require('react');
var Cell = require('../containers/Cell.js');
var consts = require('../consts.js');


var Row = React.createClass({

	render: function() {
		return (
			<div>
				{this.createCells()}
			</div>
		);
	},
	createCells : function(){
		var size = consts.BOARD_SIZE, cells = [];
		for (var i = 0; i < size; i++) {
			cells[i] = new Array(size)
			cells[i].push(<Cell xidx={i} yidx={this.props.rowidx} key={this.getCellKey(i)} cellInfo={this.props.rowInfo[i]} />)
		};
		return cells
	},
	getCellKey: function(index) {
		var str = (this.props.rowidx.toString() + index.toString());
		return str;
	}


});

module.exports = Row;
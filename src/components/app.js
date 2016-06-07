import React, { Component } from 'react';
var Board = require('../containers/Board.js');
var Info = require('../containers/Info.js');

export default class App extends Component {
  render() {
    return (
    	<div style ={this.getStyle()}>
    		<Board />
    		<Info />
    	</div>
      
    );
  }

  getStyle(){
  	return {
  		display : 'flex',
  		flexDirection : 'row'
  	}
  }
}

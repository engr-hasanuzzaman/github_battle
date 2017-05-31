var React = require('react');
var Link = require('react-router-dom').Link;
var Battle = require('./Battle');

class Home extends React.Component{
  render(){
    return(
      <div className='home-container'>
        <h1>Github Battle: Battle your friend...and stuff</h1>
        <Link className='button' to='/battle'>
          Battle
        </Link>
      </div>
    );
  }
}

module.exports = Home;

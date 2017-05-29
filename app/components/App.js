/**
 * Created by sumon on 5/29/17.
 */
var React = require('react');
var Popular = require('./Popular');

class App extends React.Component{
  render(){
    return(
      <div className='container'>
      <ul>
        <Popular />
       </ul>
    </div>
  )
  }
}
module.exports = App;

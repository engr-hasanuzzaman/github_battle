/**
 * Created by sumon on 5/29/17.
 */
var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Path = ReactRouter.Path;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Switch = ReactRouter.Switch;

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className='container'>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/popular' component={Popular} />
              <Route path='/battle' component={Battle} />
              <Route render={function() {
                return <p> Your page not found! </p>
              }} />
            </Switch>

         </div>
      </Router>

  )
  }
}
module.exports = App;

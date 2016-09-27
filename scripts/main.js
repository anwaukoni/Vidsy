const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Navigation = ReactRouter.Navigation;
const createBrowserHistory = require('history/lib/createBrowserHistory');
const Form = require("./form");

var App = React.createClass({
  render(){
    return (
      <div className="menu">
        <Form />
      </div>
    )
  }
});


ReactDOM.render(<App />, document.getElementById('main'));

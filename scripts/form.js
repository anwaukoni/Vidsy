/* ----------------------------------
 *       Form Component;
 *    State Controller of App;
 *      Route Method on Form
 * ---------------------------------- */


const React = require('react');
const ReactDOM = require('react-dom');
const formAction = require('./formAction');
const Results = require('./results');

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      results: []
    }

    this.changeRoute = this.changeRoute.bind(this);
  }

  changeRoute(event){
    event.preventDefault();
    event.stopPropagation();
    formAction.search(
      this.state.searchValue
    )
    .then(results => {
      // console.log(results);
      this.setState({results});
    });
  }

  render(){
    // console.log(this.state.results);
    return (
      <div>
        <form className="form-edit" onSubmit={this.changeRoute}>
          <h1>Flickr Search</h1>
          <input
            type="text"
            id="searchValue"
            placeholder="Search Photos"
            onChange={event=>this.setState({ searchValue: event.target.value })}
            />
            <button type='submit'>Submit</button>
        </form>
        {this.state.results ? <Results data={this.state.results} /> : null}
      </div>
    )
  }

}

export default Form;

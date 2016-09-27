/* ----------------------------------
 *        Result Component     
 * ---------------------------------- */

const React = require('react');
const ReactDOM = require('react-dom');
const Photo = require ('./photo');


const Results = React.createClass({
  renderPhoto: function(item){
    return (
      <Photo key={item.id} index={item.id} details={item}/>
    )
  },

  render (){
    const {data} = this.props;
    return(
      <div>
          <ul className="List-of-photos">
            {data.map(this.renderPhoto)}
          </ul>
      </div>
    )
  }
});




export default Results;

/* ----------------------------------
 *        Component to render
 *            each picture
 * ---------------------------------- */


const React = require('react');
const ReactDOM = require('react-dom');

const Photo = React.createClass({
  render(){
    let {farmId, id, secret, serverId } = this.props.details;
    return (
            <div className="photo-wrapper">
              <li>
                <img src={`https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`} alt=""/>
              </li>
            </div>
          )
  }
});

export default Photo;

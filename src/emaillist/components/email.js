import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Attached from '../../icons/components/attached';
import './email.scss';

class Email extends PureComponent {

  state = {
    isSelected: false,
  }

  handleClick = (event) => {
    this.props.openDetails(this.props.id);
  }

  handleToggle(e){
    e.preventDefault();
    this.setState({
      isSelected: !this.state.isSelected
    })
  }

  render() {
    const {isSelected} = this.state;
    return (
        <div className="EmailDescContent" onClick={this.handleClick}>
            <div className={`EmailDesc ${isSelected ? 'is-selected' : ''} `} onClick={(e)=>this.handleToggle(e)}>
              <div className="Left">
                  <h3>{this.props.from}</h3>
                  <p>{this.props.subject}</p>
              </div>
              <div className="Rigth" >
                <p>{this.props.date}</p>
                <p>
                  <Attached
                  size={18}
                 />
                 </p>
              </div>
              {/* <div className="Rigth" >
                <p>{this.props.attachements}</p>
                {
                  this.props.attachements.length > 0 ?
                <p>
                  <Attached
                  size={18}
                 />
                 </p>
                 : null
                }
              </div> */}
            </div>
        </div>
    )
  }
}

Email.propTypes = {
  from: PropTypes.string.isRequired,
  subject: PropTypes.string
}

export default Email;

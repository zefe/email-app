import React, {Component} from 'react';
import Attached from '../../icons/components/attached';
import './email-content.scss';
import { connect } from 'react-redux';

class EmailContent extends Component {
  render(){
    return(
      <div className="email">
        <div className="email-container">
          <div className="button-left">
            <button className="delete">Delete</button>
            <button className="spam">Spam</button>
          </div>
          <div className="button-rigth" >
            <button>Mark unread</button>
          </div>
          <h1 className="title">{this.props.details.get('from')}</h1>
          <div className="tags">
            <div className="tag">
            <span><strong>Tags</strong></span>
            <span className="tag-border">{this.props.details.get('tag')}</span>
            <span className="tag-border">business</span>
            </div>
          </div>
          <div className="email-body">
            <div className="email-content">
              {/* {props.children} */}
              <p>{this.props.details.get('body')}</p>            
               {/* <button onClick={props.handleClick} >Cerrar</button> */}
            </div>          
            <div className="email-footer">          
            <div className="icon">
                <p><Attached
                      size={18}
                      />                 
                <a href="#" target="_blank">{this.props.attach.get('name')}</a>
                </p>
              {/* {
                props.data.attachements.length > 0 ?
                <p><Attached
                      size={18}
                      />                 
                <a href={props.data.attachements[0].file} target="_blank">{props.data.attachements[0].name}</a>
                </p>
  
              : null
              } */}
              </div>
              <div className="button-replay">              
                <button >Replay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStatetoProps(state,props) {
  return {
    details: state.get('data').get('entities').get('emails').get(props.id),
    attach: state.get('data').get('entities').get('attachement').get(props.id)
  }
}

export default connect(mapStatetoProps) (EmailContent);

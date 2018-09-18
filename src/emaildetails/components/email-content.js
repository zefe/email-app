import React from 'react';
import Attached from '../../icons/components/attached';
import './email-content.scss';

function EmailContent(props) {
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
        <h1 className="title">{props.data.from}</h1>
        <div className="tags">
          <div className="tag">
          <span><strong>Tags</strong></span>
          <span className="tag-border">{props.data.tag}</span>
          <span className="tag-border">business</span>
          </div>
        </div>
        <div className="email-body">
          <div className="email-content">
            {props.children}
            <p>{props.data.body}</p>            
             {/* <button onClick={props.handleClick} >Cerrar</button> */}
          </div>          
          <div className="email-footer">          
          <div className="icon">
              <p><Attached
                    size={18}
                    />                 
              <a href={props.data.attachements.file} target="_blank">{props.data.attachements.name}</a>
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
// function EmailContent(props) {
//   return(
//     <div className="EmailContent">
//       <div className="EmailContentHeader">
//         <div className="buttonLeft">
//           <button>Delete</button> <button>Spam</button>
//         </div>
//         <div className="buttonRigth" > <button>Mark unread</button></div>
//       </div>
//       <div className="EmailContenMain">
//         {props.children}
//         <h1>{props.subject}</h1>
//         <h3>{props.body}</h3>
//         <button onClick={props.handleClick} >Cerrar</button>
//       </div>
//     </div>
//   )
// }

export default EmailContent;

import React from 'react';
import Email from './email.js';
import './emaillist.scss';
import Search from '../../widgets/containers/search';

function Emaillist(props) {
    //const emaillist = props.data;
    //console.log(props.data[0]);
    return (
      <div className="Emaillist">
        <div className="EmailListHeader">
        <div className="notify-container">
          <span className="notify-bubble">3</span>
          <h3><strong>Inbox</strong></h3>
        </div>
          <select>
            <option value="FilterBy">Filter by</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <Search />
        { 
          props.search.map((item) => {
            return <Email
              // {...item.toJS()}
              key={item.get('id')}
              from={item.get('from')}
              subject={item.get('subject')}
              body={item.get('body')}
              date={item.get('date')}
              isReaded={item.get('isReaded')}
              avatar={item.get('avatar')}
              tag={item.get('tag')}
              attachements={item.get('attachements')}
              file={item.get('attachements[0].file')}
              name={item.get('attachements[0].name')} 

              handleClick={props.handleOpenEmailContent}
            />
          })
        }
        {
          props.emaillist.map((item) => {
            // return <Email from={item.from} key={item.id} />
            return (
              <Email
                // {...item}
                key={item.get('id')}
                from={item.get('from')}
                subject={item.get('subject')}
                body={item.get('body')}
                date={item.get('date')}
                isReaded={item.get('isReaded')}
                avatar={item.get('avatar')}
                tag={item.get('tag')}
                attachements={item.get('attachements')}
                file={item.get('attachements[0].file')}
                name={item.get('attachements[0].name')}

                handleClick={props.handleOpenEmailContent} 
                />
            )
          })
        }
      </div>
    )
}

export default Emaillist;

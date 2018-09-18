import React from 'react';
import Attached from '../../icons/components/attached';
import './search.scss';

const Search = (props) => (
  <div className="Search">
    <form
    onSubmit={props.handleSubmit}
    >
      <div className="search-icon">
    		<input
          ref={props.setRef}
    			type="text"
          placeholder= "Search"
      		className="Search-input"
          name="search"
    		/>        
      </div>
  	</form>
  </div>
)

export default Search;

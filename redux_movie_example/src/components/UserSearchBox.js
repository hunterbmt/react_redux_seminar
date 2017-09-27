import React from 'react';
import SearchBox from './SearchBox';

const UserSearchBox = (props) => {
  const search = (query) => {
   if (query.length > 2) props.searchUser(query)
  }

  return (
    <div>
     <SearchBox
       query={props.query}
       result={props.result}
       onChange={props.onChange}
       onSearch={search}
     />
     // other component go here
    </div>
  );
}


export default UserSearchBox;

import React from 'react';
import SearchBox from './SearchBox';

const MovieSearchBox = (props) => {
  const search = (query) => {
   if (query.length > 2) props.search(query)
   else props.quickSearch(query)
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


export default MovieSearchBox;

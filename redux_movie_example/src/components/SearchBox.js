import React from 'react';

const SearchBox = (props) =>
<div>
 <input name='searchBoxInput'
    value={props.query}
    onChange={(e) => props.onChange(e.target.value)}
 />
 <div key='searchResults'>
   {props.result.map((item) => <div key={item}>{item}</div>)}
 </div>
 <button
   type='submit'
   name='searchBtn'
   onClick={() => props.onSearch(props.query)}
 >
  Search
 </button>
</div>

export default SearchBox;

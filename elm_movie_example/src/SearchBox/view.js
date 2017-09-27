import React from 'react';
import { view } from 'redux-elm';


const SearchBox = ({model, dispatch}) =>
<div>
 <input
    name='searchBoxInput'
    value={model.query}
    onChange={(e) => dispatch({type: 'Query.Changed',query: e.target.value})}
 />
 <div key='searchResults'>
   {model.result.map((item) => <div key={item}>{item}</div>)}
 </div>
 <button
   type='submit'
   name='searchBtn'
   onClick={() => dispatch({type: 'Search'})}
 >
  Search
 </button>
 <button onClick={() => dispatch({type: 'Clear'})}>
   Clear
 </button>
</div>

export default view(SearchBox);

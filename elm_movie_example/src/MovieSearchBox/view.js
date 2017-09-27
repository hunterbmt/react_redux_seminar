import React from 'react';
import { view, forwardTo } from 'redux-elm';

import SearchBox from '../SearchBox/view';

const MovieSearchBox = ({model, dispatch}) =>
<div>
 <SearchBox
    model = {model.searchBox}
    dispatch = {forwardTo(dispatch, 'SearchBox')}
 />
 // other component go here
</div>

export default view(MovieSearchBox);

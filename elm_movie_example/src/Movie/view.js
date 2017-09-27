import React from 'react';
import { view, forwardTo } from 'redux-elm';

import MovieSearchBox from '../MovieSearchBox/view';


const Movie = ({model, dispatch}) =>
<div>
 <MovieSearchBox
   model={model.movieSearchBox}
   dispatch={forwardTo(dispatch, 'MovieSearchBox')}
 />
 // other movie components go here
</div>

export default view(Movie);

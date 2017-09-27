import React from 'react';
import { connect } from 'react-redux';
import { queryChanged, search, quickSearch } from '../actions';
import MovieSearchBox from '../components/MovieSearchBox';


let Movie = (props) =>
  <div>
    <h2>Movie page</h2>
    <MovieSearchBox
     query={props.query}
     result={props.result}
     onChange={props.onQueryChange}
     search={props.search}
     quickSearch={props.quickSearch}
    />
    // other movie components go here
  </div>

const mapStateToProps = ({movie}) => ({
  query: movie.query,
  result: movie.result
});

const mapDispatchToProps = (dispatch) => ({
  onQueryChange: (value) => dispatch(queryChanged(value)),
  search: (query) => dispatch(search(query)),
  quickSearch: (query) => dispatch(quickSearch(query))
});

Movie = connect(mapStateToProps, mapDispatchToProps)(Movie)

export default Movie

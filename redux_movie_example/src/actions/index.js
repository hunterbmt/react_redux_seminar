const queryChanged = (query) => ({
 type: 'Query.Changed',
 payload: {
   query
 }
});


const search = (query) => {
 console.log('search');
 return {
  type: 'Search.Sucess',
  payload: {
   result: [
     'GoT', 'Breaking bad', 'Some movie'
   ]
  }
 };
}
const quickSearch = (query) => {
  console.log('quicksearch');
  return {
   type: 'Search.Sucess',
   payload: {
    result: [
      'ABC', 'Quick movie', 'A'
    ]
   }
  };
}

const userSearch = (query) => {
 console.log('search');
 return {
  type: 'UserSearch.Sucess',
  payload: {
   result: [
     'Nguyen Van A', 'Nguyen Van B', 'Nguyen Van C'
   ]
  }
 };
}
const clear = () => ({
  type: 'Search.Clear'
})

export {
  queryChanged,
  search,
  quickSearch,
  clear
};

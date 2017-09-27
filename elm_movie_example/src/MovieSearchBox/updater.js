import { Updater } from 'redux-elm';
import searchBoxUpdater, {init as searchBoxInit} from '../SearchBox/updater';


export const init = (query) => ({searchBox: searchBoxInit(query)})
export default new Updater(init())
.case('SearchBox', (model, action) => ({
  ...model,
  searchBox: searchBoxUpdater(model.searchBox, action)
 })
)
.case('SearchBox.Search' , (model, action) => {
 const query = model.searchBox.query;
 if (query.length > 2) return search(model, action);
 else return quickSearch(model, action);
})
.toReducer();



const search = (model, action) => {
 console.log('search');
 return {
   ...model,
   searchBox: searchBoxUpdater(model.searchBox, {
     type: 'Result.Changed',
     result: [
       'GoT', 'Breaking bad', 'Some movie'
     ]
   })
 };
}
const quickSearch = (model, action) => {
  console.log('quickSearch');
  return {
    ...model,
    searchBox: searchBoxUpdater(model.searchBox, {
      type: 'Result.Changed',
      result: [
        'ABC', 'Quick movie', 'A'
      ]
    })
  };
}

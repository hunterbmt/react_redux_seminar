import { Updater } from 'redux-elm';

export const init = (query) => ({query: query || '', result: []});
export default new Updater(init())
.case('Query.Changed', (model, action) => ({...model, query: action.query}))
.case('Result.Changed', (model, action) => ({...model, result: action.result}))
.toReducer();

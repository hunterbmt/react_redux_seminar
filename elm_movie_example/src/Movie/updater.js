import { Updater } from 'redux-elm';
import movieSearchBoxUpdater, {init as movieSearchBoxInit} from '../MovieSearchBox/updater';


export const init = () => ({
 movieSearchBox: movieSearchBoxInit()
});

export default new Updater(init())
.case('MovieSearchBox', (model, action) => ({
  ...model,
  movieSearchBox: movieSearchBoxUpdater(model.movieSearchBox, action)
 })
)
.toReducer();

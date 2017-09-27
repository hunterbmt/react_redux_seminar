import run from './boilerplate';

import view from './gif-viewers-dynamic-list/view';
import updater from './gif-viewers-dynamic-list/updater';
require('isomorphic-fetch');


run('root', view, updater);

import { combineReducers } from 'redux';

import { lists } from './list';
import { cards } from './card';
import { reducer as form } from 'redux-form';

export default combineReducers({ lists, cards,  form });

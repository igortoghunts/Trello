import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import { lists } from './list';
import { cards } from './card';

export default combineReducers({ lists, cards, form });

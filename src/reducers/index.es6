import { combineReducers } from 'redux';
import { shows, showsHasErrored, showsIsLoading } from './shows.es6';

export default combineReducers({
    shows,
    showsHasErrored,
    showsIsLoading
});
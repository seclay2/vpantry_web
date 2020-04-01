import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import pantryReducer from './pantryReducer';
import itemsReducer from './itemsReducer';

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    pantry: pantryReducer,
    items: itemsReducer
});
import { combineReducers } from 'redux';

// Features
import counterReducer from '../features/Counter/counter.reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;
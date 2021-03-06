import  { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// Store Creation
//  Note: line starting with window is used with redux dev tools only
export default () => {
    const store = createStore(
        combineReducers({
            auth:       authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}


import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

// Be sure to ONLY add this middleware in development!
// const middleware = process.env.NODE_ENV !== 'production' ?
// [require('redux-immutable-state-invariant')(), thunk] :
// [thunk];

export default function configureStore(initialState?:any) {
    // TODO: include redux immutable state invariant only in dev environtment
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}
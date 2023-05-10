import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "../redux/reducers/index"
import createSagaMiddeleware from 'redux-saga';
import rootSaga from '../redux/sagas/index'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from 'path-to-your-rootReducer';
// import middleware from './middleware';

const sagaMiddleware = createSagaMiddeleware();


const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const cofiqureStore = preloadedState => createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const store = cofiqureStore({});

sagaMiddleware.run(rootSaga)


export default store;
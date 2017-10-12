import { createStore } from 'redux'
import AllReducers from './AllReducers';
import AllMiddleware from './AllMiddleware';

const Store = createStore(AllReducers, AllMiddleware);

export default Store;
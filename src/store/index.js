import { createStore } from 'redux';

import rootReducer from './ducks/rootReducers';

const Store = createStore(rootReducer);

export default Store;
export const action = (type, payload) => Store.dispatch({ type, payload });
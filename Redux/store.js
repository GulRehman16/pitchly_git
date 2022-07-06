import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import thunk from 'redux-thunk';

import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducers from './Reducer/reducescombin';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};

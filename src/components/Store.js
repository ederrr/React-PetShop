import {createStore} from 'redux';
import reducers from './reducers/Login'

const Store = createStore(reducers);

export default Store;
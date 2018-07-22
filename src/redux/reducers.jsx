import { combineReducers } from 'redux';
import eneConfigApp from './../app/config';

// Version Number
const versionNumber = eneConfigApp.version_number ? eneConfigApp.version_number : '1.0.0';

const internalReducers = {
  version_app: () => versionNumber,
}


const reducers = (externalReducers = {}) => {
  let extReducers = {}
  Object.keys(externalReducers).forEach((it) => {    
    extReducers = Object.assign(extReducers, {
      [it]: () => externalReducers[it] 
    });
  });
  return combineReducers(Object.assign({}, internalReducers, extReducers));
};

export default reducers;

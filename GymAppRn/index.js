/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
import {
  db,
  createUserTable,
  createUser,
  listUsers,
} from '../GymAppRn/src/Entity/db/intialDataLoad';

console.log('App started');
console.log(listUsers());

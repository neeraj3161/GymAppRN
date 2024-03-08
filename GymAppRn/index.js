/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

AppRegistry.registerComponent(appName, () => App);
import {
  db,
  createUserTable,
  createUser,
  listUsers,
  deleteAllTableData,
  dropTable,
  getAsyncData,
  addAsyncData,
} from '../GymAppRn/src/Entity/db/intialDataLoad';

console.log('App started');

//addAsyncData('testKey', 'testValue');
//dd
//getAsyncData('login_details');
// console.log(dropTable('users'));
//console.log(listUsers());
//createUser();
listUsers();

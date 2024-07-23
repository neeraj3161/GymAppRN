/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

AppRegistry.registerComponent(appName, () => App);
import {
  db,
  createUserTable,
  createUser,
  listTableData,
  verifyUserCredentials,
  deleteAllTableData,
  dropTable,
  addAsyncData,
  getAsyncData,
  useLoggedIn,
  insertGymMember,
  createPlansTable,
  CreateMembersToPlan,
  CreateMemberTransactionTable,
  CreatePlanDuesTable,
  createGymMembersTable,
  createGymData,
  insertGymData
} from '../GymAppRn/src/Entity/db/intialDataLoad';

console.log('App started');

// function wait(ms) {
//   var start = new Date().getTime();
//   var end = start;
//   while (end < start + ms) {
//     end = new Date().getTime();
//   }
// }

// console.log('before');
// wait(7000);  //7 seconds in milliseconds
// console.log('after');

//addAsyncData('testKey', 'testValue');
//dd
//getAsyncData('login_details');
// console.log(dropTable('users'));
//console.log(listUsers());
//createUser();
listTableData('members');
//dropTable('members');
// createGymData();
// insertGymData();
//createUserTable();
//createGymMembersTable();
//createUser();
//createPlansTable();
//CreateMembersToPlan();

//CreateMemberTransactionTable();
//CreatePlanDuesTable();
//createPlansTable();

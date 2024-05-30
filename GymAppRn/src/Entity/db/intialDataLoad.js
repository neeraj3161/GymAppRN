import SQLite from 'react-native-sqlite-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const db = SQLite.openDatabase(
  {
    name: 'ez_local.db',
    createFromLocation: '~ez_local.db',
  },
  () => {
    // Success callback
    console.log('Database opened successfully');
    console.log(db);
  },
  error => {
    // Error callback
    console.error('Error opening database', error);
  },
);

const createUserTable = () => {
  db.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(255) UNIQUE, name VARCHAR(255), password VARCHAR(255) NOT NULL, phone_number VARCHAR(13) UNIQUE NOT NULL, gym_name VARCHAR(50) NOT NULL, registered_on DATETIME DEFAULT CURRENT_TIMESTAMP, modified DATETIME DEFAULT CURRENT_TIMESTAMP, creator NOT NULL DEFAULT 0, modifier NOT NULL DEFAULT 0)',
    [],
    result => {
      console.log('Table created successfully');
    },
    error => {
      console.log('Create table error', error);
    },
  );
};

const createGymMembersTable = () => {
  db.executeSql(
    'CREATE TABLE IF NOT EXISTS members (member_id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(255) UNIQUE, name VARCHAR(255) NOT NULL, surname VARCHAR(255), age INTEGER NOT NULL, date_of_birth DATE NOT NULL, phone_number VARCHAR(20) UNIQUE NOT NULL, medical_history VARCHAR(500), registered_on DATETIME DEFAULT CURRENT_TIMESTAMP, modified DATETIME DEFAULT CURRENT_TIMESTAMP, creator NOT NULL DEFAULT 0, modifier NOT NULL DEFAULT 0)',
    [],
    result => {
      console.log('members table created successfully');
    },
    error => {
      console.log('Create members table error', error);
    },
  );
};

const createUser = () => {
  let sql =
    'INSERT INTO users (email, name, password, phone_number, GYM_NAME) VALUES (?, ?, ?, ?,?)';
  let params = ['', 'Vikas', 'vikas@123456', '9270166110', 'Sai Gym'];
  db.executeSql(
    sql,
    params,
    result => {
      console.log('Success', 'User created successfully.');
    },
    error => {
      console.log('Create user error', error);
    },
  );
};

const listUsers = async () => {
  let sql = 'SELECT * FROM users';
  db.transaction(tx => {
    tx.executeSql(
      sql,
      [],
      (tx, resultSet) => {
        var length = resultSet.rows.length;
        for (var i = 0; i < length; i++) {
          console.log(resultSet.rows.item(i));
        }
      },
      error => {
        console.log('List user error', error);
      },
    );
  });
};

const verifyUserCredentials = (phone_number, password) => {
  return new Promise((resolve, reject) => {
    let sql =
      "SELECT * FROM users WHERE phone_number = '" +
      phone_number +
      "' and password = '" +
      password +
      "'";

    console.log(sql);
    db.transaction(tx => {
      tx.executeSql(
        sql,
        [],
        (tx, resultSet) => {
          var length = resultSet.rows.length;
          var data = resultSet.rows.item(0).id;
          console.log(data);
          if (length > 0) {
            resolve(parseInt(data)); // Resolve with 1 if user exists
          } else {
            reject(-1); // Resolve with -1 if user doesn't exist
          }
        },
        error => {
          console.log('List user error', error);
          reject(error); // Reject with error if query fails
        },
      );
    });
  });
};

const deleteAllTableData = function (tableName) {
  let sql = 'DELETE FROM ' + tableName;

  db.transaction(tx =>
    tx.executeSql(
      sql,
      [],
      (tx, resultSet) => {
        console.log('Deleted all users data');
      },
      error => {
        console.log('Error while deleting users data');
      },
    ),
  );
};

const dropTable = function (tableName) {
  let sql = 'DROP TABLE ' + tableName;
  console.log(sql);
  db.transaction(tx => {
    tx.executeSql(
      sql,
      [],
      (tx,
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        }),
    );
  });
};

const addAsyncData = async function (key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('async key: ' + key + ' value: ' + value + ' added!!');
  } catch (error) {
    console.log('Error occured addAsyncData: ' + error);
  }
};

const getAsyncData = async function (key) {
  try {
    let value = await AsyncStorage.getItem(key);
    // console.log('async value for: ' + key + ' value: ' + value);
    return value;
  } catch (error) {
    console.log('Error occured getAsyncData: ' + error);
    return error;
  }
};

const useLoggedIn = async function (key) {
  try {
    let value = await AsyncStorage.getItem(key);
    // console.log('async value for: ' + key + ' value: ' + value);
    return true;
  } catch (error) {
    console.log('Error occured getAsyncData: ' + error);
    return false;
  }
};

export {
  db,
  createUserTable,
  createUser,
  listUsers,
  verifyUserCredentials,
  deleteAllTableData,
  dropTable,
  addAsyncData,
  getAsyncData,
  useLoggedIn
};

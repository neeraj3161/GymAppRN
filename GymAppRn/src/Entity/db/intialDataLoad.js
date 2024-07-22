import SQLite from 'react-native-sqlite-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';

const db = SQLite.openDatabase(
  { name: "ez_local.db", location: 'default' },
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

//console.log(db);

console.log(`Document directory path: ${RNFS.DocumentDirectoryPath}`);



const checkIfDBExists = async () => {
  const dbExists = await RNFS.exists('/data/user/0/com.gymapprn/databases/ez_local.db');
  console.log(dbExists);
  console.log("copying db");
  await RNFS.copyFile('/data/user/0/com.gymapprn/databases/ez_local.db', RNFS.DownloadDirectoryPath + "/ez_backup.db");
}

checkIfDBExists();
// const createUserTable = () => {r
//   db.executeSql(
//     'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(255) UNIQUE, name VARCHAR(255), password VARCHAR(255) NOT NULL, phone_number VARCHAR(13) UNIQUE NOT NULL, gym_name VARCHAR(50) NOT NULL, registered_on DATETIME DEFAULT CURRENT_TIMESTAMP, modified DATETIME DEFAULT CURRENT_TIMESTAMP, creator NOT NULL DEFAULT 0, modifier NOT NULL DEFAULT 0)',
//     [],
//     result => {
//       console.log('Table created successfully');
//     },
//     error => {
//       console.log('Create table error', error);
//     },
//   );
// };


const createPlansTable = () => {
  db.executeSql(
    'CREATE TABLE IF NOT EXISTS plans (plan_id INTEGER PRIMARY KEY AUTOINCREMENT, plan_type VARCHAR(50) UNIQUE NOT NULL, plan_amount INTEGER NOT NULL, created DATETIME DEFAULT CURRENT_TIMESTAMP, modified DATETIME DEFAULT CURRENT_TIMESTAMP, creator NOT NULL DEFAULT 0, modifier NOT NULL DEFAULT 0)',
    [],
    result => {
      console.log('Table created successfully');
    },
    error => {
      console.log('Create table error', error);
    },
  );
};


const CreateMembersToPlan = () => {
  db.executeSql(
    'CREATE TABLE IF NOT EXISTS members_to_plan (member_id INTEGER NOT NULL,plan_id INTEGER NOT NULL, start_date DATETIME, end_date DATETIME, created DATETIME DEFAULT CURRENT_TIMESTAMP, modified DATETIME DEFAULT CURRENT_TIMESTAMP, creator NOT NULL DEFAULT 0, modifier NOT NULL DEFAULT 0, PRIMARY KEY (member_id, plan_id))',
    [],
    result => {
      console.log('Table created successfully');
    },
    error => {
      console.log('Create table error', error);
    },
  );
};

const CreateMemberTransactionTable = () => {
  db.executeSql(
    'CREATE TABLE IF NOT EXISTS transactions (transaction_id INTEGER PRIMARY KEY AUTOINCREMENT, member_id INTEGER NOT NULL REFERENCES members(member_id), plan_id REFERENCES plans(plan_id), amount INTEGER NOT NULL, created DATETIME DEFAULT CURRENT_TIMESTAMP, modified DATETIME DEFAULT CURRENT_TIMESTAMP, creator NOT NULL DEFAULT 0, modifier NOT NULL DEFAULT 0)',
    [],
    result => {
      console.log('Table created successfully');
    },
    error => {
      console.log('Create table error', error);
    },
  );
};

const CreatePlanDuesTable = () => {
  db.executeSql(
    'CREATE TABLE IF NOT EXISTS plan_dues (plan_due_id INTEGER PRIMARY KEY AUTOINCREMENT , member_id INTEGER NOT NULL REFERENCES members(member_id), plan_id REFERENCES plans(plan_id), amount INTEGER NOT NULL, created DATETIME DEFAULT CURRENT_TIMESTAMP, modified DATETIME DEFAULT CURRENT_TIMESTAMP, creator NOT NULL DEFAULT 0, modifier NOT NULL DEFAULT 0)',
    [],
    result => {
      console.log('Table created successfully');
    },
    error => {
      console.log('Create table error', error);
    },
  );
}

// const createGymMembersTable = () => {
//   db.executeSql(
//     'CREATE TABLE IF NOT EXISTS members (member_id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(255) UNIQUE, name VARCHAR(255) NOT NULL, surname VARCHAR(255), age INTEGER NOT NULL, date_of_birth DATE NOT NULL, phone_number VARCHAR(20) UNIQUE NOT NULL, medical_history VARCHAR(500), is_active bool default true,  registered_on DATETIME DEFAULT CURRENT_TIMESTAMP, modified DATETIME DEFAULT CURRENT_TIMESTAMP, creator NOT NULL DEFAULT 0, modifier NOT NULL DEFAULT 0)',
//     [],
//     result => {
//       console.log('members table created successfully');
//     },
//     error => {
//       console.log('Create members table error', error);
//     },
//   );
// };

const insertGymMember = (props) => {
  let sql = 'INSERT INTO members (email, name, surname, age, date_of_birth, phone_number, medical_history) VALUES (?,?,?,?,?,?,?)';
  let params = [props.email, props.name, props.surname, props.age, props.dob, props.phno, props.medical_history];

  db.executeSql(sql, params,
    result => {
      console.log(`member ${props.name} data inserted successfully!!`);
    },
    error => {
      console.log(`Error occured ${error}`);
    }
  )
}




const createGymData = () => {
  db.executeSql(
    'CREATE TABLE IF NOT EXISTS gym (gym_id INTEGER PRIMARY KEY AUTOINCREMENT, gym_name VARCHAR(50) NOT NULL, address VARCHAR(500), phone_number VARCHAR(50) UNIQUE NOT NULL, registered_on DATETIME DEFAULT CURRENT_TIMESTAMP, modified DATETIME DEFAULT CURRENT_TIMESTAMP, creator NOT NULL DEFAULT 0, modifier NOT NULL DEFAULT 0)',
    [],
    result => {
      console.log('Table created successfully');
    },
    error => {
      console.log('Create table error', error);
    },
  );
}

const insertGymData = () => {
  let sql =
    'INSERT INTO gym (gym_name, address, phone_number) VALUES (?, ?, ?)';
  let params = ['Sai Gym', 'ashok theatre pimpri pune 411017', '9270166110'];
  db.executeSql(
    sql,
    params,
    result => {
      console.log('Success', 'gym data inserted successfully.');
    },
    error => {
      console.log('gym data insert error', error);
    },
  );
}

const createUserTable = () => {
  //should be gym id as ref key
  db.executeSql(
    'CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY AUTOINCREMENT,gym_id INTEGER REFERENCES gym(gym_id),  email VARCHAR(255) UNIQUE, name VARCHAR(255), password VARCHAR(255) NOT NULL, phone_number VARCHAR(13) UNIQUE NOT NULL,user_role INTEGER DEFAULT 0, registered_on DATETIME DEFAULT CURRENT_TIMESTAMP, modified DATETIME DEFAULT CURRENT_TIMESTAMP, creator NOT NULL DEFAULT 0, modifier NOT NULL DEFAULT 0)',
    [],
    result => {
      console.log('Table created successfully');
    },
    error => {
      console.log('Create table error', error);
    },
  );
};


const createUser = () => {
  let sql =
    'INSERT INTO users (gym_id,email, name, password, phone_number) VALUES (?,?, ?, ?, ?)';
  let params = [1, '', 'Vikas', 'vikas@123456', '9270166110'];
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

const createGymMembersTable = () => {
  db.executeSql(
    'CREATE TABLE IF NOT EXISTS members (member_id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(255) UNIQUE, name VARCHAR(255) NOT NULL, surname VARCHAR(255), age INTEGER NOT NULL, date_of_birth DATE NOT NULL, phone_number VARCHAR(20) UNIQUE NOT NULL, medical_history VARCHAR(500), is_active bool default true,  registered_on DATETIME DEFAULT CURRENT_TIMESTAMP,added_by INTEGER REFERENCES users(user_id) NOT NULL, modified DATETIME DEFAULT CURRENT_TIMESTAMP, creator NOT NULL DEFAULT 0, modifier NOT NULL DEFAULT 0)',
    [],
    result => {
      console.log('members table created successfully');
    },
    error => {
      console.log('Create members table error', error);
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
  useLoggedIn,
  insertGymMember,
  createPlansTable,
  CreateMembersToPlan,
  CreateMemberTransactionTable,
  CreatePlanDuesTable,
  createGymMembersTable,
  createGymData,
  insertGymData
};


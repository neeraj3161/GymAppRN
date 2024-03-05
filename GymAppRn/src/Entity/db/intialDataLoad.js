import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'ez_local.db',
    location: 'default',
    createFromLocation: 2,
  },
  () => {
    // Success callback
    console.log('Database opened successfully');
  },
  error => {
    // Error callback
    console.error('Error opening database', error);
  },
);

const createUserTable = () => {
  db.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR, name VARCHAR, password VARCHAR, phone_number VARCHAR)',
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
    'INSERT INTO users (email, name, password, phone_number) VALUES (?, ?, ?, ?)';
  let params = ['admin@ezgym.com', 'Neeraj', '123456', '7447553161'];
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

export {db, createUserTable, createUser, listUsers};

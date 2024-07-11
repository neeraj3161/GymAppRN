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
    //should be gym id as ref key
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


const AddNewMember = (props) => {
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


const LoadMemberInfo = (member_id) => {

    let sql = 'SELECT name, surname, email, age, date_of_birth'
}
import SQLite from 'react-native-sqlite-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db as database } from './intialDataLoad';

const db = database != null || database != undefined ? database : SQLite.openDatabase(
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

//getAsyncData('login_details');

const insertGymMember = (props) => {
    return new Promise((resolve, reject) => {
        let sql = 'INSERT INTO members (email, name, surname, age, date_of_birth, phone_number, medical_history, added_by) VALUES (?,?,?,?,?,?,?,?)';
        let params = [props.email, props.name, props.surname, props.age, props.dob, props.phno, props.medical_history, props.added_by];

        db.executeSql(sql, params,
            result => {
                console.log(`Member ${props.name} data inserted successfully!!`);
                resolve(1);
            },
            error => {
                console.log(`Error occurred ${JSON.stringify(error)}`);
                if (error.message.includes("UNIQUE constraint")) {
                    console.warn('Constraint issue');
                    resolve(-1);
                } else {
                    reject(error);
                }
            }
        );
    });
};


const LoadMemberInfo = (member_id) => {

    let sql = `SELECT name, surname, email, age, date_of_birth, added_by, registered_on, is_active FROM members WHERE member_id = ${member_id};`;
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
                console.log('Loading single member error', error);
            },
        );
    });
};

const LoadAllMembers = () => {
    let sql = `SELECT name, surname, email, age, date_of_birth, added_by, registered_on, is_active FROM members;`;
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
                console.log('Loading single member error', error);
            },
        );
    });
}

const changeMemberState = (member_id, state) => {
    let sql = `UPDATE members SET is_active = ${state} WHERE member_id = ${member_id};`;
    db.executeSql(sql,
        result => {
            console.log(`member_id ${member_id} state updated to ${state}!!`);
        },
        error => {
            console.log(`Error occured ${error}`);
        }
    )
}

export { insertGymMember }


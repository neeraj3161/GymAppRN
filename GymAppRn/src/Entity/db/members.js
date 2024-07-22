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




const AddNewMember = (props) => {
    let sql = 'INSERT INTO members (email, name, surname, age, date_of_birth, phone_number, medical_history, added_by) VALUES (?,?,?,?,?,?,?)';
    let params = [props.email, props.name, props.surname, props.age, props.dob, props.phno, props.medical_history, props.user_id];

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




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

const updateGymMember = (props, phoneNumberChanged) => {
    console.log(JSON.stringify(props.name));
    return new Promise((resolve, reject) => {
        let sql = `UPDATE members SET email = '${props.email}',name = '${props.name}', surname =  '${props.surname}', date_of_birth =  '${props.dob}', age =  ${props.age}, medical_history =  '${props.medical_record}', modifier =  0`

        if (phoneNumberChanged) {
            sql = sql.concat(` ,phone_number =  '${props.phno}'`)
        }

        sql = sql.concat(` WHERE member_id = ${props.member_id};`)

        db.executeSql(sql, [],
            result => {
                console.log(`Member ${props.name} data updated successfully!!`);
                resolve(1);
            },
            error => {
                console.log(`Error occurred ${JSON.stringify(error)}`);
                reject(`update error ${error}`);
            }
        );
    });
};


const LoadMemberInfo = (member_id) => {

    let sql = `SELECT member_id, name, surname,phone_number, email, age, date_of_birth,medical_history, added_by, registered_on, is_active FROM members WHERE member_id = ${member_id};`;
    return new Promise((resolve, reject) => {

        const memberObject = new Object();
        db.transaction(tx => {
            tx.executeSql(
                sql,
                [],
                (tx, resultSet) => {
                    for (var i = 0; i < 1; i++) {
                        let result = (resultSet.rows.item(i));
                        memberObject.member_id = result.member_id;
                        memberObject.name = (`${result.name} ${result.surname}`).toUpperCase();
                        memberObject.email = result.email;
                        memberObject.phno = result.phone_number;
                        memberObject.age = result.age;
                        memberObject.dob = result.date_of_birth;
                        memberObject.added_by = result.added_by;
                        memberObject.registered_on = result.registered_on;
                        memberObject.is_active = result.is_active;
                        memberObject.medical_history = result.medical_history;
                    }
                    resolve(memberObject);
                },
                error => {
                    console.log('Loading single member error', error);
                    reject(error);
                },
            );
        });
    })
};

const LoadAllMembers = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT member_id, name, surname, email, age, date_of_birth, added_by, registered_on, is_active FROM members ORDER BY registered_on DESC;`;
        let allMemberData = [];
        db.transaction(tx => {
            tx.executeSql(
                sql,
                [],
                (tx, resultSet) => {
                    var length = resultSet.rows.length;
                    for (var i = 0; i < length; i++) {
                        const memberObject = new Object();
                        let result = (resultSet.rows.item(i));
                        memberObject.member_id = result.member_id;
                        memberObject.name = (`${result.name} ${result.surname}`).toUpperCase();
                        memberObject.email = result.email;
                        memberObject.age = result.age;
                        memberObject.dob = result.date_of_birth;
                        memberObject.added_by = result.added_by;
                        memberObject.registered_on = result.registered_on;
                        memberObject.is_active = result.is_ative;
                        allMemberData.push(memberObject);
                    }
                    resolve(allMemberData);
                },
                error => {
                    console.log('Loading single member error', error);
                    reject(error);
                },
            );
        });
    })

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

export { insertGymMember, LoadAllMembers, LoadMemberInfo, updateGymMember }


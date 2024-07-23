import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import { React, useState } from 'react'
import TopNavBar from '../SharedComponents/TopNavBar'
import Colors from '../../utils/Colors'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { insertGymMember } from '../../Entity/db/members';



const AddMember = () => {
    const [selected, setSelected] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDOB] = useState('');
    const [age, setAge] = useState('');
    const [medicalRecord, setMedicalRecord] = useState('');

    const today = new Date();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


    const resetInputAfterInsert = () => {
        //TODO :: ADD more inputs
        setEmail('');

    }

    const insertMember = () => {
        var member_data = new Object();
        member_data.email = email;
        member_data.name = name.toLowerCase();
        member_data.surname = surname.toLowerCase();
        member_data.age = parseInt(age);
        member_data.dob = dob;
        member_data.phno = phone;
        member_data.medical_history = medicalRecord;
        member_data.added_by = 1;

        return insertGymMember(member_data);
    }

    const validateUserInput = () => {
        console.log(name, phone, dob, age);
        if (name.length > 0 && phone.length >= 10 && dob.length > 0 && age.length > 0)
            return true;
        return false;
    }


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        //console.warn("A date has been picked: ", date);
        setSelected(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
        setAge((parseInt(today.getFullYear() - date.getFullYear())).toString());
        setDOB(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`)
        hideDatePicker();
    };




    return (
        <View style={styles.mainContainer}>
            <TopNavBar tabHeading={'Add new member'} />

            <ScrollView>

                <View style={styles.content}>
                    <View style={styles.inputView}>
                        <Text style={styles.inputHeading}>Name</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="ascii-capable"
                            value={name}
                            onChangeText={text => { setName(text) }}
                        />
                        <Text style={styles.inputHeading}>Surname</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="ascii-capable"
                            value={surname}
                            onChangeText={text => { setSurname(text) }}
                        />
                        <Text style={styles.inputHeading}>Phone no</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={text => { setPhone(text) }}
                        />
                        <TouchableOpacity onPress={() => {
                            if (!isDatePickerVisible) {

                                setDatePickerVisibility(true);

                            } else {
                                setDatePickerVisibility(false);
                            }
                        }} style={styles.dob}><Text>{selected.length > 0 ? `DOB: ${selected}` : 'Select DOB'}</Text></TouchableOpacity>



                        <View>
                            {showDatePicker && <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />}
                        </View>


                        <Text style={styles.inputHeading}>Email</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="email-address"
                            value={email}
                            onChangeText={text => { setEmail(text) }}
                        />

                        <Text style={styles.inputHeading}>Age (Years)</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            editable={false}
                            value={age}
                        />

                        <Text style={styles.inputHeading}>Medical record summary</Text>
                        <TextInput
                            style={[styles.input, styles.medicalRecordInput]}
                            keyboardType="ascii-capable"
                            value={medicalRecord}
                            onChangeText={text => { setMedicalRecord(text) }}
                        />

                        <TouchableOpacity onPress={() => {
                            if (!validateUserInput()) {
                                Alert.alert('Inavlid data', 'Please correct the form data and try again!!', [{ text: 'ok', onPress: () => { } }]);
                            } else {
                                insertMember().then(result => {
                                    if (result === -1) {
                                        Alert.alert('Member Already Exists', 'Show member data', [{ text: 'ok', onPress: () => { } }]);
                                    } else {
                                        Alert.alert('Member Added Successfully', 'Show member data', [{ text: 'ok', onPress: () => { } }]);
                                    }
                                })
                                    .catch(error => {
                                        Alert.alert('Error occured', `Error occured while inserting member: ${error}`, [{ text: 'ok', onPress: () => { } }]);
                                    });
                            }

                        }} style={styles.submitBtn}><Text style={styles.submitBtnTxt}>Submit</Text></TouchableOpacity>
                    </View>
                </View>
                {/* To cover bottom nav bar height */}
                <View style={{ height: 100 }}></View>
            </ScrollView>
        </View>

    )
}

export default AddMember

const styles = StyleSheet.create({
    mainContainer: {},
    input: {
        width: '100%',
        color: Colors.primaryDark,
        height: 50,
        borderRadius: 20,
        marginVertical: 10,
        paddingLeft: 10,
        backgroundColor: Colors.inputColorWhite
    },

    medicalRecordInput: {
        height: 100
    },

    content: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    inputView: {
        width: '100%',
    },
    dob: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    submitBtn: {
        backgroundColor: Colors.primaryBackground,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    submitBtnTxt: {
        color: Colors.inputColorWhite
    }
})
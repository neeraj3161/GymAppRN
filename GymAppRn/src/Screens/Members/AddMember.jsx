import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import { React, useState } from 'react'
import TopNavBar from '../SharedComponents/TopNavBar'
import Colors from '../../utils/Colors'
import { Calendar, LocaleConfig } from 'react-native-calendars';

const AddMember = () => {
    const [isValid, setDataValidation] = useState(false);
    const [selected, setSelected] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);

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
                        />
                        <Text style={styles.inputHeading}>Surname</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="ascii-capable"
                        />
                        <Text style={styles.inputHeading}>Phone no</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="phone-pad"
                        />
                        <TouchableOpacity onPress={() => {
                            if (!showCalendar) {

                                setShowCalendar(true);

                            } else {
                                setShowCalendar(false);
                            }
                        }} style={styles.dob}><Text>{selected.length > 0 ? `DOB: ${selected}` : 'Select DOB'}</Text></TouchableOpacity>



                        <View>
                            {showCalendar && <Calendar
                                onDayPress={day => {
                                    setSelected(day.dateString);
                                    console.log(day.dateString);
                                    setShowCalendar(false);
                                }}
                                markedDates={{
                                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                                }}
                            />}
                        </View>


                        <Text style={styles.inputHeading}>Email</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="email-address"
                        />

                        <Text style={styles.inputHeading}>Age</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                        />

                        <Text style={styles.inputHeading}>Medical record summary</Text>
                        <TextInput
                            style={[styles.input, styles.medicalRecordInput]}
                            keyboardType="ascii-capable"
                        />

                        <TouchableOpacity onPress={() => {
                            if (!isValid) {
                                Alert.alert('Inavlid data', 'Please correct the form data and try again!!', [{ text: 'ok', onPress: () => { } }]);
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
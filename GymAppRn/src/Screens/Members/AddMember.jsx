import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import TopNavBar from '../SharedComponents/TopNavBar'
import Colors from '../../utils/Colors'

const AddMember = () => {
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



                        <TouchableOpacity style={styles.dob}><Text>Select DOB</Text></TouchableOpacity>

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
                            style={styles.input}
                            keyboardType="ascii-capable"
                        />

                        <TouchableOpacity style={styles.submitBtn}><Text style={styles.submitBtnTxt}>Submit</Text></TouchableOpacity>
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
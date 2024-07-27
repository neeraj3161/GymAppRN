import { Image, StyleSheet, Switch, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import TopNavBar from '../SharedComponents/TopNavBar'
import Colors from '../../utils/Colors'
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native'
import { LoadMemberInfo } from '../../Entity/db/members'

const MemberDetailsPage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    //get the member_id passed through the navigation route :: AllMembersPage
    const memberId = route.params;
    const [member_id, setMemberId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhno] = useState('');
    const [medical_history, setMedicalRecord] = useState('');
    const [registration_date, setRegistrationDate] = useState('');
    const [currentPlan, setCurrentPlan] = useState('');
    const [dob, setDob] = useState('');
    const [state, setState] = useState();


    const loadMembers = useCallback(() => {
        LoadMemberInfo(memberId).then((result) => {
            console.log(JSON.stringify(result));
            setMemberId(memberId);
            setName(result.name);
            setPhno(result.phno);
            setEmail(result.email);
            setRegistrationDate(result.registered_on);
            setState(result.is_active == 1 ? true : false);
            setMedicalRecord(result.medical_history);
            setDob(result.dob);
        })
    }, []);

    useFocusEffect(
        useCallback(() => {
            loadMembers();
        }, [loadMembers])
    );


    return (
        <View style={styles.mainContainer}>
            <TopNavBar tabHeading={"Members Info"} />
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.basicDetailsCardView}>
                        <View style={styles.detailColumn}>
                            <Text style={styles.labelTxt}>MemberId: {member_id}</Text>
                            <View style={styles.status}></View>
                        </View>
                        <View style={styles.detailColumn}>
                            <Text style={styles.labelTxt}>Name: {name}</Text>

                        </View>

                        <Text style={styles.labelTxt}>Email: {email}</Text>

                        <Text style={styles.labelTxt}>Phone number: {phno}</Text>
                        <Text style={styles.labelTxt}>Medical record summary: {medical_history}
                        </Text>
                        <Text style={styles.labelTxt}>Registration date: {registration_date}</Text>
                        <Text style={styles.labelTxt}>Current plan: {currentPlan}</Text>
                        <Text style={styles.labelTxt}>Date of birth: {dob}</Text>
                        <View style={[styles.detailColumn, { marginVertical: 20 }]}>
                            <Image source={require('../../assets/icons/whatsapp.png')} style={{ width: 30, height: 30 }} />
                            <Image source={require('../../assets/icons/telephone-call.png')} style={{ width: 30, height: 30 }} />
                            <Image source={require('../../assets/icons/comments.png')} style={{ width: 30, height: 30 }} />

                        </View>

                        <View style={styles.statusSwitchContainer}>
                            <Text style={styles.labelTxt}>Change Active/Inactive status: </Text>
                            <Switch trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={true ? Colors.buttonColorPrimary : '#f4f3f4'}
                                value={state}
                            >
                            </Switch>
                        </View>
                    </View>

                </View>
                <TouchableOpacity onPress={() => { navigation.navigate("AddPlan") }} style={styles.viewPlanBtn}><Text style={styles.labelTxt}>Add new plan</Text></TouchableOpacity>

                {/* TODO:: If plan exists then only show below 2 options */}
                <TouchableOpacity style={styles.viewPlanBtn}><Text style={styles.labelTxt}>Current plan details</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("ViewPlanHistory") }} style={styles.viewPlanBtn}><Text style={styles.labelTxt}>View plan history</Text></TouchableOpacity>


                <TouchableOpacity onPress={() => { navigation.navigate("AddMember", ['Edit member data', member_id]) }} style={styles.viewPlanBtn}><Text style={styles.labelTxt}>Edit member info</Text></TouchableOpacity>

                {/* To cover bottom nav bar height */}
                <View style={{ height: 100 }}></View>
            </ScrollView>
        </View>
    )
}

export default MemberDetailsPage

const styles = StyleSheet.create({
    viewPlanBtn: {
        backgroundColor: Colors.primaryBackground,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 10
    },
    status: {
        backgroundColor: Colors.mediumGreen,
        height: 25,
        width: 25,
        borderRadius: 100
    },
    content: {

        justifyContent: 'center',
        alignItems: 'center'
    },
    statusSwitchContainer: {
        flexDirection: 'row',
    },

    basicDetailsCardView: {
        backgroundColor: Colors.primaryBackground,
        width: '90%',
        marginVertical: 20,
        borderRadius: 10,
        padding: 20
    },
    detailColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    labelTxt: {
        color: Colors.inputColorWhite,
        marginVertical: 10
    }
})
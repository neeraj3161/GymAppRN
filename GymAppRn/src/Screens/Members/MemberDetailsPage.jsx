import { Image, StyleSheet, Switch, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import TopNavBar from '../SharedComponents/TopNavBar'
import Colors from '../../utils/Colors'

const MemberDetailsPage = () => {
    return (
        <View style={styles.mainContainer}>
            <TopNavBar tabHeading={"Members Info"} />
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.basicDetailsCardView}>
                        <View style={styles.detailColumn}>
                            <Text style={styles.labelTxt}>MemberId: 12345</Text>
                            <View style={styles.status}></View>
                        </View>
                        <View style={styles.detailColumn}>
                            <Text style={styles.labelTxt}>Name: Neeraj Tripathi</Text>

                        </View>

                        <Text style={styles.labelTxt}>Email: -</Text>

                        <Text style={styles.labelTxt}>Phone number: 7447553161</Text>
                        <Text style={styles.labelTxt}>Medical record summary: -sJDDDDDDFHhhhhhhhhhhhhhhhhhhhhhhhhgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
                        </Text>
                        <Text style={styles.labelTxt}>Registration date: 02/02/2022</Text>
                        <Text style={styles.labelTxt}>Current plan: Monthly</Text>
                        <Text style={styles.labelTxt}>Date of birth: 01/01/1998</Text>
                        <View style={[styles.detailColumn, { marginVertical: 20 }]}>
                            <Image source={require('../../assets/icons/whatsapp.png')} style={{ width: 30, height: 30 }} />
                            <Image source={require('../../assets/icons/telephone-call.png')} style={{ width: 30, height: 30 }} />
                            <Image source={require('../../assets/icons/comments.png')} style={{ width: 30, height: 30 }} />

                        </View>

                        <View style={styles.statusSwitchContainer}>
                            <Text style={styles.labelTxt}>Change Active/Inactive status: </Text>
                            <Switch trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={true ? Colors.buttonColorPrimary : '#f4f3f4'}
                            >
                            </Switch>
                        </View>
                    </View>

                </View>
                <TouchableOpacity style={styles.viewPlanBtn}><Text style={styles.labelTxt}>Edit member info</Text></TouchableOpacity>
                <TouchableOpacity style={styles.viewPlanBtn}><Text style={styles.labelTxt}>Current plan details</Text></TouchableOpacity>
                <TouchableOpacity style={styles.viewPlanBtn}><Text style={styles.labelTxt}>View plan history</Text></TouchableOpacity>

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
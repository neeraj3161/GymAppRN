import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import CardViewWithImage from '../../utils/CommonComponents/CardViewWithImage'
import { useNavigation } from '@react-navigation/native'

const MainDash = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.topContainer}>
                <View style={styles.AppInfoContainer}>
                    <View>
                        <Text style={styles.gymNameTxt}>SAI GYM</Text>
                        <Text style={styles.versionTxt}>V 1.0.1</Text>
                    </View>

                    <View style={styles.profileIconOuter}>
                        {/* <Image src='#' /> */}

                    </View>


                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        keyboardType="visible-password"
                        secureTextEntry
                        placeholder='Search members'
                    />

                    <TouchableOpacity style={styles.searchBtn}>
                        <View >
                            <Image source={require('../../assets/icons/searchIcon.png')} style={{ width: 25, height: 25 }} />
                        </View>
                    </TouchableOpacity>


                </View>

            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.addBtn} onPress={() => { navigation.navigate("MemberDetails") }}>
                    <View >
                        <Image source={require('../../assets/icons/add.png')} style={{ width: 25, height: 25, }} />
                    </View>
                </TouchableOpacity>
                <ScrollView>
                    <ScrollView horizontal>

                        <CardViewWithImage cardName={'Plan Dues'} width={180} height={120} number={25} colorTxt={Colors.danger} />
                        <CardViewWithImage cardName={'Plan Dues Today'} width={180} height={120} number={25} colorTxt={Colors.buttonColorPrimary} />
                        <CardViewWithImage cardName={'All members'} width={180} height={120} imgSource={require('../../assets/icons/members.png')} />
                        <CardViewWithImage cardName={'Active'} width={180} height={120} imgSource={require('../../assets/icons/active.png')} />
                        <CardViewWithImage cardName={'Inactive'} width={180} height={120} imgSource={require('../../assets/icons/inactive.png')} />
                        {/* <CardViewWithImage cardName={'All members'} width={180} height={120} imgSource={require('../../assets/icons/searchIcon.png')} />
                    <CardViewWithImage cardName={'All members'} width={180} height={120} imgSource={require('../../assets/icons/searchIcon.png')} />
                    <CardViewWithImage cardName={'All members'} width={180} height={120} imgSource={require('../../assets/icons/searchIcon.png')} />
                    <CardViewWithImage cardName={'All members'} width={180} height={120} imgSource={require('../../assets/icons/searchIcon.png')} /> */}

                    </ScrollView>
                    <CardViewWithImage cardName={'Birthday'} width={'100'} height={120} imgSource={require('../../assets/icons/cake.png')} />
                    <CardViewWithImage cardName={'Amount dues'} width={'100'} height={120} number={3} colorTxt={Colors.danger} />
                    {/* To cover bottom nav bar height */}
                    <View style={{ height: 300 }}></View>

                </ScrollView >


            </View >

        </>
    )
}

export default MainDash

const styles = StyleSheet.create({

    addBtn: {
        backgroundColor: Colors.buttonColorPrimary,
        width: 50,
        borderRadius: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        bottom: 280,
        right: 5
    }
    ,
    topContainer: {
        height: 200,
        backgroundColor: Colors.primaryBackground,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 30

    },
    gymNameTxt: {
        color: Colors.white,
        fontSize: 20
    },
    versionTxt: {
        color: Colors.white,
    },
    AppInfoContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    profileIconOuter: {
        borderRadius: 100,
        borderColor: Colors.white,
        backgroundColor: Colors.white,
        height: 60,
        width: 60
    },
    input: {
        width: '75%',
        color: Colors.white,
        height: 50,
        borderRadius: 20,
        backgroundColor: Colors.inputColorWhite,
        paddingLeft: 30,
    },

    inputView: {

        marginTop: 30,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    searchBtn: {
        width: '15%',
        backgroundColor: Colors.buttonColorPrimary,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomContainer: {
        marginTop: 30
    }
})
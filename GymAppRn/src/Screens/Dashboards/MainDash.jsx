import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'

const MainDash = () => {
    return (
        <View style={styles.mainContainer}>
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
                    onChangeText={{}}
                    value={{}}
                />

                <TouchableOpacity style={styles.searchBtn}>
                    <View >
                        <Image source={require('../../assets/icons/searchIcon.png')} style={{ width: 25, height: 25 }} />
                    </View>
                </TouchableOpacity>


            </View>

        </View>
    )
}

export default MainDash

const styles = StyleSheet.create({
    mainContainer: {
        height: '28%',
        backgroundColor: '#212640',
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
        height: 70,
        width: 70
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
    }
})
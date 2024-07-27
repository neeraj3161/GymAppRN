import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../Colors'
import HorizontalLine from './horizontalLine'

const SettingsOptionCard = (props) => {
    return (
        <TouchableOpacity onPress={() => { props.onPress }}>
            <View style={styles.mainContainer}>
                <Text style={styles.optionsTxt}>{props.optionsName}</Text>
                <View style={{ width: '100%', height: 1, backgroundColor: Colors.lightGrey, marginTop: 5 }}></View>
            </View>
        </TouchableOpacity>
    )
}

export default SettingsOptionCard

const styles = StyleSheet.create({
    optionsTxt: {
        color: Colors.shinyBlack,
        fontSize: 20,
    },
    mainContainer: {
        marginHorizontal: 20,
        marginVertical: 20,

        justifyContent: 'center',
    }
})
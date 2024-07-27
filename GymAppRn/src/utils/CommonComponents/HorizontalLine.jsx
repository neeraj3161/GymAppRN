import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Colors'

const HorizontalLine = () => {
    return (
        <View style={styles.hr}>
        </View>
    )
}

export default HorizontalLine

const styles = StyleSheet.create({
    hr: {
        width: '100%',
        borderBottomEndRadius: 1,
        height: 1,
        backgroundColor: Colors.buttonColorPrimary,

    }
})
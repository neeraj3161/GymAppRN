import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'

const MembersListCard = (props) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.cardContent}>
                <Text>{props.memberId}</Text>
                <Text>{props.name}</Text>

                <View style={styles.status}></View>
                <Image source={require('../../assets/icons/right_arrow.png')} height={25} width={25} />
            </TouchableOpacity>
        </View>
    )
}

export default MembersListCard

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 10,
        height: 80,
        marginVertical: 20
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20
    },

    status: {
        backgroundColor: Colors.mediumGreen,
        height: 20,
        width: 20,
        borderRadius: 100
    },
})
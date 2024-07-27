import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import { useNavigation } from '@react-navigation/native'

const MembersListCard = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('MemberDetails', props.memberId);
            }} style={styles.cardContent}>
                <View style={styles.content}>
                    <Text style={styles.headTxt}>Mem Id</Text>

                    <Text style={styles.txtData}>{props.memberId}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.headTxt}>Name</Text>

                    <Text style={styles.txtData}>{props.name}</Text>

                </View>
                <View style={styles.content}>
                    <Text style={styles.headTxt}>Status</Text>

                    <View style={styles.status}></View>

                </View>
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
        backgroundColor: Colors.shinyWhite,
        borderRadius: 10,
        height: 80,
        marginVertical: 10,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        color: Colors.shinyBlack

    },

    status: {
        backgroundColor: Colors.mediumGreen,
        height: 15,
        width: 15,
        borderRadius: 100
    },

    headTxt: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: Colors.buttonColorPrimary
    },


    content: {
        justifyContent: 'space-between',
        color: Colors.shinyBlack

    },
    txtData: {
        color: Colors.buttonColorPrimary

    }
})
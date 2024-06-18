import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'

const PlanHistoryCard = (props) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.cardContent}>
                <View style={styles.content}>
                    <Text style={styles.headTxt}>Txn Id</Text>
                    <Text>{props.txnId}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.headTxt}>Plan</Text>
                    <Text>{props.plan}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.headTxt}>Amnt</Text>
                    <Text>{props.amount}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.headTxt}>Pending</Text>
                    <Text style={props.amount > 0 ? ({ color: Colors.red }) : Colors.white}>{props.pending}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.headTxt}>Date</Text>
                    <Text>{props.date}</Text>
                </View>
                <Image source={require('../../assets/icons/right_arrow.png')} height={25} width={25} />
            </TouchableOpacity>
        </View>
    )
}

export default PlanHistoryCard

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 10,
        height: 80,
        marginVertical: 10
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        alignItems: 'center'
    },

    content: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headTxt: {
        fontWeight: 'bold',
        marginBottom: 5
    }
})
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import TopNavBar from '../SharedComponents/TopNavBar'
import PlanHistoryCard from './PlanHistoryCard'

const PlanHistoryPage = () => {
    return (
        <View style={styles.mainContainer}>
            <TopNavBar tabHeading={"Plan History"} />
            {/* <View style={styles.table}>
                <View style={styles.headData}>
                    <Text style={styles.headerTxt}>Txn Id</Text>
                    <Text style={styles.dataTxt}>123</Text>

                </View>
                <View style={styles.headData}>
                    <Text style={styles.headerTxt}>Plan</Text>
                    <Text style={styles.dataTxt}>Monthly</Text>


                </View>
                <View style={styles.headData}>
                    <Text style={styles.headerTxt}>AmountPaid</Text>
                    <Text style={styles.dataTxt}>2000</Text>


                </View>
                <View style={styles.headData}>
                    <Text style={styles.headerTxt}>Pending</Text>
                    <Text style={styles.dataTxt}>100</Text>


                </View>
                <View style={styles.headData}>
                    <Text style={styles.headerTxt}>Date</Text>
                    <Text style={styles.dataTxt}>22/08/2024</Text>


                </View>
            </View> */}
            <ScrollView>
                <PlanHistoryCard txnId={1234} plan={'Monthly'} amount={2000} pending={0} date={'22/03/2024'} />
                <PlanHistoryCard txnId={1234} plan={'Monthly'} amount={2000} pending={0} date={'22/03/2024'} />

                <PlanHistoryCard txnId={1234} plan={'Monthly'} amount={2000} pending={0} date={'22/03/2024'} />
                {/* adjust bottom height if req */}
                <View style={{ height: 150 }}></View>
            </ScrollView>
        </View>
    )
}

export default PlanHistoryPage

const styles = StyleSheet.create({
    mainContainer: {
    },
    table: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    headerTxt: {
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },

    dataTxt: {

    },

    headData: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

})
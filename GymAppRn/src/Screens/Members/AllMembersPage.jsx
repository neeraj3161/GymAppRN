import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MembersListCard from './MembersListCard'

const AllMembersPage = () => {
    return (
        <View>
            <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
        </View>
    )
}

export default AllMembersPage

const styles = StyleSheet.create({})
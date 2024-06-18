import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MembersListCard from './MembersListCard'

const AllMembersPage = () => {
    return (
        <View>
            <ScrollView>
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
                <MembersListCard memberId={1234} name={"Neeraj Tripathi"} />
            </ScrollView>

        </View>
    )
}

export default AllMembersPage

const styles = StyleSheet.create({})
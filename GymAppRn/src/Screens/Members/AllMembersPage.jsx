import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import MembersListCard from './MembersListCard'
import { FlashList } from '@shopify/flash-list'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { LoadAllMembers } from '../../Entity/db/members'

const AllMembersPage = () => {

    const loadMembers = useCallback(() => {
        LoadAllMembers()
            .then((result) => {
                setMemberData(result);
                console.log(JSON.stringify(result));
            })
            .catch((error) => {
                console.log(`Something went wrong ${error}`);
            });
    }, []);

    useFocusEffect(
        useCallback(() => {
            loadMembers();
        }, [loadMembers])
    );


    const [member_data, setMemberData] = useState();

    const navigation = useNavigation();
    const data = member_data;
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <FlashList
                data={data}
                renderItem={({ item }) =>
                    <MembersListCard memberId={item.member_id} name={item.name} />
                }
                estimatedItemSize={99}
            />
        </View>

    )
}

{/* <ScrollView>
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
            </ScrollView> */}


export default AllMembersPage

const styles = StyleSheet.create({})
import { Dimensions, ScrollView, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import MembersListCard from './MembersListCard'
import { FlashList } from '@shopify/flash-list'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { LoadAllMembers } from '../../Entity/db/members'
import Colors from '../../utils/Colors'

const AllMembersPage = () => {

    var allMembersData = [];
    const filterByValue = (value) => {
        let searchData = [];
        console.log(`allMembersData :: ${allMembersData}`);
        allMembersData.forEach(data => {
            if (data.name.toString().includes(value)) {
                console.log(data);
                searchData.push(data);

            }
        })

        if (searchData.length > 0)
            setMemberData[searchData];
        else
            setMemberData[allMembersData];
    };



    const loadMembers = useCallback(() => {
        LoadAllMembers()
            .then((result) => {
                allMembersData.push(result);
                console.log(`allMembersData :: ${allMembersData}`);

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

        <View style={{ height: '100%', width: '100%', }}>
            <TextInput
                style={styles.input}
                keyboardType="visible-password"
                secureTextEntry
                placeholder='Search members'
                placeholderTextColor={Colors.buttonColorPrimary}
                onChangeText={(text) => {
                    // Usage
                    filterByValue(text);
                }}
            />
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

const styles = StyleSheet.create({
    input: {
        color: Colors.buttonColorPrimary,
        height: 50,
        borderRadius: 20,
        backgroundColor: Colors.shinyWhite,
        paddingLeft: 30,
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: Colors.buttonColorPrimary,
        borderWidth: 1
    },
})
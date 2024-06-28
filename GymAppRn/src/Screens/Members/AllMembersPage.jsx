import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MembersListCard from './MembersListCard'
import { FlashList } from '@shopify/flash-list'
import { useNavigation } from '@react-navigation/native'

const AllMembersPage = () => {

    const navigation = useNavigation();
    const data = [{ member_id: 9249, name: 'Jane Smith' }, { member_id: 5026, name: 'David Rodriguez' }, { member_id: 5419, name: 'Emily Williams' }, { member_id: 5254, name: 'Jane Miller' }, { member_id: 1106, name: 'Jane Johnson' }, { member_id: 6534, name: 'Jane Smith' }, { member_id: 3863, name: 'Jane Davis' }, { member_id: 3716, name: 'Alex Jones' }, { member_id: 4551, name: 'Jane Davis' }, { member_id: 1054, name: 'Jane Williams' }, { member_id: 8776, name: 'Katie Brown' }, { member_id: 6299, name: 'Katie Martinez' }, { member_id: 2743, name: 'Emily Smith' }, { member_id: 5325, name: 'Anna Rodriguez' }, { member_id: 3845, name: 'Alex Davis' }, { member_id: 7573, name: 'Chris Martinez' }, { member_id: 2990, name: 'Sarah Davis' }, { member_id: 1635, name: 'Alex Johnson' }, { member_id: 3100, name: 'Anna Williams' }, { member_id: 7813, name: 'Chris Davis' }, { member_id: 8251, name: 'James Rodriguez' }, { member_id: 8479, name: 'Emily Garcia' }, { member_id: 6147, name: 'Anna Miller' }, { member_id: 4820, name: 'Alex Davis' }, { member_id: 3440, name: 'Jane Garcia' }, { member_id: 5939, name: 'John Jones' }, { member_id: 9813, name: 'Anna Williams' }, { member_id: 2285, name: 'Emily Smith' }, { member_id: 4068, name: 'James Martinez' }, { member_id: 3904, name: 'Anna Williams' }, { member_id: 9319, name: 'Anna Rodriguez' }, { member_id: 4762, name: 'Jane Brown' }, { member_id: 8266, name: 'Sarah Williams' }, { member_id: 8254, name: 'Chris Smith' }, { member_id: 2039, name: 'Emily Rodriguez' }, { member_id: 1503, name: 'Anna Martinez' }, { member_id: 5085, name: 'Alex Martinez' }, { member_id: 2028, name: 'James Davis' }, { member_id: 9881, name: 'Chris Miller' }, { member_id: 1382, name: 'Katie Johnson' }, { member_id: 5840, name: 'Katie Brown' }, { member_id: 6677, name: 'John Brown' }, { member_id: 8955, name: 'Katie Garcia' }, { member_id: 1218, name: 'John Davis' }, { member_id: 3904, name: 'Sarah Rodriguez' }, { member_id: 4947, name: 'James Garcia' }, { member_id: 9438, name: 'Jane Smith' }, { member_id: 8728, name: 'John Garcia' }, { member_id: 5647, name: 'Jane Brown' }, { member_id: 2972, name: 'Emily Williams' }
    ]
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
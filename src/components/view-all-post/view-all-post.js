import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ViewAllPostStyle from "./view-all-post-styles/view-all-post-style";
import axios from 'axios';
const ViewAllPost = ({ navigation }) => {
    const [listOfData, setListOfData] = useState([]);
    useEffect(() => {
        axios.get('https://api-linked-list-v1.herokuapp.com/view-all')
            .then(res => {

                setListOfData(res.data.posts);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <View>
            {listOfData.map((item, index) => {
                return (
                    <View style={ViewAllPostStyle.container}>
                        <View key={index}>
                            <Text style={ViewAllPostStyle.title}>{item.title}</Text>
                            <Text style={ViewAllPostStyle.body}>{item.content}</Text>
                            <View style={ViewAllPostStyle.row}>
                                <Text>Head : {item.head}</Text>
                                <Text>Possition : {item.position}</Text>
                                <Text>Tail : {item.tail}</Text>
                            </View>
                        </View>
                    </View>
                )
            }
            )}
        </View>
    );
}
export default ViewAllPost;
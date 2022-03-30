import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import axios from 'axios';
import BodyStyle from "./body-styles/body-style";

import Navigation from '../navigation/navigation';

const postBody = ""




const Body = ({ navigation }) => {
    const [post, setPostPost] = useState([]);


    useEffect(() => {
        axios.get('https://api-linked-list-v1.herokuapp.com/view-all')
            .then(res => {
                console.log(res.data.posts[0]);
                setPostPost(res.data.posts[0]);

            })
            .catch(err => {
                console.log(err);
            })
    }, []);



    return (
        <View style={BodyStyle.Boxcontainer}  >
            <Navigation navigation={navigation} />
            <View style={BodyStyle.container}>
                <View style={BodyStyle.content}>
                    <Text style={BodyStyle.title}>{post.title}</Text>
                    <Text style={BodyStyle.body}>{post.content}</Text>
                </View>
            </View>
            <View style={BodyStyle.navigation}>
                <TouchableOpacity style={BodyStyle.button} onPress={() => { console.log('pressed') }}>
                    <Text> Previous </Text>

                </TouchableOpacity>
                <TouchableOpacity style={BodyStyle.button} onPress={() => { console.log('pressed') }}>
                    <Text>Next</Text>

                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Body
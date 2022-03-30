import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Picker } from "react-native";
import AddNewPostStyle from "./add-new-post-styles/add-new-post-style";
const AddNewPost = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [position, setPosition] = useState('');
    const itemValue = [1, 2, 3, 4, 5]

    const sendData = () => {
        console.log(postTitle, postBody, position);
    }

    return (
        <View style={AddNewPostStyle.container}>
            <TextInput style={AddNewPostStyle.input} placeholder="Title" onChangeText={(text) => setPostTitle(text)} />
            <TextInput style={AddNewPostStyle.input} placeholder="Body" onChangeText={(text) => setPostBody(text)} />
            <Text style={AddNewPostStyle.text}>Choose possition to insert .</Text>
            <Picker
                setPosition={setPosition}
                style={AddNewPostStyle.input}
                onValueChange={(itemValue, itemIndex) => setPosition(itemValue)}
            >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
            </Picker>

            <TouchableOpacity style={AddNewPostStyle.button} onPress={sendData}>
                <Text>Submit</Text>
            </TouchableOpacity>

        </View>
    )
}
export default AddNewPost;
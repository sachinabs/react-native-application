import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Picker } from "react-native";
import DeletePostStyle from "./delete-post-styles/delete-post-style";
const DeletePost = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [position, setPosition] = useState('');


    const sendData = () => {
        console.log(postTitle, postBody, position);
    }

    return (
        <View style={DeletePostStyle.container}>

            <Text style={DeletePostStyle.text}>Choose possition to delete .</Text>
            <Picker
                setPosition={setPosition}
                style={DeletePostStyle.input}
                onValueChange={(itemValue, itemIndex) => setPosition(itemValue)}
            >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
            </Picker>

            <TouchableOpacity style={DeletePostStyle.button} onPress={sendData}>
                <Text>Submit</Text>
            </TouchableOpacity>

        </View>
    )
}
export default DeletePost;
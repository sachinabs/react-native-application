import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


import NavigationStyles from "./navigation-styles/navigaion.style"



const Navigation = ({ navigation }) => {

    return (

        <View style={NavigationStyles.navigation}>

            <View style={NavigationStyles.navigationItem}>
                <TouchableOpacity style={NavigationStyles.navigationItemText} onPress={() => { navigation.navigate('View All Post') }}>
                    <Text> View all posts </Text>

                </TouchableOpacity>

            </View>
            <View style={NavigationStyles.navigationItem}>
                <TouchableOpacity style={NavigationStyles.navigationItemText} onPress={() => { navigation.navigate('Delete') }}>
                    <Text> Delete </Text>

                </TouchableOpacity>

            </View>

            <View style={NavigationStyles.navigationItem}>
                <TouchableOpacity style={NavigationStyles.navigationItemText} onPress={() => { navigation.navigate('Add New Post') }}>
                    <Text> Add New Post</Text>
                </TouchableOpacity>

            </View>


        </View >

    )
}

export default Navigation;
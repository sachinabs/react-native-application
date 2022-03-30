import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewAllPost from './src/components/view-all-post/view-all-post';
import AddNewPost from './src/components/add-new-post/add-new-post';
import Body from './src/components/body/body';
import DeletePost from './src/components/delete/delete-post';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Body} />
        <Stack.Screen name="View All Post" component={ViewAllPost} />
        <Stack.Screen name="Add New Post" component={AddNewPost} />
        <Stack.Screen name="Delete" component={DeletePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

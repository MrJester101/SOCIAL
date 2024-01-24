import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';

import AddPosts from '../screens/AddPost';
import Notification from '../screens/Notification';



const tab=createBottomTabNavigator();

const Tabs=()=> {
    return(

        <tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style:[
                height=50,
                padding=5

            ]
        }}>
            <tab.Screen name="Home" component={Home} />
            <tab.Screen name="Add" component={AddPosts} />
            <tab.Screen name="Notification" component={Notification} />
        </tab.Navigator>
    );

}

export default Tabs;
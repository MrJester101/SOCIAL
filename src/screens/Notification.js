import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';


export default class Notification extends React.Component{
    state={
        popularSelected:true
    }
    onTabPressed=()=>{
        this.setState({popularSelected:!this.state.popularSelected})
    }
    render(){
        return(
            <View>
                <Text>
                    Notifications will appear here
                </Text>
            </View>
           



       
        )
    }
}
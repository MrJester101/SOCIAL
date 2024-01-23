import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../screens/Posts'
import { LinearGradient } from 'expo-linear-gradient';

export default class AddPosts extends React.Component{





render(){
    const style=StyleSheet.create({
        options:{
            paddingVertical:6,
            height:40,
            borderRadius:15,
            borderColor:"#044244",
            margin:5,
        
           flex:1,
           borderBottomWidth:8,
           borderEndWidth:5,
           borderStartWidth:5,
        //    borderTopWidth:1
        },

        divider:{
            width:"100%",
            height:5,
            margin:5,
            backgroundColor:"#EAEAEA"
        },

        addOptions:{
            color:"#000000",
            fontSize:14,
            fontFamily:"Regular",
            borderWidth:2,
            borderColor:'#044244',
            borderRadius:10,
            paddingHorizontal:15,
            margin:5,
            height:40,
            
          }



    })

    return(
       


        <View style={{
            backgroundColor:"#fff",
            flex:1

        }}>
            <View style={{
            backgroundColor:"#ffff",
            flexDirection:'row',
            padding:20,
            paddingBottom:10,
            paddingTop:40


        }}>
          <TouchableOpacity
                            onPress={()=>this.props.navigation.goBack()}
                            style={{
                              marginRight:10,
                              alignSelf:"flex-start",
                            //   justifyContent:"center"
                            }}
                        >

                            <Icon
                                name="chevron-left"
                                size={30}
                                color="#044244"
                            />
                        </TouchableOpacity>
            
            <Text style={{
            fontSize:22,
            justifyContent:"center",
            color:"#151615",
            fontFamily:"Bold"
        }}>
            Add your poll
        </Text>




        </View>
        

        <View style={{

                    
                    width:'100%',
                   
                    backgroundColor:"#fff",
                       alignItems:"center",
                       justifyContent:"flex-start",
                       flexDirection:"row"
                    }}>

                        <View
                        style={{                       
                            alignItems:"flex-start",
                        justifyContent:"flex-start",

                        }}>
                        <Image source={require('../images/p2.jpg')}
                          style={{alignSelf:"flex-start",width:60,height:60,   borderRadius:30,
                          borderWidth:5,
                          marginLeft:30,
                          margin:15,
                          marginTop:5,
                          borderColor:"#044244"}}/>

                          <TouchableOpacity
                          style={{
                            backgroundColor:"#fff"



                          }}>
                            <Text>
                            Change your mode
                          </Text>
                        

                          </TouchableOpacity>


                    </View>

                    
                    <TextInput
                            style={{
                                height:120,
                                flex:1,
                              paddingHorizontal:15,
                                marginHorizontal:10,
                                // borderColor:"#EAEAEA",
                                borderWidth:2,
                                borderColor:"#044244",

                                color:'#151615',
                                fontSize:18,
                            //     justifyContent:"flex-start",
                            // alignSelf:'flex-start'
                            }}
                            multiline={true}
                            numberOfLines={4}>
                               Write your question here
                            </TextInput>
                    

        </View>

        <View
        style={style.divider}>

        </View>

        <View>
            <Text
            style={{
                fontFamily:"Regular",
                fontSize:12,
                color:"#000000",
                alignSelf:'center',
                justifyContent:'center'
            }}>
                Optional
            </Text>
             <View
        style={{
            flexDirection:"row",
            width:"100%",
            justifyContent:"center"
        }}>
            <TouchableOpacity
            style={{
                borderWidth:2,
                borderColor:'#044244',
                width:120,
                alignItems:"center",
                margin:5,
                padding:5,
                borderRadius:5
            }}>
              <Text
              style={{
                color:"#044244",
                fontSize:12,
                fontFamily:"Regular",

              }}  multiline={true}
              >
                 Add Description
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={{
                borderWidth:2,
                borderColor:'#044244',
                width:120,
                alignItems:"center",
                margin:5,
                padding:5,
                borderRadius:5
            }}>
              <Text
              style={{
                color:"#044244",
                fontSize:12,
                fontFamily:"Regular",

              }}>
                Attach Media
              </Text>
            </TouchableOpacity>
        </View>


        </View>

        <View
        style={style.divider}>

        </View>

       


        <View>
          <TextInput
          style={
            style.addOptions
            
          }>
            Option 1
          </TextInput>

          <TextInput
          style={
            style.addOptions
            
          }>
            Option 2
          </TextInput>

          
        </View>








        </View>

        
        
     



   
    )
}





}
import React from 'react';
import {View,Text,Image,ImagBackground, ImageBackground} from 'react-native';
import Icon from "@expo/vector-icons/Entypo"
import {TouchableOpacity} from 'react-native-gesture-handler';


export default class Posts extends React.Component{
    state={
        liked:false
    }
    onLike=()=>{
        this.setState({liked:!this.state.liked})
    }
    render(){

        const {name,question,profile,photo,time,onPress} = this.props

        return(
            <View>


             <View style={{
                   flexDirection:"row",
                   width:"100%",
                   paddingTop:20
               }}>

              <View style={{
                        // width:"90%",
                        flex:1,
                        alignItems:"flex-start"
                    }}>
                         <Text style={{
                           fontFamily:"Bold",
                           fontSize:20,
                           color:"#044244"
                            }}>{question}</Text>
                    </View>



                    <View style={{
                        width:"10%",
                        marginTop:7,
                        alignItems:"flex-end"
                    }}>
                        <Icon
                            name="dots-three-vertical"
                            color="#044244"
                            size={15}
                        />
                    </View>
                
               
            
            
            
            
            </View>



               <View style={{
                   flexDirection:"row",
                   paddingTop:5,
                   alignItems:"top"         
                }}>
                    <View style={{width:"15%"}}>
                            <Image
                                source={profile}
                                style={{
                                    width:45,
                                    height:45,
                                    
                                    borderRadius:22.5
                                }}
                                />
                    </View>
                    <View style={{
                        // width:"75%"
                    }}>
                       


                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:14,
                            color:"#044244"
                        }}>{name}</Text>

                       

                        <Text style={{
                            fontFamily:"Medium",
                            fontSize:12,
                            color:"#9ca1a2"
                        }}>
                            {time}
                        </Text>

            
                    </View>


                    <TouchableOpacity
                                onPress={this.onLike}
                                style={{
                                    marginBottom:20,
                                    borderRadius:5,
                                    padding:5,
                                    marginLeft:10,
                                    backgroundColor:"#e8e8e8",
                                  
                                
                                }}
                            >
                             

                              <Text style={{
                            fontFamily:"Bold",
                            fontSize:12,
                            paddingHorizontal:1,
                            alignSelf:"center",
                            color:"#044244"
                               }}>
                            Follow
                        </Text>
                            </TouchableOpacity>



               </View>


               <View style={{
                   flexDirection:"row",
                   width:"100%",
                   paddingTop:20
               }}>
                    <ImageBackground 
                    source={photo}
                    style={{
                        width:"100%",
                        height:220,
                    }}
                    imageStyle={{
                        borderRadius:30
                    }}
                    >
                    
                    </ImageBackground>
               </View>


               <View style={{
                            flex:1,
                            flexDirection:"row",
                            alignItems:"flex-start",
                            marginTop:10,
                            justifyContent:"flex-start"
                        }}>


                          


                            <TouchableOpacity
                                onPress={this.onLike}
                                style={{
                                    borderRadius:5,
                                    padding:5,
                                    // backgroundColor:"#e8e8e8",
                                  
                                
                                }}
                            >
                                <Icon name= {this.state.liked === true ? "heart":"heart-outlined"} 
                                color= {this.state.liked===true? "red":"#044244"}
                                size={24}/>


                      
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={onPress}
                                style={{
                                
                                    borderRadius:5,
                                    flexDirection:"column",
                                    padding:5,
                                    // backgroundColor:"#e8e8e8",
                                  
                           
                                }}
                            >
                                <Icon name="share"
                                color="#044244"
                                size={24}/>

                                

                            

                                
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={onPress}
                                style={{
                                   
                                    borderRadius:5,
                                    flexDirection:"column",
                                    padding:5,
                                    // backgroundColor:"#e8e8e8",
                                  
                           
                                }}
                            >
                                <Icon name="forward"
                                color="#044244"
                                size={24}/>

                                

                            

                                
                            </TouchableOpacity>


                        </View>



                        <Text style={{
                            fontFamily:"Medium",
                            fontSize:14,
                            marginLeft:5,
                            alignSelf:"flex-start",
                            color:"#000"
                               }}>
                            12,367 Likes
                        </Text>


               


               


            </View>
        )
    }
}
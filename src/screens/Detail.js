import React from 'react';
import {Text,View,ImageBackground,ScrollView,Image,TouchableOpacity} from 'react-native';
import Icon from "@expo/vector-icons/Entypo"
import Posts from '../screens/Posts'

export default class Detail extends React.Component{
    state={
        collectionSelected:true
    }
    onTabPressed=()=>{
        this.setState({ collectionSelected:!this.state.collectionSelected})
    }

    render(){
        return(
            <View style={{
                backgroundColor:"#EAEAEA",
                height:"100%",
            }}>
              


                <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
               flex:1,
            //   paddingHorizontal:15,
               backgroundColor:"#EAEAEA",
               borderTopLeftRadius:50,
               borderTopRightRadius:50
               
            }}
          >

                   <View style={{
                    paddingHorizontal:40,
                    backgroundColor:"#FFF",
                    
                   
                }}>
                    <View style={{
                        flexDirection:"row",
                        width:"100%",
                        marginTop:40
                    }}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.goBack()}
                            style={{
                                width:"50%",
                            }}
                        >

                            <Icon
                                name="chevron-left"
                                size={24}
                                color="#044244"
                            />
                        </TouchableOpacity>



                        <TouchableOpacity
                          onPress={()=>this.props.navigation.goBack()}
                         style={{
                            width:"50%",
                            alignItems:"flex-end"
                        }}>
                            <Icon
                                name="dots-three-vertical"
                                size={24}
                                color="#044244"
                            />
                        </TouchableOpacity>
                    </View>



                    <Image
                        source={require('../images/p2.jpg')}
                        style={{
                            height:100,
                            width:100,
                            borderRadius:50,
                            borderWidth:5,
                            borderColor:"#044244",
                            alignSelf:"center",
                            marginVertical:5
                        }}
                    />
                    <Text style={{
                        fontSize:22,
                        fontFamily:"Bold",
                        color:"#044244",
                        alignSelf:"center"
                    }}>
                        Mr.Jester
                    </Text>
                    <Text style={{
                        fontFamily:"Medium",
                        fontSize:16,
                        color:"#9ca1a2",
                        alignSelf:"center"
                    }}>
                        The best things come from living outside of your comfort zone
                    </Text>

                    
                    <View style={{
                        flexDirection:"row",
                        alignSelf:"center",
                        marginTop:20
                    }}>
                        <View>
                                <Text style={{
                                    fontFamily:"Bold",
                                    fontSize:15,
                                    color:"#044244",
                                    alignSelf:"center"
                                }}>280</Text>
                                <Text style={{
                                    fontFamily:"Medium",
                                    fontSize:16,
                                    color:"#9ca1a2",
                                    alignSelf:"center"
                                }}>
                                    posts
                                </Text>
                        </View>

                        <View style={{marginHorizontal:40}}>
                                <Text style={{
                                    fontFamily:"Bold",
                                    fontSize:15,
                                    color:"#044244",
                                    alignSelf:"center"
                                }}>2,107</Text>
                                <Text style={{
                                    fontFamily:"Medium",
                                    fontSize:16,
                                    color:"#9ca1a2",
                                    alignSelf:"center"
                                }}>
                                    followers
                                </Text>
                        </View>


                        <View>
                                <Text style={{
                                    fontFamily:"Bold",
                                    fontSize:15,
                                    color:"#044244",
                                    alignSelf:"center"
                                }}>104</Text>
                                <Text style={{
                                    fontFamily:"Medium",
                                    fontSize:16,
                                    color:"#9ca1a2",
                                    alignSelf:"center"
                                }}>
                                    follows
                                </Text>
                        </View>


                    </View>


                    <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                           width:"100%",
                           backgroundColor:"#222",
                           backgroundColor:"#044244",
                           borderRadius:20,
                           borderBottomRightRadius:20,
                    
                           margin:15,
                           alignSelf:"center"
                        }}
                    >


                        <Text style={{
                            fontFamily:"Bold",
                            
                            alignSelf:"center",
                            color:"#fff",
                            fontSize:20,
                            padding:10,
                            justifyContent:'center'
                        }}>FOLLOW</Text>
                    </TouchableOpacity>



                </View>



                <Posts
                        onPress={()=>this.props.navigation.navigate('AddPost')}
                        name="TheUncomplicated"
                        time="08 mins ago"
                        question="What's your view on the following Ram Mandir inauguration ?"
                        profile={require('../images/p1.jpg')}
                        photo={require('../images/RamMandir.png')}
                        option1="Oportunity to capitalize"
                        option2="Waste of Money"
                        option3="Political Agenda"
                        option4="Cultural Restoration"
                      />



                   
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="@LoneWol080"
                        time="45 min ago"
                        question="Politics and religion should not be mixed together? What is your saying?"
                        profile={require('../images/p1.jpg')}
                        option1="Yes"
                        option2="No"
                        option3="LMKIC"
                     
                       
                      />

                    

        
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Mr.Jester"
                        time="24 mins ago"
                        question="Are you afraid of posting pictures due to growth of deepfake technology?"
                        profile={require('../images/p1.jpg')}
                        photo={require('../images/deepfake.png')}
                        option1="Yes"
                        option2="Not Exactly"
                        option3="Litle Much"
                      />

                

                

                      <Posts
                        onPress={()=>this.props.navigation.navigate('Splash')}
                        name="CricketGeek"
                        time="1 h ago"
                        question="Do you think virat kohli will surpass the legacy of Sachin Tendulkar in next 5 years ?"
                        profile={require('../images/p2.jpg')}
                        photo={require('../images/vkst.png')}
                      />

               

                 
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        question="Change in criminal laws that increases jail terms in hit-and-run cases to up to 10 years,Do you support these changes ?"
                        time="3 h ago"
                        name="User241"
                        profile={require('../images/p1.jpg')}
                        photo={require('../images/vkst.png')}
                      />
             

              


                  </ScrollView>



                




                
            </View>
        )
    }
}
import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../screens/Posts'
import { LinearGradient } from 'expo-linear-gradient';
<<<<<<< HEAD
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
=======
>>>>>>> 694026e72310bd4ab537d71636c5cf6430ea1608

export default class Home extends React.Component{
    state={
        popularSelected:true
    }
    onTabPressed=()=>{
        this.setState({popularSelected:!this.state.popularSelected})
    }
    render(){
        return(
            <LinearGradient
            colors={['#4B39EF', '#FF5963', '#EE8B60']}
            // colors={['#00000', '#00000', '#00000']}
            start={[0, 0]}
            end={[1, 0]}
            style={{
              flex: 1,
              width: '100%',
            //   paddingHorizontal: 10,
            }}
          >




            <View style={{
                flex:1,
                width:"100%",
            }}>


                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingTop:40,
                    alignItems:"center",
                     paddingHorizontal:10
                }}>
                    <View style={{
                       width:"20%",
                    height:50,
                       alignItems:"flex-end",
                    }}>
                        <Image source={require('../images/p2.jpg')}
                          style={{alignSelf:"flex-start",marginLeft:7,width:50,height:50,   borderRadius:25,
                          borderWidth:3,
                          borderColor:"#044244",}}/>
                    </View>

                    <View style={{
                       width:"60%",
                    height:50,
                       alignItems:"flex-end",
                    }}>
                       
                           </View>



                    <View style={{
                        width:"20%",
                        alignItems:"flex-end",
                    }}>
                        <Icon name = "dots-three-vertical"
                          size={22}
                          color="#d2d2d2"
                          style={{
                              marginRight:-7,
                              marginTop:7
                          }}/>
                    </View>





                </View>


              <Text style={{
                  fontFamily:"Bold",
                  fontSize:25,
                  alignSelf:"center",
                  color:"#FFF",
                  paddingTop:7,
                  paddingBottom:7
              }}>DICHOTOMY</Text>


         


            <View style={{
                  backgroundColor:"#eaeaea",
                  borderTopLeftRadius:40,
                  borderTopRightRadius:40,
                  flex:1,
                //   borderWidth:15,
                //   borderColor:"#fff",
                //   paddingHorizontal:15
              }}>


            <View style={{
                      flexDirection:"row",
                      paddingTop:20,
                      backgroundColor:"#fff",
                      borderTopLeftRadius:20,
                      paddingHorizontal:15,
                      borderTopRightRadius:20
                  }}>
                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#044244":"#FFF",
                            borderBottomWidth:4,
                            paddingVertical:6
                        }}
                      >
                        

                       <Image  source={require('../images/trending.png')}
                       style={{
                        height:30,
                        width:30,

                       }}>

                       </Image>
                       <Text style={{
                        color:"#00000",
                        fontSize:10,

                       }}>
                        Trending
                       </Text>

                      </TouchableOpacity>


                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#FFF":"#044244",
                            borderBottomWidth:4,
                            paddingVertical:6,
                            marginLeft:30
                        }}
                      >
                         <Image  source={require('../images/film.png')}
                       style={{
                        height:30,
                        width:30,

                       }}>

                       </Image>
                       <Text style={{
                        color:"#00000",
                        fontSize:10,

                       }}>
                        Cinema
                       </Text>
                          
                      </TouchableOpacity>
                  </View>



            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
               flex:1,
              
            
               
            }}
          >

                       <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="TheUncomplicated"
                        time="08 mins ago"
                        question="What's your view on the following Ram Mandir inauguration ?"
                        profile={require('../images/p1.jpg')}
                        photo={require('../images/RamMandir.png')}
                        option1="Oportunity to capitalize"
                        option2="Waste of Money"
                        option3="Political Agenda"
                        option4="Cultural Restoration"
                        // props=postData
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

         


            </View>

            </LinearGradient>



       
        )
    }
}
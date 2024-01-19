import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../screens/Posts'


export default class Home extends React.Component{
    state={
        popularSelected:true
    }
    onTabPressed=()=>{
        this.setState({popularSelected:!this.state.popularSelected})
    }
    render(){
        return(
            <View style={{
                flex:1,
                width:"100%",
                backgroundColor:"#044244",
                paddingHorizontal:10
            }}>
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingTop:40,
                    alignItems:"center"
                }}>
                    <View style={{
                       width:"50%",height:50,
                       alignItems:"flex-end",
                    }}>
                        <Image source={require('../images/p2.jpg')}
                          style={{alignSelf:"flex-start",marginLeft:7,width:50,height:50,borderRadius:25}}/>
                    </View>


                    <View style={{
                        width:"50%",
                        alignItems:"flex-end",
                    }}>
                        <Icon name = "dots-two-vertical"
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
                  backgroundColor:"#FFF",
                  borderTopLeftRadius:40,
                  borderTopRightRadius:40,
                //   height:"100%",
                  flex:1,
                  paddingHorizontal:15
              }}>


            <View style={{
                      flexDirection:"row",
                      paddingTop:20
                  }}>
                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#044244":"#FFF",
                            borderBottomWidth:4,
                            paddingVertical:6
                        }}
                      >
                          <Text style={{
                              fontFamily:"Bold",
                              color:this.state.popularSelected ? "#044244":"#9ca1a2"
                          }}>FOR YOU</Text>
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
                          <Text style={{
                              fontFamily:"Bold",
                              color:this.state.popularSelected ? "#9ca1a2":"#044244"
                          }}>TRENDING</Text>
                      </TouchableOpacity>
                  </View>



            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
               flex:1,
               
            }}
          >
             

                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Mr.Jester"
                        time="24 mins ago"
                        question="Are you afraid of posting pictures due to growth of deepfake technology?"
                        profile={require('../images/p1.jpg')}
                        photo={require('../images/deepfake.png')}
                      />

                      <View style={{
                          height:160,
                          backgroundColor:"#3c636c",
                          width:20,
                          marginLeft:20,
                          marginTop:120,
                          borderTopLeftRadius:20,
                          borderBottomLeftRadius:20
                      }}>

                      </View>

                  </View>

                  <View style={{
                      flexDirection:"row"
                  }}>
                     
                      <View style={{
                          height:160,
                          backgroundColor:"#3c636c",
                          width:20,
                          marginLeft:-40,
                          marginRight:20,
                          marginTop:120,
                          borderTopRightRadius:20,
                          borderBottomRightRadius:20
                      }}>

                      </View>

                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="CricketGeek"
                        time="1 h ago"
                        question="Do you think virat kohli will surpass the legacy of Sachin Tendulkar in next 5 years ?"
                        profile={require('../images/p2.jpg')}
                        photo={require('../images/vkst.png')}
                      />

                  </View>

                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        question="Change in criminal laws that increases jail terms in hit-and-run cases to up to 10 years,Do you support these changes ?"
                        time="3 h ago"
                        name="User241"
                        profile={require('../images/p1.jpg')}
                        photo={require('../images/vkst.png')}
                      />

                      <View style={{
                          height:160,
                          backgroundColor:"#3c636c",
                          width:20,
                          marginLeft:20,
                          marginTop:120,
                          borderTopLeftRadius:20,
                          borderBottomLeftRadius:20
                      }}>

                      </View>

                  </View>


                  </ScrollView>


              </View>

         


            </View>

            



       
        )
    }
}
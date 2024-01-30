import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../screens/Posts';
 import { LinearGradient } from 'expo-linear-gradient';
import { signUp } from '../../services/user-service';





export default class SocialLogin extends React.Component{
    state={
        popularSelected:true
    }
    onTabPressed=()=>{
        this.setState({popularSelected:!this.state.popularSelected})
    }
    render(){
      const angle = 305;

  // Calculate start and end points based on the angle
  const calculatePoints = (angle) => {
    const start = {
      x: Math.sin((angle * Math.PI) / 180),
      y: -Math.cos((angle * Math.PI) / 180),
    };
    const end = {
      x: Math.sin(((angle + 180) * Math.PI) / 180),
      y: -Math.cos(((angle + 180) * Math.PI) / 180),
    };
    return { start, end };
  };

  // Specify transition points for each color
  const locations = [0, 0.5, 1];

  // Calculate start and end points based on the angle
  const { start, end } = calculatePoints(angle);
        return(

          
          <View
          style={{
            flexDirection:"column",
            flex:1
          
          }}> 
           <LinearGradient
         colors={['#4B39EF', '#FF5963', '#EE8B60']}
         start={{ x: 0, y: 0 }}
         end={{ x: 1, y: 0 }}
         angle={305}
         locations={[0, 0.5, 1]}
         style={{ width:"100%" }}
        >

           {/* Overlay Gradient */}
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', '#FFFFFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          
          style={{ alignSelf:"flex-end", position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
        />




          <View style={{
              
              width:"100%",
              justifyContent:"center",
              marginTop:80
          }}>
            
            <Image  source={require('../images/finalLogo.png')}
                     style={{
                      height:200,
                      borderRadius:15,
                      alignSelf:'center',
                      width:200,

                     }}>

                     </Image>


          


            <Text style={{
                fontFamily:"Bold",
                fontSize:25,
                alignSelf:"center",
                color:"#FFF",
                paddingTop:7,
                marginTop:10,
                paddingBottom:7
            }}>DICHOTOMY</Text>

              <Text style={{
                fontFamily:"Regular",
                fontSize:14,
                alignSelf:"center",
                color:"#57636C",
                marginTop:4,
                paddingBottom:7
            }}>"Dichotomy Decoded: Where Yin Meets Yang"</Text>


       


      

       


          </View>

          </LinearGradient>

          <View
          style={{
            height:15,
            width:"100%",
            margin:5,
            color:"#000000"
          }}>

          </View>

          <Text style={{
                fontFamily:"Bold",
                fontSize:25,
                alignSelf:"center",
                color:"#14181B",
                paddingTop:7,
                marginTop:10,
                paddingBottom:7
            }}>🌟 Your Dichotomy Hub:</Text>


<            Text style={{
                fontFamily:"Regular",
                fontSize:12,
                alignSelf:"center",
                color:"#14181B",
                marginHorizontal:10,
                paddingTop:7,
                justifyContent:'center',
                marginTop:10,
                paddingBottom:7
            }}>Ready to unravel the mysteries of duality? Let's embark on this exhilarating journey together. Tap 'Get Started' and immerse yourself in the extraordinary world of Dichotomy</Text>

             <TouchableOpacity 
             style={{
              borderWidth:1,
              borderColor:"#00000",
              width:200,
             alignSelf:"center",
              justifyContent:'center'

             }}
             onPress={signUp}
             >
              <Text
              style={{
                padding:5,
                color:"#00000",
                justifyContent:"center",
                fontFamily:"Bold"
              }}>
                Continue with Google
              </Text>
            
            </TouchableOpacity>
          </View>

          
           

            



       
        )
    }
}
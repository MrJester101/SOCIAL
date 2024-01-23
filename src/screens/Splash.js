import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import Posts from './Posts'
import { LinearGradient } from 'expo-linear-gradient';

export default class Splash extends React.Component{
    state={
        popularSelected:true
    }
    onTabPressed=()=>{
        this.setState({popularSelected:!this.state.popularSelected})
    }
    render(){
        return(
            <Swiper
            buttonWrapperStyle={{
              backgroundColor: "transparent",
              flexDirection: "row",
              position: "absolute",
              bottom: 0,
              left: 0,
              flex: 1,
              paddingHorizontal: 30,
              paddingVertical: 20,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
            style={styles.wrapper}
            showsButtons={true}
            paginationStyle={{
              marginRight: w * 0.7,
              marginBottom: h * 0.02,
            }}
            activeDotColor="#4B39EF"
            dotColor="#998FA2"
            nextButton={
              <View
                style={{
                  height: 60,
                  borderRadius: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  backgroundColor: "#4B39EF",
                }}
              >
                <AntDesign name="arrowright" size={22} color="#FFF" />
              </View>
            }
            prevButton={
              <View
                style={{
                  height: 60,
                  borderRadius: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  backgroundColor: "#4B39EF",
                  marginHorizontal: 20,
                }}
              >
                <AntDesign name="arrowleft" size={22} color="#FFF" />
              </View>
            }
          >
            <View style={styles.slide}>
              <Image source={require("./images/l.png")} style={styles.logo} />
              <Text style={styles.Dichotomy}>DICHOTOMY</Text>
              <Text style={styles.slogan}>"Dichotomy Decoded: Where Yin Meets Yang"</Text>
              <Image source={require("./images/img.png")} style={styles.img} />
              <Text style={styles.title}>🌐 Explore Diversity</Text>
              <Text style={styles.text}>
              Dive into a world where opposites attract and differences coalesce. Dichotomy is your passport to a realm where the yin meets yang, creating a vibrant tapestry of perspectives.
              </Text>
    
    
            </View>
    
    
            <View style={styles.slide}>
            <Image source={require("./images/l.png")} style={styles.logo} />
            <Text style={styles.Dichotomy}>DICHOTOMY</Text>
              <Text style={styles.slogan}>"Dichotomy Decoded: Where Yin Meets Yang"</Text>
              <Image source={require("./images/img2.png")} style={styles.img} />
              <Text style={styles.title}>🚀 Embrace the Unfamiliar:</Text>
              <Text style={styles.text}>
              Break free from the ordinary and venture into the extraordinary. Discover the magic that happens when opposing forces unite, transcending boundaries and fostering a rich tapestry of experiences.
              </Text>
    
    
            </View>
    
            <View style={styles.slide}>
            <Image source={require("./images/l.png")} style={styles.logo} />
            <Text style={styles.Dichotomy}>DICHOTOMY</Text>
              <Text style={styles.slogan}>"Dichotomy Decoded: Where Yin Meets Yang"</Text>
              <Image source={require("./images/img3.png")} style={styles.img} />
              <Text style={styles.title}>🔒 Your Identity, Your Control:</Text>
              <Text style={styles.text}>
              We believe in empowering you. With Dichotmy, you have the power to decide when and how much of your identity to reveal, putting you in control of your digital presence.
              </Text>
    
    
            </View>
    
            <View style={styles.slide}>
            <Image source={require("./images/l.png")} style={styles.Largelogo} />
            <Text style={styles.Dichotomy}>DICHOTOMY</Text>
              <Text style={styles.slogan}>"Dichotomy Decoded:Where Yin Meets Yangs"</Text>
              <Text style={styles.Finaltitle}>🌟 Your Dichotomy Hub:</Text>
              <Text style={styles.text}>
              Ready to unravel the mysteries of duality? Let's embark on this exhilarating journey together. Tap 'Get Started' and immerse yourself in the extraordinary world of Dichotomy
              </Text> 
    
    
            </View>
    
    
          </Swiper>



       
        )
    }
}
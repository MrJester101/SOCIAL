import React ,{ useState }from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';

import Icon from '@expo/vector-icons/Entypo';
import Posts from '../screens/Posts'
import { LinearGradient } from 'expo-linear-gradient';
import { signUp } from '../../services/user-service';

export default class AddPosts extends React.Component{
  // const [question, setQuestion] = useState('');
  // const [opt, setOptions] = useState(0);

  // const addOption = () => {
  //   const newOptions = [...opt, `Option ${opt.length + 1}`];
  //   setOptions(newOptions);
  // };





render(){

  const sampleData = {
    email: "MrJester",
    name: "suyasht786@gmail.com",
    authority: "yes",
  };
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

        buttons:{
          alignSelf:"flex-end",
        backgroundColor:"#eaeaea",
        borderWidth:2,
        marginHorizontal:5,
        margin:2,
        borderColor:'#044244',
        borderRadius:5

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

         <TextInput
                            style={{
                                height:120,
                                width:"90%",
                              paddingHorizontal:15,
                                marginHorizontal:10,
                                // borderColor:"#EAEAEA",
                                borderWidth:2,
                                alignSelf:"center",
                                borderColor:"#044244",
                                borderRadius:10,

                                color:'#151615',
                                fontSize:18,
                            //     justifyContent:"flex-start",
                            // alignSelf:'flex-start'
                            }}
                            multiline={true}
                            numberOfLines={4}>
                               Write your question here
          </TextInput>


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
            style={style.buttons}
            >
              <Text
              style={{
                color:"#044244",
              fontFamily:"Bold",
              fontSize:12,
              padding:7

              }}  multiline={true}
              >
                 Add Description
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={style.buttons}>
              <Text
              style={{
                color:"#044244",
              fontFamily:"Bold",
              fontSize:12,

              padding:7

              }}>
                Attach Media
              </Text>
            </TouchableOpacity>
        </View>


        </View>

        <View
        style={style.divider}>

        </View>

        <View
        style={{
          marginHorizontal:20
        }}>
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

          <TouchableOpacity style={
            style.buttons
          }


          // onPress={signUp(sampleData).then((resp)=>{
          //   console.log(resp);;
          //   console.log("success");
          // }).catch((error)=>{
          //   console.log(error);
          //   console.log("Failing");
          // })}


          onPress={() => {
            signUp(sampleData)
              .then((resp) => {
                console.log(resp);
                console.log("success");
              })
              .catch((error) => {
                console.log(error);
                console.log("Failing");
              });
          }}
          
          
          
          >  



            <Text style={{
              color:"#044244",
              fontFamily:"Bold",
              fontSize:12,

              padding:7

            }}>
             + Add Option

            </Text>

          </TouchableOpacity>


        </View>








        </View>








    )
}





}
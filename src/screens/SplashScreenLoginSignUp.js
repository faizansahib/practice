import { View, Text, StyleSheet,Image, Pressable } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


const SplashScreenLoginSignUp = ({navigation}) => {
  
  return (
    <LinearGradient 
    start={{ x: 0, y: 0.1 }}
      end={{ x: 1, y: 0.5 }}
    colors={['#FFD97B', '#6F42C5',]} style={styles.container}>
   <View style={styles.container}>
         <Image source={require('../assets/IconMain.png')} style={{width:150, height:150}} />
        <View style={styles.subContainer}>
            <Pressable style={styles.login}
             onPress={() => navigation.navigate('TabNavigations') }
            >
                <Text style={styles.txtLogin}>Login</Text>
            </Pressable>
            <Pressable style={styles.btnSignUp}>
                <Text style={styles.txtSignUp}>sign up</Text>
            </Pressable>
        </View>
        <View style={styles.flagsContainer}>
          <Image source={require('../assets/image8.png')} style={styles.icon} />
          <Image source={require('../assets/image9.png')} style={styles.icon}  />
          <Image source={require('../assets/image2.png')} style={styles.icon}  />
          <Image source={require('../assets/image1.png')} style={styles.icon}  />
          <Image source={require('../assets/image3.png')} style={styles.icon}  />
          <Image source={require('../assets/image4.png')} style={styles.icon}  />
         

        </View>
   </View>
  </LinearGradient>
  )
}

const styles = StyleSheet.create({
      
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    subContainer:{
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'red',

    },
    login:{
        backgroundColor:'#FFD97B',
        width:358,
        height:67,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    txtLogin:{
      fontSize:20,
      color:'#000'
    },
    subContainer:{
        marginTop:20,
    },
    btnSignUp:{
        width:358,
        height:67,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#FFD97B',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    txtSignUp:{
       fontSize:20,
       color:'#FFD97B'
    },
    flagsContainer:{
      flexDirection:'row',
      marginTop:25,
      justifyContent:'space-between',
      width:'100%',
      paddingVertical:10,
      paddingHorizontal:15
    },
    icon:{
      width:50,
      height:50
    }
  });
  
export default SplashScreenLoginSignUp;
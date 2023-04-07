import { View, Image, StyleSheet } from 'react-native'
import React, {useEffect} from 'react'

const SplashScreen = ({navigation}) => {

   useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SplashScreenLoginSignUp')
    }, 3000);
   })

  return (
    <View style={styles.main}>
      <Image source={require('../assets/Splash.png')} style={styles.img} />
    </View>
  )
}


const styles = StyleSheet.create({

    main:{
        flex:1
    },
    img:{
        width:'100%',
        height:'100%'
    }
})

export default SplashScreen
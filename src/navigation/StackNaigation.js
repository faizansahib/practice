import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import TabNavigations from './TabNavigation';
import SplashScreenLoginSignUp from '../screens/SplashScreenLoginSignUp';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();


function HomeScreen() {
    return (
      <Stack.Navigator 
       
      >
        <Stack.Screen name="Home" component={SplashScreen}  options={{ title: '', headerShown: false }} />
        <Stack.Screen name="SplashScreenLoginSignUp" component={SplashScreenLoginSignUp}  options={{ title: '', headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{ title: '', headerShown: false }} />
        <Stack.Screen name="TabNavigations" component={TabNavigations} options={{ title: '', headerShown: false }} />
      </Stack.Navigator>
    );
  }

  export default HomeScreen;
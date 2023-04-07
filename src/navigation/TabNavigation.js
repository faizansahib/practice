
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from '../screens/SettingScreen';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();



function TabNavigations() {
  return (
    <Tab.Navigator
   
    >
      <Tab.Screen name="Settings" component={SettingScreen}  />
      <Tab.Screen name="Profile" component={Profile}  />

      {/* <Stack.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
}


export default TabNavigations;
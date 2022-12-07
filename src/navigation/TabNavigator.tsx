import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

const BottomTabNavigator = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <BottomTabNavigator.Screen
        name="Profile"
        component={ProfileStack}
        options={{headerShown: false}}
      />
    </BottomTabNavigator.Navigator>
  );
}

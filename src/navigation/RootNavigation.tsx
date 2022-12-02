import {NavigationContainer} from '@react-navigation/native';
import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../components/screens/SignIn/SignIn';
import {useTypedSelector} from '../store/store';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();
const Navigation: FC = () => {
  const {userToken} = useTypedSelector(state => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: '700',
          },
          headerShown: false,
        }}>
        {userToken ? (
          <Stack.Screen name="TabNavigation" component={TabNavigator} />
        ) : (
          <Stack.Screen name="Sign in" component={SignIn} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

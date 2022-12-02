import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {FC, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../components/screens/SignIn/SignIn';
import Home from '../components/screens/home/Home';
import {useTypedSelector} from '../store/store';
import Profile from '../components/screens/profile/Profile';
import Footer from '../components/layout/footer/Footer';
import Details from '../components/screens/details/Details';

const Stack = createNativeStackNavigator();
const Navigation: FC = () => {
  const {userToken} = useTypedSelector(state => state.user);
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(
    undefined,
  );
  const navRef = useNavigationContainerRef();
  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name);

    const listener = navRef.addListener('state', () =>
      setCurrentRoute(navRef.getCurrentRoute()?.name),
    );

    return () => {
      navRef.removeListener('state', listener);
    };
  }, []);
  return (
    <>
      <NavigationContainer ref={navRef}>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: '700',
            },
          }}>
          {!userToken ? (
            <>
              <Stack.Screen name="Sign in" component={SignIn} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="Details" component={Details} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      {userToken && currentRoute && (
        <Footer nav={navRef.navigate} currentRoute={currentRoute} />
      )}
    </>
  );
};

export default Navigation;

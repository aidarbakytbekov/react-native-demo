import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {signOut} from '../store/user/user.slice';
import {useDispatch} from 'react-redux';

function ProfileScreen() {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>PROFILE</Text>
      <Button title="Logout" onPress={() => dispatch(signOut())} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
}

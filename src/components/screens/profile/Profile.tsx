import {signOut} from '../../../store/user/user.slice';
import {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

const Profile: FC = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Profile</Text>
      <Button title="Logout" onPress={() => dispatch(signOut())} />
    </View>
  );
};

export default Profile;

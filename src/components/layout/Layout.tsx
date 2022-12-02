import {FC, PropsWithChildren} from 'react';
import {SafeAreaView, View} from 'react-native';

const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <SafeAreaView>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;

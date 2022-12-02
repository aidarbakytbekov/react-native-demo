import {FC} from 'react';
import {View} from 'react-native';
import {footerItems} from './footer.data';
import FooterItem from './FooterItem';
import {TypeNavigate} from './footer.interface';
import {styles} from './footer.style';

interface IFooter {
  nav: TypeNavigate;
  currentRoute?: string;
}

const Footer: FC<IFooter> = props => {
  return (
    <View style={styles.container}>
      {footerItems.map(item => (
        <FooterItem key={item.path} item={item} {...props} />
      ))}
    </View>
  );
};

export default Footer;

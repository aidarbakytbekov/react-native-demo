import {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {IFooterItem, TypeNavigate} from './footer.interface';

interface IFooterItemProps {
  item: IFooterItem;
  nav: TypeNavigate;
  currentRoute?: string;
}

const FooterItem: FC<IFooterItemProps> = ({item, currentRoute, nav}) => {
  const isActive = currentRoute === item.path;
  return (
    <Pressable onPress={() => nav(item.path)}>
      <Text style={{color: isActive ? 'red' : '#000'}}>{item.path}</Text>
    </Pressable>
  );
};

export default FooterItem;

import React from 'react';
import {
  Image,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ListItemStyle} from '../../styles';
import {MaterialIcons} from '@expo/vector-icons';
import {Text} from 'react-native';

interface ListItemProps {
  title: string;
  subtitle?: string;
  icon?: any;
  imageSource?: any;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  iconStyle?: ImageStyle;
}

const CustomListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  icon,
  imageSource,
  onPress,
  containerStyle,
  titleStyle,
  subtitleStyle,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      style={[ListItemStyle.container, containerStyle]}
      onPress={onPress}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color="black"
          style={[ListItemStyle.icon, iconStyle]}
        />
      )}
      {imageSource && (
        <Image source={imageSource} style={ListItemStyle.image} />
      )}
      <View style={ListItemStyle.contentContainer}>
        <Text style={[ListItemStyle.title, titleStyle]}>{title}</Text>
        {subtitle && (
          <Text style={[ListItemStyle.subtitle, subtitleStyle]}>
            {subtitle}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomListItem;

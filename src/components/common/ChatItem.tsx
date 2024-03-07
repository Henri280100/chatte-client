import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {Avatar,  ListItem,  Text, useTheme} from '@rneui/themed';
import {TextStyle, View, ViewStyle} from 'react-native';

interface ChatItemProps {
  userIcon: any;
  name: string;
  message: string;
  time: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
}

export const ChatItem: React.FC<ChatItemProps> = ({
  userIcon,
  name,
  message,
  time,
  onPress,
  containerStyle,
  titleStyle,
  subtitleStyle,
}) => {
  const {theme} = useTheme();

  return (
    <ListItem
      containerStyle={[{backgroundColor: theme.colors.white}, containerStyle]}
      onPress={onPress}>
      <Avatar
        rounded
        icon={
          <Ionicons name={userIcon} size={24} color={theme.colors.primary} />
        }
        containerStyle={{backgroundColor: theme.colors.grey1}}
      />
      <ListItem.Content>
        <ListItem.Title style={[{color: theme.colors.black}, titleStyle]}>
          {name}
        </ListItem.Title>
        <ListItem.Subtitle
          style={[{color: theme.colors.grey3}, subtitleStyle]}>
          {message}
        </ListItem.Subtitle>
      </ListItem.Content>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={{color: theme.colors.grey3}}>{time}</Text>
      </View>
      <ListItem.Chevron />
    </ListItem>
  );
};

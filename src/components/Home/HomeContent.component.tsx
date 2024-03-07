import {FlatList, Image, Text, View} from 'react-native';
import {ChatListStyle} from '../../styles';
import {ChatItem} from '../common';

interface ChatItem {
  id: string;
  message: string;
  name: string;
  avatar: any;
  time: string;
}

interface HomeContentProps {
  data: ChatItem[];
}

export const HomeContentComponent: React.FC<HomeContentProps> = ({data}) => {
  const renderChatItem = ({item}: {item: ChatItem}) => {
    return (
      <ChatItem
        userIcon={item.avatar}
        name={item.name}
        message={item.message}
        time={item.time}
      />
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderChatItem}
      keyExtractor={item => item.id}
      contentContainerStyle={ChatListStyle.container}
    />
  );
};

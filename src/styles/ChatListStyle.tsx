import { StyleSheet } from "react-native";

export const ChatListStyle = StyleSheet.create({
    container: {
        padding: 16,
      },
      chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 12,
      },
      avatarContainer: {
        marginRight: 12,
      },
      avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
      },
      messageContainer: {
        flex: 1,
      },
      name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
      },
      message: {
        fontSize: 14,
        color: '#333',
      },
      time: {
        fontSize: 12,
        color: '#888',
      },
  });
  
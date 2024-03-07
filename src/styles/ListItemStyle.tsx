import { StyleSheet } from "react-native";

export const ListItemStyle = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    contentContainer: {
      marginLeft: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
    },
    subtitle: {
      fontSize: 14,
      color: 'gray',
    },
    icon: {
      marginRight: 10,
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    chatItem: {
      padding: 12,
      marginBottom: 8,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
    },
  });
import { StyleSheet } from "react-native";

export const InputStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingVertical: 5,
      },
      icon: {
        marginRight: 10,
        color: '#333',
      },
      input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
      },
      errorText: {
        color: 'red',
        marginTop: 5,
      },
})
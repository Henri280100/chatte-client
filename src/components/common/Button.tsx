import {MaterialIcons} from '@expo/vector-icons';
import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {TextStyle, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { ButtonStyle } from '../../styles';


interface ButtonProps {
  onPress: () => void;
  title: string;
  icon?: any;
  loading?: boolean;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<ButtonProps> = ({
  onPress,
  title,
  icon,
  loading = false,
  disabled = false,
  containerStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        ButtonStyle.buttonContainer,
        disabled ? ButtonStyle.buttonDisabled : ButtonStyle.buttonEnabled,
        containerStyle,
      ]}
      onPress={onPress}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          {icon && (
            <MaterialIcons
              name={icon}
              size={24}
              color="white"
              style={{marginRight: 5}}
            />
          )}
          <Text style={[ButtonStyle.buttonText, textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useState,
  useEffect,
} from 'react';
import {TextInput, View, Text, TextInputProps} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import {InputStyle} from '../../styles';

interface AdvancedTextInputProps extends TextInputProps {
  icon?: any;
  containerStyle?: any;
  error?: string;
  validate?: (text: string) => string | undefined;
}

const CustomInput: ForwardRefRenderFunction<
  TextInput,
  AdvancedTextInputProps
> = ({icon, containerStyle, error, validate, ...rest}, ref) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [validationError, setValidationError] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    if (validate) {
      const errorText = validate(inputValue);
      setValidationError(errorText);
    }
  }, [inputValue, validate]);

  return (
    <View style={[InputStyle.container, containerStyle]}>
      {icon && <MaterialIcons name={icon} size={24} style={InputStyle.icon} />}
      <TextInput
        ref={ref}
        style={InputStyle.input}
        onChangeText={text => setInputValue(text)}
        {...rest}
      />
      {error && <Text style={InputStyle.errorText}>{error}</Text>}
      {validationError && (
        <Text style={InputStyle.errorText}>{validationError}</Text>
      )}
    </View>
  );
};
export default forwardRef(CustomInput);

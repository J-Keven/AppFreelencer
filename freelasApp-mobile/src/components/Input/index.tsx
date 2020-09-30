import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueRef {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  const inputElemntRef = useRef<any>(null);

  const {
    defaultValue = '',
    error,
    fieldName,
    registerField,
    clearError,
  } = useField(name);
  const inputValueRef = useRef<InputValueRef>({ value: defaultValue });

  const [onFocused, setOnFocused] = useState(false);
  const [onFilled, setOnFiled] = useState(false);

  const handleOnFocused = useCallback(() => {
    setOnFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setOnFocused(false);

    setOnFiled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputElemntRef.current.focus();
      },
    };
  });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container onFocus={onFocused} error={!!error}>
      <Icon name={icon} size={20} onFocus={onFocused} onFilled={onFilled} />

      <TextInput
        ref={inputElemntRef}
        keyboardAppearance="dark"
        placeholderTextColor="#99879D"
        onFocus={handleOnFocused}
        onBlur={handleOnBlur}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);

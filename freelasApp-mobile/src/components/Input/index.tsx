import React, { useRef, useState, useCallback, useEffect, useImperativeHandle, forwardRef } from 'react';
import { TextInputProps } from 'react-native'
import { useField } from '@unform/core'
import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueRef  {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({name, icon, ...rest}, ref) => {

  const inputRef = useRef<InputValueRef>({value: '' });
  const inputElemntRef = useRef<any>(null);
  const { defaultValue, error, fieldName, registerField, clearError } = useField(name)
  const [onFocused, setOnFocused] = useState(false);
  const [onFilled, setOnFiled] = useState(false);
  
  const handleOnFocused = useCallback(() => {
    setOnFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setOnFocused(false);
    
  }, []);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputElemntRef.current.focus()
      }
    }
  })

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputElemntRef.current,
      path: 'value',
    })
  }, [])
  return (
    <Container onFocus={onFocused}>
      <Icon name={icon} size={20} onFocus={onFocused}/>
      <TextInput 
        ref={inputElemntRef}
        keyboardAppearance="dark"
        placeholderTextColor="#99879D"
        onFocus={handleOnFocused}
        onBlur={handleOnBlur}
        {...rest}
      />
    </Container>
  )
}

export default forwardRef(Input);
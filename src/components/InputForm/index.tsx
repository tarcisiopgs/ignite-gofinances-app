import {Control, Controller} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import React from 'react';

import {Container, Error} from './styles';
import Input from '../Input';

interface InputFormProps extends TextInputProps {
  control: Control;
  error: string;
  name: string;
}

const InputForm: React.FC<InputFormProps> = ({
  name,
  control,
  error,
  ...rest
}) => {
  return (
    <Container>
      <Controller
        render={({field: {onChange, value}}) => (
          <Input value={value} onChangeText={onChange} {...rest} />
        )}
        control={control}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default InputForm;

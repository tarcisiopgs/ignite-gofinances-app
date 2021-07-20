import React from 'react';
import {TextInputProps} from 'react-native';
import {Control, Controller} from 'react-hook-form';

import {Container} from './styles';
import Input from '../Input';

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
}

const InputForm: React.FC<InputFormProps> = ({name, control, ...rest}) => {
  return (
    <Container>
      <Controller
        render={({field: {onChange, value}}) => (
          <Input value={value} onChangeText={onChange} {...rest} />
        )}
        control={control}
        name={name}
      />
    </Container>
  );
};

export default InputForm;

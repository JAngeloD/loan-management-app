import React from 'react';
import { Form, FormControlProps } from 'react-bootstrap'

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'number' | 'size'>, Pick<FormControlProps, "as"> {
  value: string | number;
  onChange: (val: string | number) => void;
  debounceTime?: number;
}

const DebouncedInput = ({ value: initialValue, onChange, debounceTime = 300, ...props }: Props) => {
  const [value, setValue] = React.useState(initialValue);

  // setValue if any initialValue changes
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // debounce onChange — triggered on every keypress
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounceTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, onChange, debounceTime]);

  return (<Form.Control {...props} defaultValue={value} onChange={(e) => {setValue(e.target.value)}}/>)
};

export default DebouncedInput

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { SxProps } from '@mui/system';

interface RadioFormControlLabelProps {
  value: string;
  label: string;
  sx: SxProps; 
  required?: boolean;
}

const RadioFormControlLabel: React.FC<RadioFormControlLabelProps> = ({ value, label, sx, required }) => {
  return (
    <FormControlLabel
      value={value}
      control={<Radio />}
      label={label}
      sx={sx}
      required={required}
    />
  );
};

export default RadioFormControlLabel;
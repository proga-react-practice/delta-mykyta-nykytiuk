import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

interface RadioFormControlLabelProps {
  value: string;
  label: string;
  sx: any; 
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
import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { FormData} from "../../interfaces";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  RadioGroup,
  FormLabel,
  Typography,
  Box,
} from "@mui/material";
import RadioFormControlLabel from "../RadioFormControlLabel/RadioFormControlLabel";

interface FormProps {
  onSubmit: (data: FormData) => void;
}
import { InputAdornment } from "@mui/material";

const bodyTypes = ["Sedan", "SUV", "Hatchback", "Convertible", "Coupe"];

const purposes = ["Personal", "Commercial"];

const initialFormData = {
  brand: "",
  model: "",
  year: 0,
  body_type: "",
  mileage_km: 0,
  gearbox: "",
  fuel: "",
  price_per_day: 0,
  horse_power: 0,
  engine_capacity: 0,
  purpose: "",
};

function Form({ onSubmit }: FormProps) {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);

  const [errors, setErrors] = React.useState<Partial<FormData>>({});

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  function handleSelectChange(event: SelectChangeEvent<string>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

function validateForm() {
  const newErrors: Partial<FormData> = {};
  let isValid = true;

  if (formData.mileage_km && formData.mileage_km.toString().startsWith('0')) {
    newErrors.mileage_km = "Mileage should not start with '0'";
    isValid = false;
  }

  if (formData.engine_capacity && formData.engine_capacity.toString().startsWith('0')) {
    newErrors.engine_capacity = "Engine capacity should not start with '0'";
    isValid = false;
  }

  if (formData.price_per_day && formData.price_per_day.toString().startsWith('0')) {
    newErrors.price_per_day = "Price per day should not start with '0'";
    isValid = false;
  }

  if (formData.horse_power && formData.horse_power.toString().startsWith('0')) {
    newErrors.horse_power = "Horse power should not start with '0'";
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
}

const handleReset = () => {
  setFormData(initialFormData);
};

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  }

  const BoxFormStyle = {
    backgroundColor: "secondary.main",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: { sm: "500px", xs: "300px" },
    margin: "0 auto",
    padding: "20px",
    marginRight: "auto",
    border: "none",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    color: "primary.main",
    opacity: 0, 
    animation: 'fadeIn 1.5s forwards', 
    '@keyframes fadeIn': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  };

  const TextFieldStyle = {
    width: "90%",
    padding: "8px",
    marginBottom: "10px",
  };

  const RadioStyle = {
    marginBottom: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const ButtonStyle = {
    width: "10%",
    padding: "10px",
    marginTop: "10px",
    border: "none",
    borderRadius: "5px",
    marginRight: "10%",
  };
  const BoxButton = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  };

  const RadioGroupStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={BoxFormStyle}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", color: "primary.main" }}
      >
        Car adding form
      </Typography>
      <TextField
        label="Brand"
        name="brand"
        value={formData.brand}
        onChange={handleInputChange}
        required
        sx={TextFieldStyle}
      />
      <TextField
        label="Model"
        name="model"
        value={formData.model}
        onChange={handleInputChange}
        required
        sx={TextFieldStyle}
      />
      <TextField
        label="Year"
        name="year"
        type="number"
        value={formData.year}
        onChange={handleInputChange}
        required
        InputProps={{ inputProps: { min: 2000, max: 2024 } }}
        sx={TextFieldStyle}
      />
      <FormControl required sx={TextFieldStyle}>
        <InputLabel>Body Type</InputLabel>
        <Select
          name="body_type"
          value={formData.body_type}
          onChange={handleSelectChange}
          sx={{ width: "100%" }}
        >
          <MenuItem value="">
            <em>Select...</em>
          </MenuItem>
          {bodyTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Mileage"
        name="mileage_km"
        type="number"
        value={formData.mileage_km}
        onChange={handleInputChange}
        required
        InputProps={{ inputProps: { min: 1, max: 1000 }, endAdornment: <InputAdornment position="end">1,000 km</InputAdornment> }}
        sx={TextFieldStyle}
        error={!!errors.mileage_km}
        helperText={errors.mileage_km}
/>
      <FormControl component="fieldset" required sx={TextFieldStyle}>
        <FormLabel component="legend">Gearbox</FormLabel>
        <RadioGroup
          name="gearbox"
          value={formData.gearbox}
          onChange={handleInputChange}
          sx={RadioGroupStyle}
        >
          <RadioFormControlLabel
            value="Manual"
            label="Manual"
            sx={RadioStyle}
            required
          />
          <RadioFormControlLabel
            value="Automatic"
            label="Automatic"
            sx={RadioStyle}
            required
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" required sx={TextFieldStyle}>
        <FormLabel component="legend">Fuel</FormLabel>
        <RadioGroup
          name="fuel"
          value={formData.fuel}
          onChange={handleInputChange}
          sx={RadioGroupStyle}
        >
          <RadioFormControlLabel
            value="Petrol"
            label="Petrol"
            sx={RadioStyle}
            required
          />
          <RadioFormControlLabel
            value="Diesel"
            label="Diesel"
            sx={RadioStyle}
            required
          />
          <RadioFormControlLabel
            value="Electric"
            label="Electric"
            sx={RadioStyle}
            required
          />
        </RadioGroup>
      </FormControl>
      <TextField
        label="Price Per Day"
        name="price_per_day"
        type="number"
        value={formData.price_per_day}
        onChange={handleInputChange}
        required
        InputProps={{ inputProps: { min: 1 }, endAdornment: <InputAdornment position="end">$</InputAdornment> }}
        sx={TextFieldStyle}
        error={!!errors.price_per_day}
        helperText={errors.price_per_day}
      />
      <TextField
        label="Horse Power"
        name="horse_power"
        type="number"
        value={formData.horse_power}
        onChange={handleInputChange}
        required
        InputProps={{ inputProps: { min: 1 }, endAdornment: <InputAdornment position="end">kW</InputAdornment> }}
        sx={TextFieldStyle}
        error={!!errors.horse_power}
  helperText={errors.horse_power}
      />
      <TextField
        label="Engine Capacity"
        name="engine_capacity"
        type="number"
        value={formData.engine_capacity}
        onChange={handleInputChange}
        required
        InputProps={{ inputProps: { min: 0, max: 10 }, endAdornment: <InputAdornment position="end">cm3</InputAdornment> }}
        sx={TextFieldStyle}
        error={!!errors.engine_capacity}
        helperText={errors.engine_capacity}
      />
      <FormControl required sx={TextFieldStyle}>
        <InputLabel>Purpose</InputLabel>
        <Select
          name="purpose"
          value={formData.purpose}
          onChange={handleSelectChange}
          sx={{ width: "100%" }}
        >
          <MenuItem value="">
            <em>Select...</em>
          </MenuItem>
          {purposes.map((purpose) => (
            <MenuItem key={purpose} value={purpose}>
              {purpose}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={BoxButton}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            "&:hover": {
              backgroundColor: "primary.dark",
            },
            ButtonStyle,
          }}
        >
          Submit
        </Button>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleReset}
          sx={{
            "&:hover": {
              backgroundColor: "primary.dark",
            },
            ButtonStyle,
          }}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
}

export default Form;

import React from "react";
import styles from "./Form.module.css";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

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

interface FormData {
  brand: string;
  model: string;
  year: number | null;
  body_type: string;
  mileage_km: number;
  gearbox: string;
  fuel: string;
  price_per_day: number;
  horse_power: number;
  engine_capacity: number;
  purpose: string;
}

function Form({ onSubmit }: FormProps) {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);

  const [errors, setErrors] = React.useState<Partial<FormData>>({});

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  function validateForm() {
    const newErrors: Partial<FormData> = {};

    if (!formData.brand.trim()) {
      newErrors.brand = "Brand is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Car adding form</h2>
      <label className={styles.label}>
        Brand:
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
          className={styles.selectInput}
          required
        />
      </label>
      <label className={styles.label}>
        Model:
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleInputChange}
          className={styles.selectInput}
          required
        />
      </label>

      <label className={styles.label}>
        Year:
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          min="2000"
          max="2024"
          className={styles.selectInput}
          required
        />
      </label>

      <label className={styles.label}>
        Body Type:
        <select
          name="body_type"
          value={formData.body_type}
          onChange={handleInputChange}
          className={styles.selectInput}
          required
        >
          <option value="">Select...</option>
          {bodyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.label}>
        Mileage (1,000 km):
        <input
          type="number"
          name="mileage_km"
          value={formData.mileage_km}
          onChange={handleInputChange}
          className={styles.selectInput}
          required
          min="0"
          max="1000"
        />
      </label>

      <label className={styles.label}>
        Gearbox:
        <label className={styles.label}>
          <input
            type="radio"
            name="gearbox"
            value="Manual"
            className={styles.radioInput}
            checked={formData.gearbox === "Manual"}
            onChange={handleInputChange}
            required
          />
          Manual
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            name="gearbox"
            className={styles.radioInput}
            value="Automatic"
            checked={formData.gearbox === "Automatic"}
            onChange={handleInputChange}
            required
          />
          Automatic
        </label>
      </label>

      <label className={styles.label}>
        Fuel:
        <label className={styles.label}>
          <input
            type="radio"
            name="fuel"
            className={styles.radioInput}
            value="Petrol"
            checked={formData.fuel === "Petrol"}
            onChange={handleInputChange}
            required
          />
          Petrol
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            name="fuel"
            className={styles.radioInput}
            value="Diesel"
            checked={formData.fuel === "Diesel"}
            onChange={handleInputChange}
            required
          />
          Diesel
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            name="fuel"
            className={styles.radioInput}
            value="Electric"
            checked={formData.fuel === "Electric"}
            onChange={handleInputChange}
            required
          />
          Electric
        </label>
      </label>
      <label className={styles.label}>
        Price Per Day:
        <input
          type="number"
          name="price_per_day"
          className={styles.selectInput}
          value={formData.price_per_day}
          onChange={handleInputChange}
          required
          min="0"
        />
      </label>
      <label className={styles.label}>
        Horse Power:
        <input
          type="number"
          name="horse_power"
          className={styles.selectInput}
          value={formData.horse_power}
          onChange={handleInputChange}
          required
          min="0"
        />
      </label>
      <label className={styles.label}>
        Engine Capacity (litters or cm3):
        <input
          type="number"
          name="engine_capacity"
          value={formData.engine_capacity}
          onChange={handleInputChange}
          required
          className={styles.selectInput}
          min="0"
          max="10"
        />
      </label>

      <label className={styles.label}>
        Purpose:
        <select
          name="purpose"
          value={formData.purpose}
          onChange={handleInputChange}
          required
          className={styles.selectInput}
        >
          <option value="">Select...</option>
          {purposes.map((purpose) => (
            <option key={purpose} value={purpose}>
              {purpose}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className={styles.buttonSubmit}>
        Submit
      </button>
      <button
        type="button"
        className={styles.buttonReset}
        id="reset"
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
}

export default Form;

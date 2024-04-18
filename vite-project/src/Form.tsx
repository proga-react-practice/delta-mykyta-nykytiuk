import React from "react";
import "./Form.css";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  brand: string;
  model: string;
  year: number;
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
  const [formData, setFormData] = React.useState<FormData>({
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
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData);
  }

  const handleReset = () => {
    setFormData({
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
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Car adding form</h2>
      <label>
        Brand:
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Model:
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Year:
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Body Type:
        <select
          name="body_type"
          value={formData.body_type}
          onChange={handleInputChange}
        >
          <option value="">Select...</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Convertible">Convertible</option>
          <option value="Coupe">Coupe</option>
        </select>
      </label>

      <label>
        Mileage (km):
        <input
          type="number"
          name="mileage_km"
          value={formData.mileage_km}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Gearbox:
        <label>
          <input
            type="radio"
            name="gearbox"
            value="Manual"
            checked={formData.gearbox === "Manual"}
            onChange={handleInputChange}
          />
          Manual
        </label>
        <label>
          <input
            type="radio"
            name="gearbox"
            value="Automatic"
            checked={formData.gearbox === "Automatic"}
            onChange={handleInputChange}
          />
          Automatic
        </label>
      </label>

      <label>
        Fuel:
        <label>
          <input
            type="radio"
            name="fuel"
            value="Petrol"
            checked={formData.fuel === "Petrol"}
            onChange={handleInputChange}
          />
          Petrol
        </label>
        <label>
          <input
            type="radio"
            name="fuel"
            value="Diesel"
            checked={formData.fuel === "Diesel"}
            onChange={handleInputChange}
          />
          Diesel
        </label>
        <label>
          <input
            type="radio"
            name="fuel"
            value="Electric"
            checked={formData.fuel === "Electric"}
            onChange={handleInputChange}
          />
          Electric
        </label>
      </label>
      <label>
        Price Per Day:
        <input
          type="number"
          name="price_per_day"
          value={formData.price_per_day}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Horse Power:
        <input
          type="number"
          name="horse_power"
          value={formData.horse_power}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Engine Capacity:
        <input
          type="number"
          name="engine_capacity"
          value={formData.engine_capacity}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Purpose:
        <select
          name="purpose"
          value={formData.purpose}
          onChange={handleInputChange}
        >
          <option value="">Select...</option>
          <option value="Personal">Personal</option>
          <option value="Commercial">Commercial</option>
        </select>
      </label>
      <button type="submit">Submit</button>
      <button type="button" id="reset" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default Form;

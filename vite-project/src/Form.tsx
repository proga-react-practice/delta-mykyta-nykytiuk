import React from "react";

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
      <label>
        Brand:
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Model:
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Year:
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Body Type:
        <br />
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
      <br />
      <label>
        Mileage (km):
        <input
          type="number"
          name="mileage_km"
          value={formData.mileage_km}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Gearbox:
        <br />
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
        <br />
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
      <br />
      <label>
        Fuel:
        <br />
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
        <br />
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
        <br />
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
      <br />
      <label>
        Price Per Day:
        <input
          type="number"
          name="price_per_day"
          value={formData.price_per_day}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Horse Power:
        <input
          type="number"
          name="horse_power"
          value={formData.horse_power}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Engine Capacity:
        <input
          type="number"
          name="engine_capacity"
          value={formData.engine_capacity}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Purpose:
        <br />
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
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default Form;

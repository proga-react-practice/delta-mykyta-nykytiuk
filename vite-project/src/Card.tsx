import React from "react";
import { FormData } from "./Form";
import "./Card.css";

type CardProps = {
  data: FormData;
  onDelete: () => void;
};

const Card: React.FC<CardProps> = ({ data, onDelete }) => {
  return (
    <table id="card" style={{ border: "1px solid black", margin: "10px" }}>
      <tr>
        <th>Brand:</th>
        <td>{data.brand}</td>
      </tr>
      <tr>
        <th>Model:</th>
        <td>{data.model}</td>
      </tr>
      <tr>
        <th>Year:</th>
        <td>{data.year}</td>
      </tr>
      <tr>
        <th>Body Type:</th>
        <td>{data.body_type}</td>
      </tr>
      <tr>
        <th>Mileage:</th>
        <td>{data.mileage_km}</td>
      </tr>
      <tr>
        <th>Gearbox:</th>
        <td>{data.gearbox}</td>
      </tr>
      <tr>
        <th>Fuel:</th>
        <td>{data.fuel}</td>
      </tr>
      <tr>
        <th>Daily price:</th>
        <td>{data.price_per_day}</td>
      </tr>
      <tr>
        <th>Horse Power:</th>
        <td>{data.horse_power}</td>
      </tr>
      <tr>
        <th>Engine Capacity:</th>
        <td>{data.engine_capacity}</td>
      </tr>
      <tr>
        <th>Purpose:</th>
        <td>{data.purpose}</td>
      </tr>
      <button id="delete" onClick={onDelete}>
        Delete
      </button>
    </table>
  );
};

export default Card;

import React from "react";
import { FormData } from "../../interfaces";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
} from "@mui/material";

type CardProps = {
  data: FormData;
  onDelete: () => void;
};

const TableContainerStyle = {
  border: "none",
  margin: "10px",
  maxWidth: 650,
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
  marginBottom: 4,
};

const DeleteButtonStyle = {
  marginTop: 2,
  marginBottom: 2,
  marginLeft: 2,
  marginRight: 2,
  backgroundColor: "#dc3545",
};

const Card: React.FC<CardProps> = ({ data, onDelete }) => {
  return (
    <TableContainer sx={TableContainerStyle}>
      <Table aria-label="a dense table" size="small">
        <TableBody>
          <TableRow>
            <TableCell>Brand:</TableCell>
            <TableCell>{data.brand}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Model:</TableCell>
            <TableCell>{data.model}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Year:</TableCell>
            <TableCell>{data.year}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Body Type:</TableCell>
            <TableCell>{data.body_type}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Mileage:</TableCell>
            <TableCell>{data.mileage_km}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gearbox:</TableCell>
            <TableCell>{data.gearbox}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Fuel:</TableCell>
            <TableCell>{data.fuel}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Price per day:</TableCell>
            <TableCell>{data.price_per_day}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Horse Power:</TableCell>
            <TableCell>{data.horse_power}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Engine Capacity:</TableCell>
            <TableCell>{data.engine_capacity}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Purpose:</TableCell>
            <TableCell>{data.purpose}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="secondary"
        onClick={onDelete}
        sx={DeleteButtonStyle}
      >
        Delete
      </Button>
    </TableContainer>
  );
};

export default Card;

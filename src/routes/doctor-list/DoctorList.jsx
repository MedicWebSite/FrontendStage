import "./DoctorList.scss";
import Box from "@mui/material/Box";
import Data from "../../data/data.json";
import Nav from "../../layout/nav/Nav";
import { Link } from "react-router-dom";
import { Container } from "../../utils/Utils";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import { FaPhoneAlt, FaStar } from "react-icons/fa";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { BiMessageRoundedDetail } from "react-icons/bi";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaPhone } from "react-icons/fa";

// const names = [
//   'Dermatologlar',
//   'Nevrologlar',
//   'Oftalmologlar',
//   'Fizioterapevtlar',
//   'Stomatologlar',
//   'Urologlar',
//   'Ginekologlar',
//   'Onkologlar',
//   'Ortopedlar',
// ]

const DoctorList = () => {
  const [age, setAge] = React.useState("");
  const total = Data.doctors.length;

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  return (
    <>
      <Nav />
      <div className="doctors">
        <Container>
          <div className="doctor__content-header">
            <h2>Doctors in Tashkent</h2>
            <h3>({total} Doctors)</h3>
          </div>
          <div className="doctors__search-wrapper">
            <input
              className="search__doctor-input"
              type="text"
              placeholder="Search"
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  All specialties
                </InputLabel>
                <Select
                  className="select__doctor-type"
                  style={{ width: "300px" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={(e) => setAge(e.target.value)}
                >
                  <MenuItem value={"Nevrologlar"}>Nevrologlar</MenuItem>
                  <MenuItem value={2}>Dermatologlar</MenuItem>
                  <MenuItem value={3}>Oftalmologlar</MenuItem>
                  <MenuItem value={4}>Stomatologlar</MenuItem>
                  <MenuItem value={5}>Urologlar</MenuItem>
                  <MenuItem value={6}>Ginekologlar</MenuItem>
                  <MenuItem value={7}>Onkologlar</MenuItem>
                  <MenuItem value={8}>Ortopedlar</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="doctors__list-wrapper">
            {Data.doctors.map((doctor, index) => (
              <div key={index} className="doctor-card">
                <Link to={`/doctor-info/${doctor.id}`} className="doctor-image">
                  <img src={doctor.image_url} alt="Doctor Picture" />
                  <div className="doctor__feedback">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                  </div>
                </Link>
                <div className="doctor-info">
                  <Link
                    className="doctor-name"
                    to={`/doctor-info/${doctor.id}`}
                  >
                    {doctor.name}
                  </Link>
                  <strong>{doctor.specialization}</strong>
                  <div className="doctor-email">
                    <strong>Email:</strong>
                    <p> {doctor.contact.email} </p>
                  </div>

                  <div className="doctor-number">
                    <strong>Number :</strong>
                    <p>{doctor.contact.phone}</p>
                  </div>
                </div>
                <button className="connect-icon">
                  <FaPhoneAlt />
                </button>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default DoctorList;

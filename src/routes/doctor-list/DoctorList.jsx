import React, { useEffect, useState } from 'react'
import "./DoctorList.scss"
import { Container } from '../../utils/Utils'
import Data from "../../data/data.json"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { FaStar } from "react-icons/fa";
import MenuItem from '@mui/material/MenuItem';
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';




const names = [
  'Dermatologlar',
  'Nevrologlar',
  'Oftalmologlar',
  'Fizioterapevtlar',
  'Stomatologlar',
  'Urologlar',
  'Ginekologlar',
  'Onkologlar',
  'Ortopedlar',
]


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const DoctorList = () => {
  const [age, setAge] = React.useState('');
  const [doctorTotal, setDoctorTotal] = useState("")

  useEffect(() => {
    const total = Data.doctors.length
    setDoctorTotal(total)
  }, [])

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='doctors'>
      <Container>
        <div className="doctor__content-header">
          <h2>Doctors in Tashkent</h2>
          <h3>({doctorTotal} Doctors)</h3>
        </div>
        <div className="doctors__search-wrapper">
          <input className='search__doctor-input' type="text" placeholder='Search' />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">All specialties</InputLabel>
              <Select
                className='select__doctor-type'
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
          {
            Data.doctors.map((doctor, index) =>
              <div key={index} className="doctor-card">
                <div className="doctor-image">
                  <img src={doctor.image_url} alt="Doctor Picture" />
                  <div className="doctor__feedback">
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                  </div>
                </div>
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <strong>{doctor.specialization}</strong>
                  <p className='doctor-email'><strong>Email:</strong>{doctor.contact.email} </p>
                
                  <p className='doctor-number'><strong>Number :</strong>{doctor.contact.phone} </p>
                </div>
                <button className='message-icon'><BiMessageRoundedDetail/></button>
              </div>
            )
          }

        </div>
      </Container>
    </div>
  )
}

export default DoctorList

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Data from "../../data/data.json"
import { Container } from '../../utils/Utils'
import "./DoctorInfo.scss"

const DoctorInfo = () => {
    const {id} = useParams()
    const [infoData, setInfoData] = useState(Data.doctors)
    console.log(Data.doctors);

        useEffect(() => {
            setInfoData(infoData?.filter(i => i.id == id))
        }, [id])

  return (
    <div className='doctor-info'>
        <Container>
            {
                infoData.map((info, index) =>
                   <div key={index} className="doctor__info-wrapper">
                     <div className="doctor__info-header">
                        <h2>{info.name}</h2>
                    </div>
                    <div className="doctor__info-content">
                        <img src={info.image_url} alt={info.name} />
                        <button className='gender-text'>Male</button>
                    </div>
                   </div>
                )
            }
        </Container>
       
    </div>
  )
}

export default DoctorInfo

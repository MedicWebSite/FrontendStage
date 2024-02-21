import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Data from "../../data/data.json"
import { Container } from '../../utils/Utils'
import "./DoctorInfo.scss"

const DoctorInfo = () => {
    
    const { id } = useParams()
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

                <div className="doctor__info-category">
                    {
                        Data.doctors.map((category, index) =>
                            <div key={index} className="category-card">
                                    <div className="card__header-content">
                                        <div className="info-doctor">
                                            <strong>{category.specialization}</strong>
                                            <h3>{category.name}</h3>
                                            
                                        </div>
                                        <img width={150} height={155} src={category.image_url} alt={category.name} />
                                    </div>
                                    <p className='description-text'>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore expedita, quibusdam dolorem similique a omnis harum, quod tempore natus voluptates voluptas distinctio libero quaerat earum suscipit. Magni dolores at ipsam?
                                    </p>
                            </div>
                        )
                    }
                </div>
            </Container>

        </div>
    )
}

export default DoctorInfo

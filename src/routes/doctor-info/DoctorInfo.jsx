import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Data from "../../data/data.json"
import { Container } from '../../utils/Utils'
import "./DoctorInfo.scss"
import { MdOutlineSchedule } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
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
                <div className="doctor__info-wrapper">
                    <div className='doctor__image'>
                        <img src={infoData[0]?.image_url} />
                        <h3>{infoData[0]?.name}</h3>
                    </div>
                    <div className="doctor__details">
                        <h2>{infoData[0]?.name} 22</h2>
                        <button>Book an Appoinment</button>
                        <div className="doctor__details-item">
                            <div className='icon'>
                                <p className='title'>Working days</p>
                                <span className='description'>Monday - Friday</span>
                            </div>
                            <div className='icon'>
                                <p className='title'>Working hours</p>
                                <span className='description'>9am - 5pm</span>
                            </div>
                            <div className='icon'>
                                <p className='title'>Experince</p>
                                <span className='description'>10 years</span>
                            </div>
                            <div className='icon'>
                                <p className='title'>Specialist</p>
                                <span className='description'>Cardiologist</span>
                            </div>
                            <div className='icon'>
                                <p className='title'>Languages</p>
                                <span className='description'>eng - rus</span>
                            </div>
                            <div className='icon'>
                                <p className='title'>Price</p>
                                <span className='description'>1 min - 10000 so'm</span>
                            </div>

                            

                        </div>
                    </div>
                </div>
                <div className="biographiy">
                    <h4>Biographiy</h4>
                    <p  className='description-text'>
                    As a doctor, your professional bio is one of the most powerful tools you have to showcase your expertise and attract potential patients. In this blog, we will provide you with key elements to include in a well-crafted physician bio and showcase some doctor bio examples that do a great job of using these elements.
                    As a doctor, your professional bio is one of the most powerful tools you have to showcase your expertise and attract potential patients. In this blog, we will provide you with key elements to include in a well-crafted physician bio and showcase some doctor bio examples that do a great job of using these elements.
                    </p>
                </div>

                <div className="education">
                    <h4>Education</h4>
                    <p className='description-text'>
                    2021- PROFESSOR RUI FALACHO ning "RESTORATIV STOMATLIGIDA YAPISHTIRISH TIZIMLARI". Koimbra universiteti, Portugaliya. 2021- PROFESSOR JASON MOTTA JONSNING "DONOLIK TISHLARI JARARASI: DIAGNOZDAN AVTOTRANSPLANTLARGA". HUMANITAS universiteti, Italiya. 2021- PROFESSOR DIEGO LOPSNING "OLDINI SOQALARIDAGI ESTETIK MUAMMOLAR". MILAN UNIVERSITETI, ITALIYA. 2022- "BIO-ESTETIK STOTOLOGIYA" KURSIDA ISHTIROK ETISHI UCHUN
                    </p>
                </div>

               
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
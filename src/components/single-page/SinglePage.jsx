import React from 'react'
import "./SinglePage.scss"
import { Container } from '../../utils/Utils'
import { LocationCity, LocationOffOutlined, LocationOn } from '@mui/icons-material'
const SinglePage = () => {
    return (
        <div className='single-page'>
            <div className='single-page-bg'>
            </div>
            <Container>
                <div className="single-page-wrapper">
                    <div className="single-page-main">
                        <div className='profile'>
                            <div className="profile-wrapper">
                                <div className="img">
                                    <img src="https://api.medicusunion.com/aws-s3/file/1699026463064-fgmdyo1v4r-image_seca_mBCA_LP_testimonials_370x350_Horbach.jpg?size=150" alt="" />
                                </div>
                                <div className="profile-info">
                                    <h3>Prof. Dr. med. Thomas Horbach</h3>
                                    <div className="expert-category">General surgery</div>
                                    <div className="doctor-location"><LocationOn style={{ fontSize: "18px", color: "gray" }} />  Tashkent, Uzbekistan</div>
                                </div>
                            </div>
                            <p className='profile-description'>Prof. Dr. med. Thomas Horbach has been working in surgery for over 25 years. His surgical focus is on minimally invasive and endoscopic procedures. He is a surgeon with a passion and is a luminary in the field of obesity and reflux surgery.

                                "Injuries are usually the result of accidents. I mainly treat them surgically. These procedures are either invasive with an incision or minimally invasive, e.g. using the keyhole technique. However, I also apply conservative treatment options if necessary." Prof. Dr. med. Thomas Horbach.</p>
                        </div>
                        <div className="additional-info">
                            <div className="booking-additional">
                                <h4>Initial consultation</h4>
                                <span>Video call | 0.5h</span>
                                <span>Duration: up to 30 minutes</span>
                                <div className="booking-btns">
                                    <span>350 €</span>
                                    <button className='booking-btn'>Book now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="expert-details">
                    <div className="expert-services">
                        <h4 className='expert-details-title'>Services</h4>
                        <ul>
                            <li>Conservative and surgical obesity treatment (medication/endoscopic/surgical therapy)</li>
                            <li>Anti-reflux surgery ("Heartburn")</li>
                            <li>Surgical endoscopy (gastroscopy and colonoscopy)</li>
                            <li>Surgery of the gastrointestinal tract and endocrine organs (removal of adhesions/good adrenal tumors)</li>
                            <li>Modern wound management (negative pressure therapy)</li>
                        </ul>
                    </div>
                    <div className="expert-education">
                        <h4 className='expert-details-title'>Education</h4>
                        <ul>
                            <li>2004 Habilitation on the subject of bariatric surgery at the Friedrich-Alexander University Hospital in Erlangen</li>
                            <li>1998 Accreditation as a specialist in surgery at the University Hospital Erlangen</li>
                            <li>1995 Doctorate (Dr. med.) - Ludwig-Maximilians-University Munich (LMU)</li>
                            <li>1989 Study of human medicine - Ludwig-Maximilians-University Munich (LMU)</li>
                        </ul>
                    </div>
                    <div className="expert-education">
                        <h4 className='expert-details-title'>Experience</h4>
                        <ul>
                            <li>2004 Habilitation on the subject of bariatric surgery at the Friedrich-Alexander University Hospital in Erlangen</li>
                            <li>1998 Accreditation as a specialist in surgery at the University Hospital Erlangen</li>
                            <li>1995 Doctorate (Dr. med.) - Ludwig-Maximilians-University Munich (LMU)</li>
                            <li>1989 Study of human medicine - Ludwig-Maximilians-University Munich (LMU)</li>
                            <li>1989 Study of human medicine - Ludwig-Maximilians-University Munich (LMU)</li>
                            <li>1989 Study of human medicine - Ludwig-Maximilians-University Munich (LMU)</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default SinglePage
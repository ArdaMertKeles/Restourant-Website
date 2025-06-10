import { useEffect } from 'react'
import '../styles/contactUsPage/style.css'
import Aos from 'aos'

export const ContactUsPage = () => {

    useEffect(() => {
        Aos.init({ once: true})
    }, [])

    return(
        <div className="contact-us-wrapper">
            <div className="left-side">
                <p className="article" data-aos='fade-up' data-aos-duration='1000'>Contact Us</p>
                <div className="contact-details" data-aos='fade-up' data-aos-duration='1000'>
                    <p>WhatsApp : +90 505 555 55 50 </p>
                    <p>Telephone: +90 555 555 55 55</p>
                </div>
                <p className="article" data-aos='fade-up' data-aos-delay='500' data-aos-duration='1000'>Inehsit Adress:</p>
                <p data-aos='fade-up' data-aos-delay='500' data-aos-duration='1000'>Antalya, Muratpaşa, Kaleiçi 400.Sk</p>
                <p className="article" data-aos='fade-up' data-aos-delay='1000' data-aos-duration='1000'>Operating Hours:</p>
                <i data-aos='fade-up' data-aos-delay='1000' data-aos-duration='1000'>Monday</i>
                <p className='time' data-aos='fade-up' data-aos-delay='1000' data-aos-duration='1000'>Bar Service 12:00pm to 03:00pm (no food)</p>
                <p className='time' data-aos='fade-up' data-aos-delay='1000' data-aos-duration='1000'>Bar Service 06:30pm to 09:30pm (no food)</p>
                <i data-aos='fade-up' data-aos-delay='1250' data-aos-duration='1000'>Tuesday to Sunday</i>
                <p className='time' data-aos='fade-up' data-aos-delay='1250' data-aos-duration='1000'>Lunch: 12:00pm to 3:00pm (2:30pm last order)</p>
                <p className='time' data-aos='fade-up' data-aos-delay='1250' data-aos-duration='1000'>Dinner: 6:30pm to 11:00pm (9:45pm last order)</p>
                <br />
                <p data-aos='fade-up' data-aos-delay='1500' data-aos-duration='1000'>For reservations, private events and other queries: dine@inehsit.com.tr</p>
                <br />
                <p data-aos='fade-up' data-aos-delay='1750' data-aos-duration='1000'>For job applications: hr@inehsit.com.tr</p>
            </div>
            <div className="contact-footer">Tel: 0 555 555 55 55 | dine@inehsit.com.tr | ©2025 Inehsit. All Rights Reserved.</div>
        </div>
    )
}
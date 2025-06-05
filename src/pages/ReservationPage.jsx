import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Slider from 'react-slick';
import '../styles/reservationPage/style.css'
import littleImg1 from '../assets/img/reservationPage/littleImg1.jpg'
import littleImg2 from '../assets/img/reservationPage/littleImg2.jpg'
import littleImg3 from '../assets/img/reservationPage/littleImg3.jpg'
import sliderImg1 from '../assets/img/reservationPage/slider1.jpg'
import sliderImg2 from '../assets/img/reservationPage/slider2.jpg'
import sliderImg3 from '../assets/img/reservationPage/slider3.jpg'
import sliderImg4 from '../assets/img/reservationPage/slider4.jpg'
import sliderImg5 from '../assets/img/reservationPage/slider5.jpg'

export const ReservationPage = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="reservation-wrapper">
            <p className="article">Book Your Dining Experience</p>
            <div className="table-container">
                <div className="top-container">
                    <div className="left-side">
                        <p>Abra</p>
                        <p>Main Dining Room</p>
                    </div>
                    <div className="right-side">
                        <p>Stepping through the fort-inspired entrance, striking pietra dura marble floors and traditional archways — reminiscent of a Topkapi palace — lead guests through to the main dining hall, Abra. Soft subtle silk walls and banquettes accentuate the striking glass wall light installations as well as the contemporary latticed jali screens.</p>
                    </div>
                </div>
                <div className="bottom-container">
                    <button>Reserve a Table in the Main Dining</button>
                    <div className="bottom-side">
                        <p>Scroll below for private rooms</p>
                        <KeyboardDoubleArrowDownIcon />
                    </div>
                </div>
            </div>
            <p className="article">Book a Private Room</p>
            <div className="private-room-container">
                <div className="room-box">
                    <img src={littleImg1} alt="" loading='lazy' />
                    <div className="info-section">
                        <div className="room-details">
                            <div className="room-name">Polo Room</div>
                            <div className="room-info">This room offers an airy private dining space, with an outdoor patio to enjoy pre-dinner aperitifs. Concealed entry to the bar also gives discreet access to their wide range of whiskies and cocktails. A dining space where friendships are forged from across the table.</div>
                        </div>
                        <div className="details">
                            <p>Capacity: Max 8 Guests</p>
                            <p>Minimum Spend: $1500</p>
                        </div>
                    </div>
                    <button className="reservation">Reserve</button>
                </div>
                <div className="room-box">
                    <img src={littleImg2} alt="" loading='lazy' />
                    <div className="info-section">
                        <div className="room-details">
                            <div className="room-name">Wild Flower</div>
                            <div className="room-info">Guests are seated around a marble-topped table featuring hand in-laid wildflowers.</div>
                        </div>
                        <div className="details">
                            <p>Capacity: Max 6 Guests</p>
                            <p>Minimum Spend: $1000</p>
                        </div>
                    </div>
                    <button className="reservation">Reserve</button>
                </div>
                <div className="room-box">
                    <img src={littleImg3} alt="" loading='lazy' />
                    <div className="info-section">
                        <div className="room-details">
                            <div className="room-name">Nilgiri</div>
                            <div className="room-info">Featuring the enchanting Nilgiri Room,  the mesmerising wallpaper with flora and fauna, hand painted in India, provides a seamless panoramic view of the property's lush gardens.</div>
                        </div>
                        <div className="details">
                            <p>Capacity: Max 24 Guests</p>
                            <p>Minimum Spend: $5000</p>
                        </div>
                    </div>
                    <button className="reservation">Reserve</button>
                </div>
            </div>
            <p className="article">Indulge in our Bar!</p>
            <div className="indulge-bar-container">
                <div className="top-container">
                    <p>Edebe Barr</p>
                    <p>Inspired by the spirit of the Forest from Turkish Mythology.</p>
                </div>
                <button>Reserve a Seat at the Bar</button>
            </div>
            <p className="article">Check Our Gallery</p>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src={sliderImg1} alt="" loading='lazy' />
                    </div>
                    <div>
                        <img src={sliderImg2} alt="" loading='lazy' />
                    </div>
                    <div>
                        <img src={sliderImg3} alt="" loading='lazy' />
                    </div>
                    <div>
                        <img src={sliderImg4} alt="" loading='lazy' />
                    </div>
                    <div>
                        <img src={sliderImg5} alt="" loading='lazy' />
                    </div>
                </Slider>
            </div>
            <div className="reservation-footer">
                <p>Tel: 0 555 555 55 55 | dine@inehsit.com.tr | ©2025 Inehsit. All Rights Reserved.</p>
            </div>
        </div>
    )
}
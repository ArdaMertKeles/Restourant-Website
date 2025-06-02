import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import '../styles/reservationPage/style.css'
import littleImg1 from '../assets/img/reservationPage/littleImg1.jpg'
import littleImg2 from '../assets/img/reservationPage/littleImg2.jpg'
import littleImg3 from '../assets/img/reservationPage/littleImg3.jpg'

export const ReservationPage = () => {

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
                    <img src={littleImg1} alt="" />
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
                    <img src={littleImg2} alt="" />
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
                    <img src={littleImg3} alt="" />
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

            </div>
            <p className="article">Check Our Gallery</p>
        </div>
    )
}
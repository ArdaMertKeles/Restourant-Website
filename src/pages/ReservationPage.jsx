import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import '../styles/reservationPage/style.css'

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

            </div>
            <p className="article">Indulge in our Bar!</p>
            <div className="indulge-bar-container">

            </div>
            <p className="article">Check Our Gallery</p>
        </div>
    )
}
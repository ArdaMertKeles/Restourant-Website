import { Link, useLocation } from 'react-router-dom'
import whiteLogo from '../assets/img/whiteTransperentLogo.png'
import blackLogo from '../assets/img/transperentLogo.png'
import { useEffect, useState } from 'react'

export const Header = () => {

    const [logo, setLogo] = useState(whiteLogo)

    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            console.log('selam')
        } else if (location.pathname === '/terms-privacy-policy') {
            setLogo(blackLogo)
            console.log('as')
        }
    }, [location])

    return (
        <div className="main-header" id={location.pathname === '/' ? 'white' : 'black'}>
            <Link to={'/'}>
                <img src={logo} alt="logo" className="logo" />
            </Link>
            <div className="directives">
                <div className="directive">Menu</div>
                <div className="directive">Take-Away</div>
                <div className="directive">Reservation</div>
                <div className="directive">Huma Bar</div>
                <div className="directive">e-Vouchers</div>
                <div className="directive">The Grand Trunk</div>
                <div className="directive">Contact Us</div>
            </div>
        </div>
    )
}
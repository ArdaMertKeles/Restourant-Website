import { Link, useLocation } from 'react-router-dom'
import whiteLogo from '../assets/img/whiteTransperentLogo.png'
import blackLogo from '../assets/img/transperentLogo.png'
import { useEffect, useState } from 'react'

export const Header = () => {

    const [logo, setLogo] = useState(whiteLogo)

    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            setLogo(whiteLogo)
        } else{
            setLogo(blackLogo)
        }
    }, [location])

    return (
        <div className="main-header" id={location.pathname === '/' ? 'white' : 'black'} >
            <Link to={'/'}>
                <img src={logo} alt="logo" className="logo" />
            </Link>
            <div className="directives">
                <Link to={'/menu'} className="directive" id={location.pathname === '/' ? 'white' : 'black'}>Menu</Link>
                <Link to={'/take-away'} className="directive" id={location.pathname === '/' ? 'white' : 'black'}>Take-Away</Link>
                <Link to={'/reservation'} className="directive" id={location.pathname === '/' ? 'white' : 'black'}>Reservation</Link>
                <Link to={'/bar'} className="directive" id={location.pathname === '/' ? 'white' : 'black'}>Huma Bar</Link>
                <Link to={'/e-voucher'} className="directive" id={location.pathname === '/' ? 'white' : 'black'}>e-Vouchers</Link>
                <Link to={'/contact-us'} className="directive" id={location.pathname === '/' ? 'white' : 'black'}>Contact Us</Link>
            </div>
        </div>
    )
}
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";
import '../styles/barPage/style.css'
import humaBird from '../assets/img/barPage/humaBird.png'

export const BarPage = () => {

    useEffect(() => {
        Aos.init({ once: true });
    }, []);

    return (
        <div className="bar-page-wrapper">
            <div className="main-container">
                <p>Welcome to Huma Bar, where the drinks keep pouring and the conversations keep flowing.</p>
            </div>
            <div className="huma-container">
                <div className="left-side">
                    <p className="article" data-aos="fade-up">Huma</p>
                    <p className="detail" data-aos="fade-up" data-aos-duration="1000">The Huma bird is a legendary creature in Turkish mythology. Often compared to the phoenix, it is believed to never land, living its entire life in the sky. The Huma is seen as a symbol of fortune and kingship—its shadow is said to bring luck or even elevate a person to royalty. Some myths claim the bird dies in fire and is reborn from its ashes. Though unseen, its presence is deeply spiritual, representing freedom, hope, and the divine. The Huma bird continues to inspire poetry, art, and dreams across cultures.</p>
                </div>
                <img src={humaBird} alt="" data-aos="fade-up" data-aos-duration="1000"/>
            </div>
            <div className="bar-footer">Tel: 0 555 555 55 55 | dine@inehsit.com.tr | ©2025 Inehsit. All Rights Reserved.</div>
        </div>
    )
}
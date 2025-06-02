import Slider from "react-slick";
import '../styles/homePage/style.css'
import stock1 from '../assets/img/homePage/stock1.jpg'
import stock3 from '../assets/img/homePage/stock3.jpg'
import stock4 from '../assets/img/homePage/stock4.jpg'
import stock5 from '../assets/img/homePage/stock5.jpg'
import aboutFood from '../assets/img/homePage/aboutFood.jpg'
import aboutPeople from '../assets/img/homePage/aboutPeople.jpg'
import aboutPlace from '../assets/img/homePage/aboutPlace.jpg'
import { Link } from "react-router-dom";

export const HomePage = () => {

    const slickSettings = {
        infinite: true,
        fade: true,
        waitForAnimate: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: false
    };

    return (
        <div className="home-page-wrapper">
            <div className="slick">
                <Slider {...slickSettings} >
                    <div className="img-box">
                        <img src={stock1} alt="" />
                    </div>
                    <div className="img-box">
                        <img src={stock3} alt="" loading="lazy" />
                    </div>
                    <div className="img-box">
                        <img src={stock4} alt="" loading="lazy" />
                    </div>
                    <div className="img-box">
                        <img src={stock5} alt="" loading="lazy" />
                    </div>
                </Slider>
            </div>
            <div className="about-wrapper">
                <p className="about">About Inehsit</p>
                <div className="about-container">
                    <div className="about-box">
                        <img src={aboutPlace} alt="" className="polygon" id="place" loading="lazy" />
                        <div className="header">
                            The Place
                        </div>
                        <div className="article">
                            Inspired by India in every aspect – from our silk wallpapers to our stately, fort-inspired door, celebrated designers Matthew and Paul of MSDO have artfully composed five uniquely Indian spaces within Yantra. Drawing on décor that wends masterfully through the depths of the subcontinent, each visit to Yantra promises a new adventure.
                        </div>
                    </div>
                    <div className="about-box">
                        <img src={aboutFood} alt="" className="polygon" id="food" loading="lazy" />
                        <div className="header">
                            The Food
                        </div>
                        <div className="article">
                            Blending a culinary philosophy that pays tribute to India’s rich legacy, culinary historian Pritha Sen and Executive Chef Pinaki Ray create an extensive menu offering both vegetarian and non-vegetarian dishes. Featuring niche ingredients sourced across the Subcontinent and South East Asia, a poetic and irreverent experience awaits.
                        </div>
                    </div>
                    <div className="about-box">
                        <img src={aboutPeople} alt="" className="polygon" id="people" loading="lazy" />
                        <div className="header">
                            The People
                        </div>
                        <div className="article">
                            People passionate about Indian Cuisine. Yantra Team brings their love of Indian cuisine to Singapore with recipes that span the length and breadth of the Subcontinent.
                        </div>
                    </div>
                </div>
            </div>
            <Link to={'/terms-privacy-policy'} className="terms">
                Terms of Service and Privacy Policy
            </Link>
        </div>
    )
}
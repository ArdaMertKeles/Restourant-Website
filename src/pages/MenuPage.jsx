import { useEffect, useRef, useState } from 'react'
import img1 from '../assets/img/menuPage/pexels-dana-tentis-118658-262959.jpg'
import img2 from '../assets/img/menuPage/pexels-fotios-photos-1279330.jpg'
import vertical1 from '../assets/img/menuPage/vertical1.jpg'
import vertical2 from '../assets/img/menuPage/vertical2.jpg'
import vertical3 from '../assets/img/menuPage/vertical3.jpg'
import '../styles/menuPage/style.css'

export const MenuPage = () => {

    const [selectedSection, setSelectedSection] = useState('')

    const extraRef = useRef(null);
    const largeRef = useRef(null);
    const smallRef = useRef(null);
    const sweetRef = useRef(null);

    const menuArr = [
        {
            smallPlates: [
                {
                    name: "Badal Jam, Flax Seed Labneh",
                    ingredients: "Japanese Eggplant | Sundried Tomato | Flaxseed | Yogurt | Crushed Walnuts",
                    price: 26
                },
                {
                    name: "Murg Gulabi Kebab",
                    ingredients: "Delicate Chicken Kebab | Rose Petal | Cashew | Pepper",
                    price: 32
                },
                {
                    name: "Jaipuri Pyaz Paneer Ki Sabzi",
                    ingredients: "Button Onions | Cottage Cheese | Asafoetida | Fennel",
                    price: 36
                },
                {
                    name: "Badal Jam, Flax Seed Labneh",
                    ingredients: "Japanese Eggplant | Sundried Tomato | Flaxseed | Yogurt | Crushed Walnuts",
                    price: 26
                },
                {
                    name: "Badal Jam, Flax Seed Labneh",
                    ingredients: "Japanese Eggplant | Sundried Tomato | Flaxseed | Yogurt | Crushed Walnuts",
                    price: 26
                },
                {
                    name: "Murg Gulabi Kebab",
                    ingredients: "Delicate Chicken Kebab | Rose Petal | Cashew | Pepper",
                    price: 32
                },
                {
                    name: "Badal Jam, Flax Seed Labneh",
                    ingredients: "Japanese Eggplant | Sundried Tomato | Flaxseed | Yogurt | Crushed Walnuts",
                    price: 26
                },
                {
                    name: "Jaipuri Pyaz Paneer Ki Sabzi",
                    ingredients: "Button Onions | Cottage Cheese | Asafoetida | Fennel",
                    price: 36
                },
                {
                    name: "Murg Gulabi Kebab",
                    ingredients: "Delicate Chicken Kebab | Rose Petal | Cashew | Pepper",
                    price: 32
                },
            ],
            smallPlatesQuandooExtras: [
                {
                    name: "Achari Sabz Haldi Kebab (v)",
                    ingredients: "Pickled Turmeric | Vegetable Patty | Yogurt",
                    price: 26
                },
                {
                    name: "Chaat Banarasi (v)",
                    ingredients: "Sweetened Aerated Yoghurt | Pomegranate | Tamarind | Jeera Mathri",
                    price: 28
                },
                {
                    name: "Faizabadi Shammi Kebab (v)",
                    ingredients: "Minced Lotus Root Kebab | Pine Nuts | Salsa Cruda",
                    price: 26
                },
                {
                    name: "Paneer Tikka (v)",
                    ingredients: "Cottage Cheese | Spiced Yogurt | Pickle | Mint Chutney",
                    price: 28
                },
                {
                    name: "Rajasthani Mirchi Vada (v)",
                    ingredients: "Green Chilli | Potato | Batter Fried",
                    price: 26
                },
                {
                    name: "Achari Sabz Haldi Kebab (v)",
                    ingredients: "Pickled Turmeric | Vegetable Patty | Yogurt",
                    price: 26
                },
                {
                    name: "Chaat Banarasi (v)",
                    ingredients: "Sweetened Aerated Yoghurt | Pomegranate | Tamarind",
                    price: 28
                },
                {
                    name: "Faizabadi Shammi Kebab (v)",
                    ingredients: "Minced Lotus Root Kebab | Pine Nuts | Salsa Cruda",
                    price: 26
                },
                {
                    name: "Paneer Tikka (v)",
                    ingredients: "Cottage Cheese | Spiced Yogurt | Pickle | Mint Chutney",
                    price: 28
                },
                {
                    name: "Rajasthani Mirchi Vada (v)",
                    ingredients: "Green Chilli | Potato | Batter Fried",
                    price: 26
                }
            ],
            largePlates: [
                {
                    name: "Suvai Aloo (v)",
                    ingredients: "Potato | Cumin | Fresh Dill",
                    price: 32
                },
                {
                    name: "Bhindi Bejor (v)",
                    ingredients: "Okra | Mustard",
                    price: 36
                },
                {
                    name: "Dungare Paneer (v)",
                    ingredients: "Cottage Cheese | Kasoori Methi | Cloves | Smoke",
                    price: 38
                },
                {
                    name: "Gobi Ka Keema (v)",
                    ingredients: "Cauliflower | Peas | Potatoes | House Spices",
                    price: 38
                },
                {
                    name: "Palak Anjeer Kofta (v)",
                    ingredients: "Spinach Kofta | Coconut | Fig",
                    price: 36
                },
                {
                    name: "Suvai Aloo (v)",
                    ingredients: "Potato | Cumin | Fresh Dill",
                    price: 32
                },
                {
                    name: "Bhindi Bejor (v)",
                    ingredients: "Okra | Mustard",
                    price: 36
                },
                {
                    name: "Dungare Paneer (v)",
                    ingredients: "Cottage Cheese | Kasoori Methi | Cloves | Smoke",
                    price: 38
                },
                {
                    name: "Gobi Ka Keema (v)",
                    ingredients: "Cauliflower | Peas | Potatoes | House Spices",
                    price: 38
                },
                {
                    name: "Palak Anjeer Kofta (v)",
                    ingredients: "Spinach Kofta | Coconut | Fig",
                    price: 36
                }
            ],
            riceAndDals: [
                {
                    name: "Hyderabadi Chicken dum Biryani",
                    ingredients: "Mint | Coriander | Saffron",
                    price: 46
                },
                {
                    name: "Nawabi Tarkari Biryani (v)",
                    ingredients: "Seasonal vegetables | Cottage Cheese | Mint | Coriander | Saffron",
                    price: 42
                },
                {
                    name: "Rampur Mutton Biryani",
                    ingredients: "Basmati | Fennel | Coriander | Black Pepper",
                    price: 48
                },
                {
                    name: "Dal Moradabadi",
                    ingredients: "Yellow Dal | Chat Masala | Kachumbar | Mint Chutney",
                    price: 30
                },
                {
                    name: "Ma Ki Dal",
                    ingredients: "Black Urad Dal | Kasoori Methi | Cloves",
                    price: 30
                },
                {
                    name: "Hyderabadi Chicken dum Biryani",
                    ingredients: "Mint | Coriander | Saffron",
                    price: 46
                },
                {
                    name: "Nawabi Tarkari Biryani (v)",
                    ingredients: "Seasonal vegetables | Cottage Cheese | Mint | Coriander | Saffron",
                    price: 42
                },
                {
                    name: "Rampur Mutton Biryani",
                    ingredients: "Basmati | Fennel | Coriander | Black Pepper",
                    price: 48
                },
                {
                    name: "Dal Moradabadi",
                    ingredients: "Yellow Dal | Chat Masala | Kachumbar | Mint Chutney",
                    price: 30
                },
                {
                    name: "Ma Ki Dal",
                    ingredients: "Black Urad Dal | Kasoori Methi | Cloves",
                    price: 30
                }
            ],
            sweets: [
                {
                    name: "Bhapa Doi",
                    ingredients: "Steamed Yoghurt | Mahua Treacle | Black Berry | Mahua Flora",
                    price: 24
                },
                {
                    name: "Saffron‑flavoured Crispy Jalebi Rabri",
                    ingredients: "Flavoured flour fritters | Cardamom flavoured reduced milk",
                    price: 24
                },
                {
                    name: "Baked Gajar Halwa",
                    ingredients: "Carrot Compote | Almonds | Pistachio | Malai",
                    price: 24
                },

            ]
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;

            const smallTop = smallRef.current?.offsetTop;
            const sweetTop = sweetRef.current?.offsetTop;

            if (sweetTop != null && scrollPos >= sweetTop) {
                setSelectedSection('sweet');
            } else if (smallTop != null && scrollPos >= smallTop) {
                setSelectedSection('small');
            } else {
                setSelectedSection('large');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const handleChange = (e) => {
        const section = e.target.value;
        
        const refs = {
            extras: extraRef,
            large: largeRef,
            small: smallRef,
            sweet: sweetRef,
        };

        if (refs[section]?.current) {
            refs[section].current.scrollIntoView({ behavior: 'smooth' });
        }
        setSelectedSection(section);
    };


    return (
        <div className="menu-page-wrapper">
            <div className="img-section">
                <img src={img1} alt="" loading='lazy' />
                <img src={img2} alt="" loading='lazy' />
            </div>
            <div className="sections">
                <label>
                    <input
                        type="radio"
                        value="extras"
                        onChange={handleChange}
                    />
                    <span>Extras</span>
                </label>
                <label>
                    <input
                        type="radio"
                        value="large"
                        onChange={handleChange}
                    />
                    <span>Large Plates</span>
                </label>
                <label>
                    <input
                        type="radio"
                        value="small"
                        onChange={handleChange}
                    />
                    <span>Small Plates</span>
                </label>
                <label>
                    <input
                        type="radio"
                        value="sweet"
                        checked={selectedSection === 'sweet'}
                        onChange={handleChange}
                    />
                    <span>Sweet Plates</span>
                </label>

            </div>
            <div className="extras-container" ref={extraRef}>
                <p className="article">Quandoo Extras</p>
                <div className="side-wrapper">
                    <img src={vertical1} alt="" loading='lazy' />
                    <div className="food-list">
                        {menuArr[0].smallPlatesQuandooExtras.map((item, key) => (
                            <div key={key} className='food-lister'>
                                <p className="name">{item.name}</p>
                                <p className="ingredients">{item.ingredients}</p>
                                <p className="price">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div ref={largeRef} className="large-container">
                <p className='article'>Large Plates</p>
                <div className="side-wrapper">
                    <div className="food-list">
                        {menuArr[0].largePlates.map((item, key) => (
                            <div key={key} className='food-lister'>
                                <p className="name">{item.name}</p>
                                <p className="ingredients">{item.ingredients}</p>
                                <p className="price">{item.price}</p>
                            </div>
                        ))}
                    </div>
                    <img src={vertical2} alt="" loading='lazy' />
                </div>
            </div>
            <div ref={smallRef} className="small-container">
                <p className='article'>Small Plates</p>
                <div className="side-wrapper">
                    <img src={vertical3} alt="" />
                    <div className="food-list">
                        {menuArr[0].smallPlates.map((item, key) => (
                            <div key={key} className='food-lister'>
                                <p className="name">{item.name}</p>
                                <p className="ingredients">{item.ingredients}</p>
                                <p className="price">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="side-section">
                <div className="rice-container">
                    <p className='article'>Rice & Dals</p>
                    <div className="food-list">
                        {menuArr[0].riceAndDals.map((item, key) => (
                            <div key={key} className='food-lister'>
                                <p className="name">{item.name}</p>
                                <p className="ingredients">{item.ingredients}</p>
                                <p className="price">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div ref={sweetRef} className="sweet-container">
                    <p className='article'>Sweets</p>
                    <div className="food-list">
                        {menuArr[0].sweets.map((item, key) => (
                            <div key={key} className='food-lister'>
                                <p className="name">{item.name}</p>
                                <p className="ingredients">{item.ingredients}</p>
                                <p className="price">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="menu-footer">
                <p>All prices are subject to 10% service charge and 9% Goods and Services Tax.</p>
                <p>Menu and price is subject to change without prior notice. Menu may change based on seasonality and availability of ingredients. If you have a food allergy, please notify your server.</p>
            </div>
        </div>
    )
}
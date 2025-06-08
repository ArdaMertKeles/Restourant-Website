// Large Plate Images
import large1 from '../assets/img/takeAwayPage/large1.jpg'
import large2 from '../assets/img/takeAwayPage/large2.jpg'
import large3 from '../assets/img/takeAwayPage/large3.jpg'
import large4 from '../assets/img/takeAwayPage/large4.jpg'
import large5 from '../assets/img/takeAwayPage/large5.jpg'
// Small Plate Images
import small1 from '../assets/img/takeAwayPage/small1.jpg'
import small2 from '../assets/img/takeAwayPage/small2.jpg'
import small3 from '../assets/img/takeAwayPage/small3.jpg'
import small4 from '../assets/img/takeAwayPage/small4.jpg'
import small5 from '../assets/img/takeAwayPage/small5.jpg'
import small6 from '../assets/img/takeAwayPage/small6.jpg'
// Sweet Plate Images
import sweet1 from '../assets/img/takeAwayPage/sweet1.jpg'
import sweet2 from '../assets/img/takeAwayPage/sweet2.jpg'
import sweet3 from '../assets/img/takeAwayPage/sweet3.jpg'
import sweet4 from '../assets/img/takeAwayPage/sweet4.jpg'
import sweet5 from '../assets/img/takeAwayPage/sweet5.jpg'
// Material UI Imports
import { Backdrop } from '@mui/material'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Drawer from '@mui/material/Drawer';
// Imports
import '../styles/takeAwayPage/style.css'
import { useEffect, useRef, useState } from 'react'
import { FoodBox } from '../components/takeAwayPage/FoodBox'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/features'
import NoteInputOrButton from '../components/takeAwayPage/NoteInputOrButton'

export const TakeAwayPage = () => {

    const [selectedSection, setSelectedSection] = useState('')
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState('')
    const [pickDate, setPickDate] = useState('')
    const [cartData, setCartData] = useState([])
    const [drawer, setDrawer] = useState(false)

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const largeRef = useRef(null);
    const smallRef = useRef(null);
    const sweetRef = useRef(null);
    const dispatch = useDispatch()

    const data = useSelector((state) => state.featuresCheck.cart)

    useEffect(() => {
        setCartData(data)
    }, [data])

    // Plate Objectation Arrays
    const largePlatesArr = [
        {
            id: 1,
            name: 'Lamb Steak',
            ingredients: 'Lamb Meat | Salad',
            price: 29.99,
            img: large1
        },
        {
            id: 2,
            name: 'Mey Rice',
            ingredients: 'Meyhane Rice | Potato | Fried Chicken',
            price: 19.99,
            img: large2
        },
        {
            id: 3,
            name: 'Faroz Pide',
            ingredients: 'Meat Pide | Salad',
            price: 14.99,
            img: large3
        },
        {
            id: 4,
            name: 'Chicken Alfredo',
            ingredients: 'Sauced Pasta | Chicken | Salad',
            price: 14.99,
            img: large4
        },
        {
            id: 5,
            name: 'Maras Tava',
            ingredients: 'Pasta | Meat Kebab',
            price: 29.99,
            img: large5
        },
    ]

    const smallPlatesArr = [
        {
            id: 6,
            name: 'Fried Squid',
            ingredients: 'Squid | Sauce',
            price: 9.99,
            img: small1
        },
        {
            id: 7,
            name: 'Krep',
            ingredients: 'Krep | Accompanists',
            price: 7.99,
            img: small2
        },
        {
            id: 8,
            name: 'Icli Kofte',
            ingredients: 'Meatball | Sauce',
            price: 7.99,
            img: small3
        },
        {
            id: 9,
            name: 'Vegetable Soup',
            ingredients: 'Broccoli | Cauliflower | Carrot | Onion',
            price: 3.99,
            img: small4
        },
        {
            id: 10,
            name: 'Egg Royal',
            ingredients: 'Egg | Bacon | Sauce',
            price: 4.99,
            img: small5
        },
        {
            id: 11,
            name: 'Gumus Plate',
            ingredients: 'Bacon | Rice | Fried Bread',
            price: 5.99,
            img: small6
        }
    ]

    const sweetPlatesArr = [
        {
            id: 12,
            name: 'Coconut Cookie',
            ingredients: 'Coconut Powder | Chocolate',
            price: 2.99,
            img: sweet1
        },
        {
            id: 13,
            name: 'Raspberry Pie',
            ingredients: 'Raspberry | Cream',
            price: 3.99,
            img: sweet2
        },
        {
            id: 14,
            name: 'Pancakes',
            ingredients: 'Pancake | Strawberry, Berries',
            price: 2.99,
            img: sweet3
        },
        {
            id: 15,
            name: 'Turkish Waffle',
            ingredients: 'Mini Waffles | Turkish Ice Cream',
            price: 4.99,
            img: sweet4
        },
        {
            id: 16,
            name: 'Fruit Table',
            ingredients: 'Strawberry | Blackberry',
            price: 1.99,
            img: sweet5
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;

            const smallTop = smallRef.current.offsetTop;
            const sweetTop = sweetRef.current.offsetTop;

            if (scrollPos >= sweetTop) {
                setSelectedSection('sweet');
            } else if (scrollPos >= smallTop) {
                setSelectedSection('small');
            } else {
                setSelectedSection('large');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleChange = (e) => {
        const section = e.target.value;
        setSelectedSection(section);

        const refs = {
            large: largeRef,
            small: smallRef,
            sweet: sweetRef,
        };

        refs[section].current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="take-away-page-wrapper">
            <p className='article'>Inehsit Online Take Away</p>
            <div className="main-container">
                <div className="header-section">
                    <div className="top">
                        <button className="date" onClick={handleOpen}>Pickup Date {pickDate}</button>
                        <Backdrop open={open} onClick={handleClose} sx={{ zIndex: 3 }} >
                            <div className="date-picker" onClick={(e) => e.stopPropagation()}>
                                <div className="top">
                                    <p>How do you want to get your order?</p>
                                    <CloseOutlinedIcon onClick={handleClose} />
                                </div>
                                <div className="pick-from">
                                    <p>Pickup from</p>
                                    <p>Turkey, Kilincarslan, Hamam Sk. 200/10, 07100 Muratpasa/Antalya</p>
                                </div>
                                <div className="pick-time">
                                    <p>Pickup time</p>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker label="Basic date picker" disablePast onChange={(e) => setDate(dayjs(e).format("DD/MM/YYYY"))} />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>
                                <div className="buttons">
                                    <button className="cancel" onClick={handleClose}>Cancel</button>
                                    <button className="save" onClick={() => { setPickDate(date); handleClose() }}>Save</button>
                                </div>
                            </div>
                        </Backdrop>
                    </div>
                    <div className="bottom">
                        <div className="sections">
                            <label>
                                <input
                                    type="radio"
                                    value="large"
                                    checked={selectedSection === 'large'}
                                    onChange={handleChange}
                                />
                                <span>Large Plates</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="small"
                                    checked={selectedSection === 'small'}
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
                        <div onClick={() => setDrawer(true)} className={cartData.length === 0 ? 'basket-empty' : 'basket-filled'}>
                            <p className='cart'>View Cart</p>
                            <ShoppingBasketOutlinedIcon />
                            <p>{cartData.length}</p>
                        </div>
                        <Drawer
                            anchor={'right'}
                            open={drawer}
                            onClose={() => setDrawer(false)}
                        >
                            <div className="drawer">
                                <div className="section">
                                    <div className="top-side">
                                        <p>My Order ({cartData.length})</p>
                                        <CloseOutlinedIcon />
                                    </div>
                                    <div className="items">
                                        {cartData.map((item, key) => (
                                            <div className="item-box" key={key}>
                                                <div className="details">
                                                    <p>{item.name}</p>
                                                    <p>${item.price}</p>
                                                </div>
                                                <p onClick={() => dispatch(removeFromCart(item))} className='remove'>Remove</p>
                                            </div>
                                        ))}
                                        {cartData.length === 0 && <p className='alert'>Browse our menu and start adding items to your order</p>}
                                    </div>
                                    <NoteInputOrButton />
                                    <div className="prices">
                                        <div className="price">
                                            <p>Subtotal:</p>
                                            <p>${cartData.reduce((sum, item) => sum + item.price, 0)}</p>
                                        </div>
                                        {cartData.length >= 1 && <div className="price">
                                            <p>Tax:</p>
                                            <p>$5.99</p>
                                        </div>}
                                    </div>
                                </div>
                                <button disabled={cartData.length === 0 ? true : false}>Continue to Checkout</button>
                            </div>
                        </Drawer>
                    </div>
                </div>
                <p className='article'>Inehsit</p>
                <div className="section-wrapper">
                    <div className="section" ref={largeRef}>
                        <p>Large Plates</p>
                        <div className="wrapper">
                            {largePlatesArr.map((food, key) => (
                                <FoodBox food={food} key={key} />
                            ))}
                        </div>
                    </div>
                    <div className="section" ref={smallRef}>
                        <p>Small Plates</p>
                        <div className="wrapper">
                            {smallPlatesArr.map((food, key) => (
                                <FoodBox food={food} key={key} />
                            ))}
                        </div>
                    </div>
                    <div className="section" ref={sweetRef}>
                        <p>Sweet Plates</p>
                        <hr />
                        <div className="wrapper">
                            {sweetPlatesArr.map((food, key) => (
                                <FoodBox food={food} key={key} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
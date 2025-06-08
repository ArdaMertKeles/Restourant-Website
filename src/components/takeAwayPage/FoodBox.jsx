import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Backdrop } from '@mui/material'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCart } from '../../redux/features'

export const FoodBox = ({ food }) => {

    const [open, setOpen] = useState(false)
    const [amount, setAmount] = useState(1)
    const dispatch = useDispatch()

    const handleClose = () => {
        setOpen(false);
        setAmount(1)
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className='food-box'>
            <div className="food-box-container" onClick={handleOpen}>
                <img src={food.img} alt="" loading='lazy' />
                <div className="details">
                    <p className="food-name">{food.name}</p>
                    <p className="food-ingredients">{food.ingredients}</p>
                </div>
                <p className="food-price">${food.price}</p>
            </div>
            <Backdrop open={open} onClick={handleClose} sx={{ zIndex: 3 }} >
                <div className="food-cart" onClick={(e) => e.stopPropagation()}>
                    <div className="top">
                        <img src={food.img} alt="" />
                        <CloseOutlinedIcon onClick={handleClose} />
                    </div>
                    <div className="middle">
                        <p>{food.name}</p>
                        <p>{food.ingredients}</p>
                    </div>
                    <div className="bottom">
                        <div className="amount-button">
                            <button onClick={() => amount === 1 ? '' : setAmount(amount - 1)} disabled={amount === 1 ? true : false}>-</button>
                            <p>{amount}</p>
                            <button onClick={() => setAmount(amount + 1)}>+</button>
                        </div>
                        <button className='add-btn' onClick={() => {
                            const items = Array.from({ length: amount }, () => food);
                            dispatch(setCart(items));
                            handleClose()
                        }}
                        >Add to my order {amount * food.price}</button>
                    </div>
                </div>
            </Backdrop>
        </div>
    )
}
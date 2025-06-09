import '../styles/voucherPage/style.css'
import voucher from '../assets/img/voucherPage/voucher.png'
import { useState } from 'react'

export const VoucherPage = () => {

    const [forMyself, setForMyself] = useState(false)
    const [amount, setAmount] = useState(1)
    const [price, setPrice] = useState(50)

    return (
        <div className="voucher-page-wrapper">
            <div className="left-side">
                <img src={voucher} alt="" />
            </div>
            <div className="right-side">
                <p className='article'>e-Voucher</p>
                <p className='price'>${price}</p>
                <p className='terms'>You can't go wrong with an e-Voucher. Choose an amount and write a personalized message to make this e-Voucher your own. Terms and Conditions Apply.</p>
                <div className='prices'>
                    <label onClick={() => setPrice(50)}>
                        <input type="radio" name='price' defaultChecked='true' />
                        <span>$50</span>
                    </label>
                    <label onClick={() => setPrice(100)}>
                        <input type="radio" name='price' />
                        <span>$100</span>
                    </label>
                    <label onClick={() => setPrice(150)}>
                        <input type="radio" name='price' />
                        <span>$150</span>
                    </label>
                    <label onClick={() => setPrice(200)}>
                        <input type="radio" name='price' />
                        <span>$200</span>
                    </label>
                    <label onClick={() => setPrice(300)}>
                        <input type="radio" name='price' />
                        <span>$300</span>
                    </label>
                    <label onClick={() => setPrice(500)}>
                        <input type="radio" name='price' />
                        <span>$500</span>
                    </label>
                </div>
                <p>Quantity</p>
                <div className="amount-button">
                    <button onClick={() => amount === 1 ? '' : setAmount(amount - 1)} disabled={amount === 1 ? true : false}>-</button>
                    <p>{amount}</p>
                    <button onClick={() => setAmount(amount + 1)}>+</button>
                </div>
                <p>Who's the e-Voucher for?</p>
                <div className='classifer'>
                    <label onClick={() => setForMyself(false)}>
                        <input type="radio" name='classifer' defaultChecked='true' />
                        <div>For someone else</div>
                    </label>
                    <label onClick={() => setForMyself(true)}>
                        <input type="radio" name='classifer' />
                        <div>For myself</div>
                    </label>
                </div>
                {!forMyself && <form className="someone-else-container">
                    <label htmlFor="email">
                        Recipent email*
                    </label>
                    <input type="text" id='email' required='true' />
                    <label htmlFor="name">
                        Recipent name
                    </label>
                    <input type="text" id="name" />
                    <label htmlFor="message">
                        Message
                    </label>
                    <input type="text" id='message' />
                    <input type="submit" id='submit' />
                </form>}
                <label htmlFor="submit">
                    Buy Now
                </label>
            </div>
        </div>
    )
}
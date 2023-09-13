import React from 'react'
import "./Basket.scss"
import { modalContext } from "src/context/ModalProvider";
import { useContext } from "react";
import { getUserData } from "src/helper";
import { Checkbox } from 'antd';

const Basket = () => {
    const { setIsLogin, setIsModalOpen } = useContext(modalContext);
    const { jwt } = getUserData();
    const handleLogin = () => {
        setIsModalOpen(true);
        setIsLogin(true);
    }

    const handleSignUp = () => {
        setIsModalOpen(true);
        setIsLogin(false);
    }

    return (
        <div>
            <div className='shopping-chart'>
                <div className='heading container'>
                    <h5 className='shopping-chart-heading'>Shopping Chart</h5>
                    <p className='shopping-chart-text'>Showing your choices product</p>
                </div>
                {!jwt && <div className='basket-with-logout container'>
                    <p className='basket-signup'><span onClick={handleSignUp}>Sign up</span> now to add products to your cart or <span onClick={handleLogin}>Log in</span></p>
                </div>}
            </div>
            {jwt && <div className='basket-wrapper container'>
                <div className='basket-products'>
                    <div className='basket-product-card'>
                        <div className='product-info'>
                            <Checkbox></Checkbox>
                            <img src="" alt="" />
                            <div className='name-price'>
                                <h6>Logitech G435 Gaming Headset</h6>
                                <p>Central Jakarta</p>
                                <span>$280</span>
                            </div>
                        </div>
                        <div className='product-quantity'>
                            <div className='product-counter'>
                                <button>-</button>
                                <span>1</span>
                                <button className='plus-btn'>+</button>
                            </div>
                            <button className='delete-btn'>del</button>
                        </div>
                    </div>
                </div>
                <div className='basket-products-price'>prices</div>
            </div>}
        </div>
    )
}

export default Basket

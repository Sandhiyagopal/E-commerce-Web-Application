import React from 'react'
import './style.css';
import CardIcon from "../assets/shopping-cart-228.png"
import { useNavigate } from 'react-router-dom';

function Header() {
    const location = window.location.href;
    const navigate = useNavigate()

  return (
    <div className='Header_container'>
        <div onClick={()=>navigate('/')}>
            E-Commerce Web App
        </div>
        <div>
            {(location.includes('cart') || location.includes('checkout')) &&
                <span style={{marginLeft:"2rem",cursor:"pointer"}} onClick={()=>navigate('/')}>Home</span>
            }
            {(!location.includes('cart') && !location.includes('checkout')) &&
            <img src={CardIcon} alt="card" style={{cursor:"pointer"}} onClick={()=>navigate("/cart")} />
            }
        </div>
    </div>
  )
}

export default Header

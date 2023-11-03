import React from 'react'
import mealImage from '../../Assets/Background.jpg'
import './Header.css'
import HeaderCartButton from './HeaderCartButton'

const Header  = (props) => {
  return (
    <>
      <header className='header'>
        <h1>Food_land</h1>
<HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className='main-image'>
        <img src={mealImage}  alt='not_found' c />
      </div>
    </>
  )
}

export default Header;

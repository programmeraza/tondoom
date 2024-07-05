import React from 'react'
import "./Header.scss"

const Header = () => {
  return (
    <>
    <div className="header">
        <div className="container">
            <div className="header__wrapper">
                <button className="header__btn-logo">
                    <img width={40} src="/ton.png" alt="logo" />
                </button>
                <button className="header__btn-wallet">
                    <img width={30} src="/ewallet.png" alt="logo" />
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
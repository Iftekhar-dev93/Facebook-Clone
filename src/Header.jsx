import React from 'react'
import "./Header.css"
import { Home, Search } from '@mui/icons-material'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="" />
                <div className="header__input">
                    <Search />
                    <input type="text" />
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option">
                    <Home fontSize="large" />
                </div>
            </div>

            <div className="header__right"></div>
        </div>
    )
}

export default Header
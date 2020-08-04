import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
// import panda from '../panda.png'
import zoo from '../zoo_greg.png'
// import puppy from '../puppy.png'
function NavBar(props){
    return (
        <div className="navbar-component">
            <div className="navbar area">
                <div className="list">
                    <Link className="brand" to="/">ЗОО-МАГ</Link>
                    <img className="brand-image"src={zoo} alt="logo"/>
                </div>
                <nav className="list">
                    {/* <div className="nav-item">Поиск</div> */}
                    <div className="item">Корзина</div>
                    <div className="item">Войти</div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
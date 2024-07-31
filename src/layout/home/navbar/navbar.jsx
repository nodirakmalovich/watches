import './navbar.scss'
import * as React from 'react';
import basket from '../../../assets/basket.svg'


let navbarMenuData = ['Times', 'Watches', 'About Us', 'Store']
let languages = ['ENG', 'RU', 'UZB']

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar_row">
                    <ul className="navbar_row_menu">
                        {
                            navbarMenuData.map(data => {
                                return (
                                    <li className="navbar_row_menu_item">
                                        <a href="#" className="navbar_row_menu_item_link">
                                            {data}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="navbar_row_actions">
                        <img src={basket} alt="basket" className="navbar_row_actions_basket" />
                        <select className='navbar_row_actions_select'>
                            {
                                languages.map((lan, index) => {
                                    return (
                                        <option key={index} className='navbar_row_actions_select_option'>
                                            {lan}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <a href="#" className="navbar_row_actions_logIn">Log In</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
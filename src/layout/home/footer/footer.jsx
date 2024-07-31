import '../footer/footer.scss'


export default function Footer() {
    return (
        <div className="footer">

            <div className="container">
                <div className="footer_row">

                    <ul className="footer_menu footer_menu_first">
                        <li className='footer_menu_item '>
                            <a className='footer_menu_item_link footer_menu_item_link_logo' href="#">Times</a>
                        </li>
                        <li className='footer_menu_item'>
                            <a className='footer_menu_item_link' href="#">
                                When it came near enough he perceived that it was not grass; there were no blades, but only purple roots the roots.
                            </a>
                        </li>
                        <li className='footer_menu_item'>
                            <a className='footer_menu_item_link' href="#">
                                © 2020 TIMES. All Rights Reserved
                            </a>
                        </li>


                    </ul>

                    <ul className="footer_menu">
                        <li className='footer_menu_item '>
                            <a className='footer_menu_item_link footer_menu_item_link_default' href="#">Site Map</a>
                        </li>
                        <li className='footer_menu_item'>
                            <a className='footer_menu_item_link' href="#">Home</a>
                        </li>
                        <li className='footer_menu_item'>
                            <a className='footer_menu_item_link' href="#">Product</a>
                        </li>
                        <li className='footer_menu_item'>
                            <a className='footer_menu_item_link' href="#">About</a>
                        </li>
                        <li className='footer_menu_item'>
                            <a className='footer_menu_item_link' href="#">Blog</a>
                        </li>
                    </ul>

                    <ul className="footer_menu">
                        <li className='footer_menu_item '>
                            <a className='footer_menu_item_link footer_menu_item_link_default' href="#">Contact</a>
                        </li>
                        <li className='footer_menu_item'>
                            <a className='footer_menu_item_link' href="#"><span className='footer_menu_item_link_span'>Email</span>: times@gmail.com</a>
                        </li>
                        <li className='footer_menu_item'>
                            <a className='footer_menu_item_link' href="#"><span className='footer_menu_item_link_span'>Phone</span>: +880 1000 0000</a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
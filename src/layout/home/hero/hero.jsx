import React, { useState } from "react";
import BigInfoCard from '../../../component/cards/bigInfoCard/bigInfoCard'
import '../hero/hero.scss'
import arrow from '../../../assets/rightArrow.svg'
import data from '../../../data/data'


export default function Hero() {
    const [count, setCount] = useState(0); 

    const watch = data[count];

    return (
        <div className="container">
            <div className="hero">
                <div className="hero_row">
                    <div className="hero_row_left">
                        <BigInfoCard
                            title={'Discover Luxurious Watch Which You Will Love'}
                            description={'What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now how nay cold real case. '}
                        />
                    </div>

                    <div className="hero_row_right">
                        <div key={watch.id} className='hero_row_right_card'>
                            <img src={watch.image} alt="heroImage" />
                            <div className="hero_row_right_card_content">
                                <div className='hero_row_right_card_content_price'>
                                    <p className="hero_row_right_card_content_price_text">
                                        $ {watch.price}
                                    </p>
                                    <div className="hero_row_right_card_content_price_btn">
                                        <button onClick={() => { setCount(0); }} className="hero_row_right_card_content_price_btn_button"></button>
                                        <button onClick={() => { setCount(1); }} className="hero_row_right_card_content_price_btn_button"></button>
                                        <button onClick={() => { setCount(2); }} className="hero_row_right_card_content_price_btn_button"></button>
                                        <button onClick={() => { setCount(3); }} className="hero_row_right_card_content_price_btn_button"></button>
                                    </div>
                                </div>

                                <div className='hero_row_right_card_content_info'>
                                    <a href="#" className="hero_row_right_card_content_info_link">
                                        {watch.name}
                                    </a>
                                    <img className='hero_row_right_card_content_info_image' src={arrow} alt="arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


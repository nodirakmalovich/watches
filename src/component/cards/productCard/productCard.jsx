import MainBtn from '../../buttons/mainBtn/mainBtn'
import ReverseMainBtn from '../../buttons/reverseMainBtn/reverseMainBtn'
import '../productCard/productCard.scss'
import heart from '../../../assets/Heart.svg'

export default function ProductCard(props) {
    return (
        <div className="productCard">
            <img src={heart} alt="heart" className="productCard_heart" />
            <div className="productCard_image">
                <img className='productCard_image_item' src={props?.image} alt={props?.name} />
            </div>
            <div className="productCard_body">
                <div className="productCard_body_price">
                    <p className="productCard_body_price_name">{props?.name}</p>
                    <p className="productCard_body_price_price"> ${props?.price}</p>
                </div>

                <p className="productCard_body_description">
                    {props?.description}
                </p>

                <div className="productCard_body_buttons">
                    <ReverseMainBtn
                        text={"Buy Now"}
                    />
                    <MainBtn
                        text={"Add Curt"}
                    />
                </div>
            </div>
        </div>
    )
}
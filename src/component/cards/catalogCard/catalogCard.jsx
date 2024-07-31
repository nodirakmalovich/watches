import MainBtn from "../../buttons/mainBtn/mainBtn";
import "../catalogCard/catalogCard.scss";

export default function CatalogCard(props) {
    return (
        <div className="catalogCard">
            <div className="catalogCard_image">
                <img className="catalogCard_image_img" src={props.image} alt={props.name} />
            </div>
            <div className="catalogCard_info">
                <h2 className="catalogCard_info_name">{props.name}</h2>
                <p className="catalogCard_info_description">{props.description}</p>
                <MainBtn
                    text={"View Details"}
                />
            </div>
        </div>
    )
}
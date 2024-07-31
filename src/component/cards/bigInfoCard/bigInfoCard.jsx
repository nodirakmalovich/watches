import "../bigInfoCard/bigInfoCard.scss"
import MainBtn from "../../buttons/mainBtn/mainBtn";

export default function BigInfoCard(props) {
    return (
        <div className="bigInfoCard">
            <h1 className="bigInfoCard_title">
                {props?.title}
            </h1>
            <p className="bigInfoCard_description">
                {props?.description}
            </p>
            <MainBtn
                text={'Read more'}
            />
        </div>
    )
}
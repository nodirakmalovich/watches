import "../miniInfo/miniInfo.scss"
import MainBtn from "../../buttons/mainBtn/mainBtn";

export default function MiniInfo(props) {
    return (
        <div className="miniInfo">
            <h1 className="miniInfo_title">
                {props?.title}
            </h1>
            <p className="miniInfo_description">
                {props?.description}
            </p>
            <MainBtn
                text={'View All'}
            />
        </div>
    )
}
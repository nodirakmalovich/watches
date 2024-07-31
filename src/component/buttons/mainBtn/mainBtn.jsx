import "../mainBtn/mainBtn.scss"

export default function MainBtn(props) {
    return (
        <button className="bigInfoCard_btn">
            {props?.text}
        </button>
    )
}
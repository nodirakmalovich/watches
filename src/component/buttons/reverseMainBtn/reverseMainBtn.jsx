import '../reverseMainBtn/reverseMainBtn.scss'

export default function ReverseMainBtn(props) {
    return (
        <button className="reverseMainBtn">
            {props?.text}
        </button>
    )
}
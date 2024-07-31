import '../lastInfo/lastInfo.scss'
import lastImage from '../../../assets/lastImage.svg'
import BigInfoCard from '../../../component/cards/bigInfoCard/bigInfoCard'

export default function LastInfo() {
    return (
        <div className="container">
            <div className="lastInfo">
                <div className="lastInfo_row">
                    <img src={lastImage} alt="lastImage" className="lastInfo_row_image" />
                    <BigInfoCard
                        title={"Discover Luxurious Watch Which You Will Love."}
                        description={"What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now how nay cold real case. "}
                    />
                </div>
            </div>
        </div>
    )
}
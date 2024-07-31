import "../advertise/advertise.scss";
import addImage1 from "../../../assets/addImage1.svg"
import addImage2 from "../../../assets/addImage2.svg"
import BigInfoCard from "../../../component/cards/bigInfoCard/bigInfoCard";


export default function Advertisment() {
    return (
        <div className="container">
            <div className="advertisment">
                <div className="advertisment_row">
                    <img className="advertisment_row_image" src={addImage1} alt="addImage1" />
                    <img className="advertisment_row_image" src={addImage2} alt="addImage1" />

                    <BigInfoCard
                        title={"Various Amazing Watch’s That Are Trending."}
                        description={"What looked like a small patch of purple grass, above five feet square, was moving across the snand in their direction. "}
                    />
                </div>
            </div>
        </div>
    )
}
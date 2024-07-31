import '../topMenu/topMenu.scss';
import MiniInfo from '../../../component/cards/miniInfo/miniInfo'
import data from '../../../data/data'
let topWatches = data.slice(0, 3)

export default function TopMenu() {
    return (
        <div className="container">
            <div className="topMenu">
                <div className="topMenu_row">
                    {
                        topWatches.map((item, index) => {
                            return (
                                <img className='topMenu_row_image' key={index} src={item.image} alt={item.name} />
                            )
                        })
                    }
                    <MiniInfo
                        title={"The Classic Watch Of Reference."}
                        description={"We have never left the limelight. In fact, based on random."}
                    />
                </div>
            </div>

        </div>
    )
}
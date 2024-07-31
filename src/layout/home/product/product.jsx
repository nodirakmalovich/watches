import MainBtn from '../../../component/buttons/mainBtn/mainBtn'
import Header from '../../../component/header/header'
import '../product/product.scss'
import data from '../../../data/data'
import ProductCard from '../../../component/cards/productCard/productCard'

let menu = ['All Times', 'Men Times', 'Women Times', 'Sports Times', 'Trend Times']

export default function Product() {
    return (
        <div className="container">
            <div className="product">
                <Header
                    title={"featured categories of Times"}
                    description={"What looked like a small patch of purple grass, above five feet square, was moving across the sand in thei."}
                />

                <div className="product_buttons">
                    {
                        menu.map((item, index) => {
                            return (
                                <MainBtn
                                    text={item}
                                />
                            )
                        })
                    }
                </div>

                <div className="product_row">
                    {
                        data.map((product, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    description={product.description}
                                />
                            )
                        })
                    }
                </div>

                <div className="product_btn">
                    <MainBtn
                        text={"View All"} />
                </div>
            </div>
        </div>
    )
}
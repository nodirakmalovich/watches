import CatalogCard from '../../../component/cards/catalogCard/catalogCard';
import Header from '../../../component/header/header';
import '../catalog/catalog.scss';

import catalog from '../../../data/catalogData'


export default function Catalog() {
    return (
        <div className="container">
            <div className="catalog">
                <Header
                    title={'Features of the Times'}
                    description={"We have never left the limelight. In fact, based and ordinary people who loves ."}
                />

                <div className="catalog_row">

                    {
                        catalog.map((item, index) => {
                            return (
                                <CatalogCard
                                    key={index}
                                    image={item.image}
                                    name={item.name}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
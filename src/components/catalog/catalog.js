import './catalog.css';
import catalog_main from '../../resources/catalog_main.svg';
import chair from '../../resources/chair.svg';
import bags from '../../resources/bags.svg';
import BBQ from '../../resources/BBQ.svg';
import axe from '../../resources/axe.svg';
import boat from '../../resources/boat.svg';
import tent from '../../resources/tent.svg';

function Catalog() {
    return (
        <div className='catalog-main'>
            <div className='catalog' >Каталог</div>
            <div>
                <span>
                    <img className="catalog-logo" src={catalog_main} alt="prp" />
                </span>
                <span>

                </span>
            </div>
        </div>
    )
}

export default Catalog;
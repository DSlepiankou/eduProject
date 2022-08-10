import './catalog.css';
import catalog_main from '../../resources/catalog_main.svg';

function Catalog() {
    return (
        <div className='catalog-main'>
            <div className='catalog' >Каталог</div>
            <div>
                <span>
                    <img className="catalog-logo" src={catalog_main} alt="prp" />
                </span>
            </div>
        </div>
    )
}

export default Catalog;
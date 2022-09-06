import './catalog.css';
import catalog_main from '../../resources/catalog_main.svg';
import chair from '../../resources/chair.svg';
import bags from '../../resources/bags.svg';
import BBQ from '../../resources/BBQ.svg';
import axe from '../../resources/axe.svg';
import boat from '../../resources/boat.svg';
import tent from '../../resources/tent.svg';

function Catalog() {

    function refreshPage() {
        console.log("Go to the bucket")
    }

    return (
        <div className='catalog-main'>
            <div className='catalog' >Каталог</div>
            <div>
                <span>
                    <img className="catalog-logo" src={catalog_main} alt="prp" />
                </span>
                <span>
                    <div>
                        <span className='catalog-buttons'>
                            <a className="tent-image " onClick={refreshPage} href="/#"><img  src={tent} alt="prp" /></a>
                            <text className='tent-text'>Палатки, шатры, тенты</text>
                            <img className="bags" src={bags} alt="prp" />
                            <text className='bags-text'>Спальные мешки и матрасы</text>
                            <img className="chair" src={chair} alt="prp" />
                            <text className='chair-text'>Туристическая мебель</text>
                        </span>
                    </div>
                    <div>
                        <span>
                            <img className="BBQ" src={BBQ} alt="prp" />
                            <text className='BBQ-text'>Мангалы и казаны</text>
                            <img className="axe" src={axe} alt="prp" />
                            <text className='axe-text'>Инструменты</text>
                            <img className="boat" src={boat} alt="prp" />
                            <text className='boat-text'>Прочее</text>
                        </span>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Catalog;
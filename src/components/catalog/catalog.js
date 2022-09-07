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
                <span className='catalog-buttons'>
                    <div >
                        <span >
                            <button className="tent-image" onClick={refreshPage} href="/#">
                                <img src={tent} alt="prp" />
                                <span className='tent-text'>Палатки, шатры, тенты</span>
                            </button>

                            <button className="bags-image" onClick={refreshPage} href="/#">
                                <img src={bags} alt="prp" />
                                <span className='bags-text'>Спальные мешки и матрасы</span>
                            </button>

                            <button className="chair-image" onClick={refreshPage} href="/#">
                                <img src={chair} alt="prp" />
                                <span className='chair-text'>Туристическая мебель</span>
                            </button>
                        </span>
                    </div>
                    <div>
                        <span>
                            <button className="BBQ-image" onClick={refreshPage} href="/#">
                                <img src={BBQ} alt="prp" />
                                <span className='BBQ-text'>Мангалы и казаны</span>
                            </button>
                            <button className='axe-image' onClick={refreshPage} href="/#">
                                <img src={axe} alt="prp" />
                                <span className='axe-text'>Инструменты</span>
                            </button>
                            <button className='boat-image' onClick={refreshPage} href="/#">
                                <img src={boat} alt="prp" />
                                <span className='boat-text'>Прочее</span>
                            </button>
                        </span>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Catalog;
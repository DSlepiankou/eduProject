import './header.css'
import banner from '../../resources/banner.png';
import bucket from '../../resources/bucket.svg';
import loupe from '../../resources/loupe.svg';


function Header() {

    function ScrollToCatalog() {
        console.log("Catalog")
    }

    function ScrollToTarrifs() {
        console.log("tariffs")
    }

    function ScrollToRent() {
        console.log("Rent")
    }

    function ScrollToContacts() {
        console.log("Contacts")
    }

    function refreshPage() {
        window.location.reload(false);
    }

    function goToBucket() {
        console.log("Go to the bucket")
    }

    return (
        <div className='main-header'>
            <div className="header d-flex">
            </div>
            <button className="logo" onClick={refreshPage} href="/#"><img src={banner} alt="prp" /></button>

            <span className='telephones'>
                <div>8 (029) 937-54-00</div>
                <div>8 (029) 997-09-05</div>
            </span>

            <div className='navi-bar'>
                <ul className='navi-buttons'>
                    <button className='catalogs' onClick={() => ScrollToCatalog()} href="/#" >Каталог</button>
                    <button className='tariffs' onClick={() => ScrollToTarrifs()} href="/#">Тарифы</button>
                    <button className='rent' onClick={() => ScrollToRent()} href="/#">Условия аренды</button>
                    <button className='contacts' onClick={() => ScrollToContacts()} href="/#">Контакты</button>
                </ul>
            </div>
            <div>
                <a className="bucket" onClick={goToBucket} href="/#"><img src={bucket} alt="bucket" /></a>
            </div>
            <div className='search'>
                <input type="text" className='search-input' placeholder='поиск' />
                <img src={loupe} alt="loupe" className='search-loupe' />
            </div>

        </div>
    );
}

export default Header;
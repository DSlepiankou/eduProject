import welcome from '../../resources/welcome_1.svg';
import welcome_steps from '../../resources/welcome_steps.svg';
import welcome_tent from '../../resources/welcome_tent.svg';
import './welcome.css';

function Welcome() {

    function OrderReCall() {
        console.log("call is ordered");
    }
    return (
        <div >
            <div className='first-row'>
                <span >
                    <img className="welcome-logo" src={welcome} alt="prp" />
                </span>
                <span>
                    <span className='welcome-words'>
                        <p>Добро пожаловать в </p>
                    </span>
                    <span className='welcome-words1'>
                        <p>prokatov.by</p>
                    </span>
                    <span className='slogan'>
                        <p>
                            Вдохновляющая любовь к природе
                        </p>
                    </span>
                    <span className='order-button'>
                        <button className='order' onClick={() => OrderReCall()} href="/#">заказать звонок</button>
                    </span>
                </span>
            </div>
            <div className='steps'>
                <span className="welcome-steps">
                    <img  src={welcome_steps} alt="prp" />
                </span>
                <span className="welcome-tent">
                    <img  src={welcome_tent} alt="prp" />
                </span>
            </div>
        </div>
    )
}

export default Welcome;

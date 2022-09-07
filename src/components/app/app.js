import Header from "../header/header";
import Welcome from "../welcome/welcome";
import Catalog from "../catalog/catalog";

function App() {
    return (
        <div>
            <Header />
            <div>
                <Welcome />
                <Catalog />
            </div>
        </div>
    );
}

export default App;

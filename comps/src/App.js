
import Route from './Components/Route';
import AccordianPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import Sidebar from './Components/sidebar';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';

function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            {/* <Link to="/accordian">Go to accordian</Link>
            <Link to="/dropdown">Go to dropdown</Link> */}
            <Sidebar />


            <div className="col-span-5" >
                {/* // if currpath is accordian then it will render else not  */}
                <Route path="/accordian">
                    <AccordianPage />
                </Route>

                <Route path="/">
                    <DropdownPage></DropdownPage>
                </Route>

                <Route path="/buttons">
                    <ButtonPage />
                </Route>

                <Route path="/modal">
                    <ModalPage />
                </Route>

                <Route path="/table">
                    <TablePage />
                </Route>
            </div>
        </div>
    );
}

export default App;
import Link from './Components/Link';
import Route from './Components/Route';
import AccordianPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';

function App() {
    return (
        <div>
            <Link to="/accordian">Go to accordian</Link>
            <Link to="/dropdown">Go to dropdown</Link>
            <div>

                {/* // if currpath is accordian then it will render else not  */}
                <Route path="/accordian">
                    <AccordianPage />
                </Route>

                <Route path="/dropdown">
                    <DropdownPage></DropdownPage>
                </Route>
            </div>
        </div>
    );
}

export default App;
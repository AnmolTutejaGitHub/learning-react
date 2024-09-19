import Button from "./Button";
import { GoBell } from 'react-icons/go';

function App() {


    //how to pass event handlers to our Button Componet
    // can pass handleClick etc why ? say when need mouseover how many can i add
    const handleClick = () => {
        console.log("clicked");
    }

    return (
        <div>
            <div>
                {/* success={true} same as success */}
                <Button success onClick={handleClick}>
                    <GoBell className="mr-1" />
                    Click Here</Button>
            </div>

            <div>
                <Button warning>Buy now !</Button>
            </div>

            <div>
                <Button danger rounded>Deals!</Button>
            </div>

            <div>
                <Button secondary rounded>offers!</Button>
            </div>

            <div>
                <Button primary outline>Heil People!</Button>
            </div>

        </div>
    );
}

export default App;
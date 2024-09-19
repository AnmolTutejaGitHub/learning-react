import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                {/* success={true} same as success */}
                <Button success>Click Here</Button>
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
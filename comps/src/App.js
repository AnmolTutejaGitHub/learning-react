import Accordion from "./Components/Accordion";

function App() {

    const items = [
        {
            id: '1',
            label: 'can I use React on a project ?',
            content: 'You can use React on any project you want'
        },
        {
            id: '2',
            label: 'can I use JS on a project ?',
            content: 'You can use JS on any project you want'
        },
        {
            id: '3',
            label: 'can I use nodejs on a project ?',
            content: 'You can use nodejs on any project you want'
        }
    ]

    return <Accordion items={items} />;
}

export default App;
import SearchBar from './components/SearchBar';

function App() {
    const handleSubmit = (term) => {

    }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
        </div>
    );
}

export default App;


// we need to call onClick on button but can call eventhandler whatever
// on our custom component so called it onSubmit
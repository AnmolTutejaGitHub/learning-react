import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';
import { useState } from 'react';

function App() {

    const [images, setImages] = useState([]);



    const handleSubmit = async (term) => {//this term will be provided in searchbar component  where this function is passed 
        //console.log('Do a search with', term); 
        // const result = searchImages(term); //promise will be assingned 
        const result = await searchImages(term);
        console.log(result);
        setImages(result);
    }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;


// we need to call onClick on button but can call eventhandler whatever
// on our custom component so called it onSubmit
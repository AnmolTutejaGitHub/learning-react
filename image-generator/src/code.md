app children : SearchBar , ImageList

### Data Flow 
Want to pass data from Searchbar to ImageList 
use parent for this 

```
function app(){
    useState --> Images 
    function handleSubmit(term){
        api call using term
        setImages(api array)
    }

    <Searchbar onSubmit={handleSubmit}/> //passed func as prop
    <imageList images={Images}/>
}

function SearchBar({onSubmit}){
    usestate term --> input field value
    handleFormsubmit(){
        onSubmit(term);
    }

    form onSubmit={handleFormSubmit}
    input
    /form 
}

```
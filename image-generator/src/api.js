import axios from 'axios';

const searchImages = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: { //tells unsplash who is making request 
            Authorization: 'Client-ID YOUR_CLIENT_ID'
        },
        params: { //key value pairs thast will turn into query string and added to url
            // query: 'cars'
            query: term,
        }
    })
    console.log(response);
    return response;
};

export default searchImages;
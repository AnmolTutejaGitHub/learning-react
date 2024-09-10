import axios from 'axios';

const searchImages = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: { //tells unsplash who is making request 
            Authorization: 'Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y'
        },
        params: { //key value pairs thast will turn into query string and added to url
            query: term,
            // query: term,
        }
    })
    console.log(response);
    return response.data.results;
};

export default searchImages;
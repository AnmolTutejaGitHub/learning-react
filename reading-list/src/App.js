import { useState, useEffect } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
import axios from 'axios';

function App() {

    const [books, setBooks] = useState([]); //arr of obj {id,title}

    //to fetch initial data when we open the app
    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    }

    //run code on 1st render so we get our initial API data
    useEffect(() => {
        fetchBooks();
    }, [])


    const createBook = async (title) => {
        // without outside api
        // console.log(title);
        // const updatedBooks = [...books,
        // {
        //     id: Math.round(Math.random() * 9999),
        //     title,
        // }];

        // setBooks(updatedBooks);

        //
        const response = await axios.post('http://localhost:3001/books', {
            title: title
        }); //adding title property or creating a book obj? with title

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    }


    const deleteBookById = async (id) => {

        //code without outside API
        // const updatedBooks = books.filter((book) => {
        //     return book.id !== id;
        // })
        // setBooks(updatedBooks);


        //using API
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    }

    const editBookById = async (id, newTitle) => {
        // without using outside API
        // const updatedBooks = books.map((book) => {
        //     if (book.id === id) return { ...book, title: newTitle };
        //     return book;
        // })
        // setBooks(updatedBooks);

        //using API
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });


        const updatedBooks = books.map((book) => {
            if (book.id === id) return { ...book, ...response.data };
            return book;
        })
        setBooks(updatedBooks);
    }


    return (
        <div>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}
export default App;
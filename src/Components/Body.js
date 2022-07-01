import React, {useState} from 'react';
import MainContent from './MainContent';
import {bookApi} from './bookApi';
import './Body.css';

function Body() {

    const [info, setInfo] = useState([])
    const [amountOfInf, setAmountOfInf] = useState();
    const changeHandle = (event) => {
        const value = event.target.value;
        let links = `https://www.googleapis.com/books/v1/volumes?q=${value ? value : 'all'}}&projection=full&key=AIzaSyCdrXm7ZD4Jn0vy_QrUkZLKhtFkFohzqVs`
        bookApi(links).then((response) => setInfo(response.items));
        bookApi(links).then((response) => setAmountOfInf(response.totalItems));
    }

    return (
        <div className='Div'>
            <h1>Search for books</h1>
            <input onChange={changeHandle} />
            <div className='inlineDiv'>
                <p>Category</p>
                <select>
                    <option>Action</option>
                    <option>IT</option>
                    <option>Other</option>
                </select>
                <p>Sorting by</p>
                <select>
                    <option>Relevance</option>
                    <option>Rate</option>
                    <option>Genre</option>
                </select>
            </div>
            <MainContent amountOfInf={amountOfInf} info={info}/>
        </div>
    );
}

export default Body;
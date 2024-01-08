import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const author = 'Jordan Moore';
const title = 'Interesting Facts For Curious Minds';
const image = 'https://m.media-amazon.com/images/I/411-+bcHfKL._SY445_SX342_.jpg';

function BookList() {
    return(
        <section className='booklist'>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </section>
    )
}

const Book = (props) => {
    return (
        <article className='book'>
            <img
                src={image}
                alt={title}
            />
            <h2>{title}</h2>
            <h4>{author}</h4>
            {console.log(props)}
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
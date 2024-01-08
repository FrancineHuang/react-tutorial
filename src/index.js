import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const firstBook = {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    image: 'https://m.media-amazon.com/images/I/411-+bcHfKL._SY445_SX342_.jpg',
}
const secondBook = {
    author: 'James Clear',
    title: 'Atomic Habits',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  };

function BookList() {
    return(
        <section className='booklist'>
            <Book
                author={firstBook.author}
                title={firstBook.title}
                image={firstBook.image}
            />
            <Book
                author={secondBook.author}
                title={secondBook.title}
                image={secondBook.image}
            />
        </section>
    )
}

const Book = (props) => {
    const {image, title, author} = props;
    return (
        <article className='book'>
            <img
                src={image}
                alt={title}
            />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
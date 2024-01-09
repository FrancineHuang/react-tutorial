import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { books } from './books'


function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                console.log(book);

                return <Book {...book} key={book.id} />;
            })}
        </section>
    );
}

const Book = (props) => {
    const { image, title, author } = props;
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
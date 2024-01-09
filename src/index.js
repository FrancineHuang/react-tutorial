import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { books } from './books'


function BookList() {
    return (
        <>
            <h1>Amazon Best Sellers</h1>
            <section className='booklist'>
                {books.map((book, index) => {
                    console.log(book);

                    return <Book {...book} key={book.id} number={index}/>;
                })}
            </section>
        </>
    );
}

const Book = (props) => {
    const { image, title, author, number } = props;
    return (
        <article className='book'>
            <img
                src={image}
                alt={title}
            />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <span className='number'>{`# ${number + 1}`}</span>
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

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

const Book = () => {
    const author = 'Jordan Moore';
    const title = 'The Heaven & Earth Grocery Store: A Novel';
    return (
        <article className='book'>
            <img
                src='https://m.media-amazon.com/images/I/411-+bcHfKL._SY445_SX342_.jpg'
                alt='The Heaven & Earth Grocery Store: A Novel'
            />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
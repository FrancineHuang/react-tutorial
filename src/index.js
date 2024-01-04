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
    return (
        <article className='book'>
            <Image />
            <Title />
            <Author />
        </article>
    )
}

const Image = () => (
    <img 
        src='https://m.media-amazon.com/images/I/411-+bcHfKL._SY445_SX342_.jpg'
        alt='The Heaven & Earth Grocery Store: A Novel'
    />
)

const Title = () => {
    return <h2>The Heaven & Earth Grocery Store: A Novel</h2>
}

const Author = () => {
    return <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.5rem'}}>James McBride</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
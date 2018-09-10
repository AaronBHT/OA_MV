import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Book extends Component {
    render() {
        const { books } = this.props;
        return (
            <div>{books.map((book) =>
                <li key={book.primary_isbn13}>
                    <Link to={`/books/${book.primary_isbn13}`}>
                        {book.title}
                    </Link>
                </li>
            )}
            </div>
        )
    }
}

export default Book;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchBooks } from './actions';
import Book from './components/Book';

class App extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  renderBookLists() {
    console.log(this.props.bookLists);
    return this.props.bookLists.map((bookList) => {
      return (
        <div key={bookList.list_id}>
          <div>{bookList.list_name}</div>
          <ul><Book books={bookList.books} /></ul>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          {this.renderBookLists()}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { bookLists: state.bookLists };
}
export default connect(mapStateToProps, { fetchBooks })(App);

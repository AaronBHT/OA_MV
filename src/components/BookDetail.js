import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class BookDetail extends Component {
    render() {
        return (
            <div>
                <Link to='/'> Back </Link>
                <div>1sadasdasda</div>
            </div>
            
        )
    }
}

function mapStateToProps({ books }, ownProps) {
    return { book: books[ownProps.match.params.primary_isbn13] };
  }
export default connect(mapStateToProps)(BookDetail);
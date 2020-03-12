import React, { Component } from 'react';

import UserForm from '../Sections/Booking/UserForm'



class Book extends Component {
    render() {
        return (
            <div className="content">
                <h1>Book Page</h1>
                <UserForm />
            </div>
        );

    }
}

export default Book;
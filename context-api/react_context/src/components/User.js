import React, { Component } from 'react';
import Field from './Field';
import Button from './Button';
import Label from './Label';

class User extends Component {
    render() {
        return (
            <div className='ui container'>
            <Label/>
                <Field/>
                <Button/>
            </div>
        );
    }
}

export default User;
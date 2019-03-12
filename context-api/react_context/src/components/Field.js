import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
    static contextType = LanguageContext;
    render() {
        const text = this.context === 'English' ? 'Name' : '那么';
        return (
            <div className='ui form'>
            
                <label>
                {/* <LanguageContext.Consumer>
                    {value => value === 'English' ? 'Name' : '那么'}
                </LanguageContext.Consumer> */}
                {text}
                </label>
                <input/>
            </div>
        );
    }
}

export default Field;
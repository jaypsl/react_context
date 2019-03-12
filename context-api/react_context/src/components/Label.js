import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

// Label.contextType = LanguageContext;


class Label extends React.Component {
    // static contextType = LanguageContext;

    render(){
        // const text = this.context === 'English' ? 'Select a Language' : '选择一种语言';
        return(
            <div>
                <LanguageContext.Consumer>
                {value => value === 'English' ? 'Select a Langauge' : '选择一种语言'}
                </LanguageContext.Consumer>
                
            </div>
        )
    }  
}

export default Label;

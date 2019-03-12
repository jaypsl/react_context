import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
    // static contextType = LanguageContext;

    render() {
    // console.log('context value is >', this.context);
    // const text = this.context === 'English' ? 'Submit' : '提交'
;
        return (
            <ColorContext.Consumer>
            {colorValue => 
                <button className={`ui button ${colorValue}`}>
                {/* {text} */}
                <LanguageContext.Consumer>
                    {value => value==='English' ? 'Submit' : '提交'}
                </LanguageContext.Consumer>
                
                </button>
            }
            </ColorContext.Consumer>
                
        );
    }
}

export default Button;
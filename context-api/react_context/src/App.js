import React, { Component } from 'react';
import User from './components/User';
import LanguageContext from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  static contextType = LanguageContext;

  state = {language: 'English'}
  
  onLanguageChange = language => {
    this.setState({language})  
  }

  render() {
    
    return (
      <div className="ui container" style={{margin:'10px'}}>
      <i className='flag us' onClick={this.onLanguageChange.bind(this, 'English')}/>
        <i className='flag cn' onClick={this.onLanguageChange.bind(this, 'Chinese')}/>
        <br/>
        {/* {this.state.language} */}
        <ColorContext.Provider value='secondary'>
        <LanguageContext.Provider value={this.state.language}>
        <User/>
        </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;

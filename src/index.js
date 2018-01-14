import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HLText from 'react-best-highlight-text';
// import HLText from './HighLightText';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div> 
        Highlight first: &nbsp;
        <HLText
          normalTextClsName="normalText"
          highlightTextClsName="highlightText"
          text="AaBbCAd"
          keyword="a"
        />
        </div>
       <div> 
        Highlight first and ignore case: &nbsp;
        <HLText
          normalTextClsName="normalText"
          highlightTextClsName="highlightText"
          text="AaBbCAd"
          keyword="a"
          ignoreCase
        />
        </div>
       <div> 
        Highlight all and ignore case: &nbsp;
        <HLText
          normalTextClsName="normalText"
          highlightTextClsName="highlightText"
          text="AaBbCAd"
          keyword="a"
          ignoreCase
          highlightAllMatch
        />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App;

import React, {
  Component
} from 'react';
import Index from './view/index/index';
import RFooter from './components/common/footer/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Index />
        我是比财
        <RFooter/>
      </div>
    );
  }
}

export default App;
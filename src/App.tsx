import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import About from './components/about/About';
import Playground from './components/playground/Playground';
import Message from './components/message/Message';
import Navbar from './components/navbar/Navbar';
import Events from './components/events/Events';
import Lists from './components/lists/Lists';
import Api from './components/api/Api';


function App() {
  //Void
  const warining = (): void => {
    console.log('Warning');
  };

  return (
    
    <Router>
      <div className='App'>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Message}/>
          <Route path='/about' component={About}/>
          <Route path='/playground' component={Playground}/>
          <Route path='/events' component={Events}/>
          <Route path='/lists' component={Lists}/>
          <Route path='/api' component={Api}/>
          <Route/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

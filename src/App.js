import React from 'react';
import './App.css';
import _ from 'lodash';

function App() {
  return (
    <div className="App">
      Remote site - content changes
      <p>
        Lodash v - {_.VERSION}
      </p>
    </div>
  );
}

export default App;

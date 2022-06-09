

import React from "react"
import { Counter } from './Component';
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
       <Provider store={store}>
       <Counter />
       </Provider>
     
    </div>
  );
}

export default App;



import React from "react"
import { Counter } from './redux-toolkit-1/Component';
import { store } from './redux-toolkit-1/store'
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

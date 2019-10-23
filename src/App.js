import React from 'react';
import './styles/App.css';
import Card from './components/Card';
import store from './redux/store';

import { selectLocation } from './redux/actions';
import { Provider } from 'react-redux'


//store
// let store = createStore(location);
// store.subscribe(() => console.log(store.getState()));
store.dispatch(selectLocation(1));
// store.dispatch(selectLocation(2));
// store.dispatch(selectLocation(3));


function App() {

  return (
    <div className="app">

      <main>
        <Provider store={store}>
          {/* <显示时间> */}

          <Card />
        </Provider>
      </main>
    </div>
  );
}

export default App;

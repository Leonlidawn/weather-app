import React from 'react';
import './styles/App.css';
import Card from './components/Card'
import { createStore } from 'redux';



//action type
const SELECT_LOCATION = 'select_location'

//action
const selectLocation = (locationIndex) => {
  return { type: SELECT_LOCATION, locationIndex };
};

//reducer
const location = (state = 0, action) => {
  switch (action.type) {
    case (SELECT_LOCATION):
      return action.locationIndex;
    default:
      return state;
  }
}
//store
let store = createStore(location);
store.subscribe(() => console.log(store.getState()));
store.dispatch(selectLocation(1));
store.dispatch(selectLocation(2));
store.dispatch(selectLocation(3));


//

//





function App() {



  return (
    <div className="app">

      <main>
        {/* <Provider store={store}> */}
        {/* <显示时间> */}

        <Card />
        {/* </Provider> */}
      </main>
    </div>
  );
}

export default App;

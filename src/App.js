import React from 'react';
import './styles/App.css';
import Card from './components/Card'


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
